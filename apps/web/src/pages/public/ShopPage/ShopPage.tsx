import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  ScissorsIcon,
  ClockIcon,
  CaretLeftIcon,
  CaretRightIcon,
  RepeatIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { shopService } from "@/services/shop.service";
import { bookingService } from "@/services/booking.service";
import { Modal } from "@/components/ui/Modal";
import { ShopLogo } from "@/components/ui/ShopLogo";
import { CookieBanner } from "@/components/ui/CookieBanner";
import type { ServiceDTO } from "@scissorflow/shared";

const DAYS_IT = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
const MONTHS_IT = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
];
const CACHE_TTL_MS = 3 * 60 * 1000;

type BookingModalStep = "form" | "otp" | "confirmed";
type SlotStatus = "free" | "pending" | "confirmed";
type SlotWithStatus = { time: string; status: SlotStatus };
type RecurrenceConfig = {
  enabled: boolean;
  type: "WEEKLY" | "MONTHLY";
  repeat: number;
};

type ServiceSlots = {
  data: Record<string, SlotWithStatus[]>;
  loadedAt: number;
  loading: boolean;
  loadedMonths: Set<string>;
};

const isAxiosError = (
  error: unknown,
): error is { response: { status: number; data: { message: string } } } => {
  return typeof error === "object" && error !== null && "response" in error;
};

export const ShopPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [shop, setShop] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // CACHE SLOT PER SERVIZIO
  const [slotsCache, setSlotsCache] = useState<Record<string, ServiceSlots>>(
    {},
  );
  const prefetchedRef = useRef<Set<string>>(new Set());

  const [selectedService, setSelectedService] = useState<ServiceDTO | null>(
    null,
  );
  const [weekOffset, setWeekOffset] = useState(0);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<BookingModalStep>("form");
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [lockError, setLockError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [locking, setLocking] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    otp: "",
  });
  const [recurrence, setRecurrence] = useState<RecurrenceConfig>({
    enabled: false,
    type: "WEEKLY",
    repeat: 4,
  });

  const isSlotPast = (dateStr: string, time: string) => {
    const [h, m] = time.split(":").map(Number);
    const slotDate = new Date(dateStr);
    slotDate.setHours(h, m, 0, 0);
    return slotDate < new Date();
  };

  // CARICA SLOT PER UN SERVIZIO
  const loadServiceSlots = useCallback(
    async (shopId: string, serviceId: string, forceReload = false) => {
      setSlotsCache((prev) => {
        const existing = prev[serviceId];
        // SE GIÀ IN CACHE, SALTA
        if (
          !forceReload &&
          existing &&
          !existing.loading &&
          Date.now() - existing.loadedAt < CACHE_TTL_MS
        ) {
          return prev;
        }
        // IMPOSTA LOADING MA MANTIENI DATI ESISTENTI
        return {
          ...prev,
          [serviceId]: {
            data: existing?.data ?? {},
            loadedAt: existing?.loadedAt ?? 0,
            loading: true,
            loadedMonths: existing?.loadedMonths ?? new Set(),
          },
        };
      });

      try {
        const today = new Date();
        const thisMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
        const nextMonthDate = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          1,
        );
        const nextMonth = `${nextMonthDate.getFullYear()}-${String(nextMonthDate.getMonth() + 1).padStart(2, "0")}`;

        const [thisMonthSlots, nextMonthSlots] = await Promise.all([
          bookingService.getMonthSlots(shopId, serviceId, thisMonth),
          bookingService.getMonthSlots(shopId, serviceId, nextMonth),
        ]);

        setSlotsCache((prev) => ({
          ...prev,
          [serviceId]: {
            data: { ...thisMonthSlots, ...nextMonthSlots },
            loadedAt: Date.now(),
            loading: false,
            loadedMonths: new Set([thisMonth, nextMonth]),
          },
        }));
      } catch {
        console.error("Errore caricamento slot per servizio", serviceId);
        setSlotsCache((prev) => ({
          ...prev,
          [serviceId]: {
            ...prev[serviceId],
            loading: false,
            loadedAt: prev[serviceId]?.loadedAt ?? 0,
          },
        }));
      }
    },
    [],
  );

  // CARICA MESE EXTRA SE NECESSARIO
  const ensureMonthLoaded = useCallback(
    async (shopId: string, serviceId: string, monthStr: string) => {
      setSlotsCache((prev) => {
        const existing = prev[serviceId];
        if (existing?.loadedMonths?.has(monthStr)) return prev;
        return prev;
      });

      const existing = slotsCache[serviceId];
      if (existing?.loadedMonths?.has(monthStr)) return;

      try {
        const monthSlots = await bookingService.getMonthSlots(
          shopId,
          serviceId,
          monthStr,
        );
        setSlotsCache((prev) => {
          const curr = prev[serviceId];
          if (!curr) return prev;
          const newLoadedMonths = new Set(curr.loadedMonths);
          newLoadedMonths.add(monthStr);
          return {
            ...prev,
            [serviceId]: {
              ...curr,
              data: { ...curr.data, ...monthSlots },
              loadedMonths: newLoadedMonths,
            },
          };
        });
      } catch {
        console.error("Errore caricamento mese extra", monthStr);
      }
    },
    [slotsCache],
  );

  useEffect(() => {
    if (!slug) return;
    loadShop();
  }, [slug]);

  const loadShop = async () => {
    try {
      setLoading(true);
      const data = await shopService.getPublicShop(slug!);
      setShop(data);

      const activeServices =
        data.services?.filter((s: ServiceDTO) => s.isActive) ?? [];
      if (activeServices.length === 0) return;

      const firstService = activeServices[0];
      setSelectedService(firstService);

      // CARICA PRIMO SERVIZIO SUBITO
      await loadServiceSlots(data.id, firstService.id);

      // PREFETCH ALTRI SERVIZI IN BACKGROUND
      if (activeServices.length > 1) {
        setTimeout(() => {
          activeServices.slice(1).forEach((s: ServiceDTO) => {
            if (!prefetchedRef.current.has(s.id)) {
              prefetchedRef.current.add(s.id);
              loadServiceSlots(data.id, s.id);
            }
          });
        }, 500);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  // CARICA MESI EXTRA QUANDO CAMBIA SETTIMANA
  useEffect(() => {
    if (!shop || !selectedService) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const monthsNeeded = new Set<string>();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + weekOffset * 7 + i);
      const monthStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      monthsNeeded.add(monthStr);
    }
    monthsNeeded.forEach((monthStr) => {
      ensureMonthLoaded(shop.id, selectedService.id, monthStr);
    });
  }, [weekOffset, shop, selectedService]);

  const handleSelectService = (service: ServiceDTO) => {
    setSelectedService(service);
    setSelectedDate(null);
    setSelectedTime(null);
    // SE NON IN CACHE O SCADUTA RICARICA, ALTRIMENTI MOSTRA SUBITO
    const cached = slotsCache[service.id];
    if (!cached || Date.now() - cached.loadedAt > CACHE_TTL_MS) {
      loadServiceSlots(shop.id, service.id);
    }
  };

  const getWeekDays = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentSlots = slotsCache[selectedService?.id ?? ""]?.data ?? {};
    const days = [];
    const dayOfWeek = today.getDay(); // 0=dom, 1=lun...
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + mondayOffset + weekOffset * 7 + i);
      const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      days.push({
        date,
        dateStr,
        dayName: DAYS_IT[date.getDay()],
        dayNum: date.getDate(),
        monthName: MONTHS_IT[date.getMonth()],
        isToday: i === 0 && weekOffset === 0,
        isPast: date < new Date(new Date().setHours(0, 0, 0, 0)),
        slots: (currentSlots[dateStr] ?? []) as SlotWithStatus[],
      });
    }
    return days;
  };

  const handleSlotClick = (dateStr: string, time: string) => {
    setSelectedDate(dateStr);
    setSelectedTime(time);
    setModalStep("form");
    setLockError("");
    setRecurrence({ enabled: false, type: "WEEKLY", repeat: 4 });
    setForm({ firstName: "", lastName: "", email: "", phone: "", otp: "" });
    setModalOpen(true);
  };

  const handleLockSlot = async () => {
    if (!selectedDate || !selectedTime || !selectedService) return;
    setLocking(true);
    setLockError("");
    try {
      const startAt = new Date(
        `${selectedDate}T${selectedTime}:00`,
      ).toISOString();
      const result = await bookingService.lockSlot({
        shopId: shop.id,
        serviceId: selectedService.id,
        startAt,
        customer: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email || undefined,
          phone: form.phone || undefined,
        },
        recurrence: recurrence.enabled
          ? { type: recurrence.type, repeat: recurrence.repeat }
          : undefined,
      });
      setBookingId(result.bookingId);
      setModalStep("otp");
    } catch (error) {
      if (isAxiosError(error) && error.response.status === 403) {
        setLockError(
          "Non è possibile prenotare con questi recapiti. Contatta direttamente il barbiere.",
        );
      } else {
        setLockError("Slot non più disponibile. Scegine un altro.");
      }
    } finally {
      setLocking(false);
    }
  };

  const handleConfirmOtp = async () => {
    if (!bookingId) return;
    setConfirming(true);
    setOtpError("");
    try {
      await bookingService.confirmOtp({ bookingId, otpCode: form.otp });
      setModalStep("confirmed");
      // INVALIDA E RICARICA SOLO IL SERVIZIO CORRENTE IN BACKGROUND
      if (selectedService) {
        loadServiceSlots(shop.id, selectedService.id, true);
      }
    } catch (error) {
      if (isAxiosError(error) && error.response.status === 422) {
        setOtpError("Codice OTP non valido");
      } else {
        setOtpError("Errore durante la conferma. Riprova.");
      }
    } finally {
      setConfirming(false);
    }
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  };

  const primaryColor = shop?.config?.primaryColor ?? "#1a1a1a";
  const weekDays = shop ? getWeekDays() : [];
  const currentServiceCache = slotsCache[selectedService?.id ?? ""];
  const loadingSlots =
    currentServiceCache?.loading && !currentServiceCache?.data;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !shop) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <ScissorsIcon
            size={48}
            weight="duotone"
            className="text-gray-300 mx-auto mb-3"
          />
          <p className="text-gray-500 font-medium">Shop non trovato</p>
          <p className="text-gray-400 text-sm mt-1">
            Controlla il link e riprova
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div
        className="relative h-72 md:h-screen flex items-end"
        style={{
          background: shop.config?.coverImage
            ? `url(${shop.config.coverImage}) center/cover`
            : `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}cc 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative w-full px-4 pb-8 max-w-5xl mx-auto">
          <div className="flex items-end gap-4">
            <ShopLogo
              shopName={shop.name}
              primaryColor={primaryColor}
              logoStyle={shop.config?.logoStyle ?? "badge-vintage"}
              logoUrl={shop.config?.logoUrl}
              size={64}
              radius={16}
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{shop.name}</h1>
              {shop.config?.tagline && (
                <p className="text-white/70 text-sm mt-0.5">
                  {shop.config.tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENUTO */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* SERVIZI */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Servizi
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {shop.services
              ?.filter((s: ServiceDTO) => s.isActive)
              .map((service: ServiceDTO) => {
                const isCached = !!slotsCache[service.id]?.loadedAt;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleSelectService(service)}
                    className={`
                      shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border
                      transition-all text-left relative
                      ${
                        selectedService?.id === service.id
                          ? "border-transparent text-white shadow-md"
                          : "bg-white border-gray-100 text-gray-900 hover:border-gray-300"
                      }
                    `}
                    style={
                      selectedService?.id === service.id
                        ? { backgroundColor: primaryColor }
                        : {}
                    }
                  >
                    <div>
                      <p className="text-sm font-medium whitespace-nowrap">
                        {service.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className={`text-xs ${selectedService?.id === service.id ? "text-white/70" : "text-gray-400"}`}
                        >
                          <ClockIcon size={10} className="inline mr-0.5" />
                          {formatDuration(service.duration)}
                        </span>
                        {service.price != null && shop.config?.showPrices && (
                          <span
                            className={`text-xs ${selectedService?.id === service.id ? "text-white/70" : "text-gray-400"}`}
                          >
                            €{service.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* INDICATORE PREFETCH IN CORSO */}
                    {!isCached && selectedService?.id !== service.id && (
                      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse" />
                    )}
                  </button>
                );
              })}
          </div>
        </div>

        {/* CALENDARIO */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Disponibilità
            </h2>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                disabled={weekOffset === 0}
                className="p-1.5 rounded-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <CaretLeftIcon size={16} />
              </button>
              <button
                type="button"
                onClick={() => setWeekOffset(weekOffset + 1)}
                className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <CaretRightIcon size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3 md:gap-4">
            {weekDays.map(
              ({
                dateStr,
                dayName,
                dayNum,
                monthName,
                isToday,
                isPast,
                slots: daySlots,
              }) => (
                <div key={dateStr} className="flex flex-col gap-1">
                  <div
                    className={`text-center pb-2 border-b ${isPast ? "border-gray-100" : "border-gray-200"}`}
                  >
                    <p
                      className={`text-xs font-medium ${isPast ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {dayName}
                    </p>
                    <p
                      className={`text-sm font-semibold mt-0.5 w-7 h-7 rounded-full flex items-center justify-center mx-auto ${
                        isToday
                          ? "text-white"
                          : isPast
                            ? "text-gray-300"
                            : "text-gray-900"
                      }`}
                      style={isToday ? { backgroundColor: primaryColor } : {}}
                    >
                      {dayNum}
                    </p>
                    <p
                      className={`text-xs ${isPast ? "text-gray-300" : "text-gray-400"}`}
                    >
                      {monthName}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    {loadingSlots ? (
                      <>
                        <div className="h-7 bg-gray-100 rounded animate-pulse" />
                        <div className="h-7 bg-gray-100 rounded animate-pulse" />
                      </>
                    ) : daySlots.length === 0 ? (
                      <div className="text-center py-2">
                        <span className="text-xs text-gray-300">-</span>
                      </div>
                    ) : (
                      daySlots.map((slot) => {
                        const past = isSlotPast(dateStr, slot.time);
                        return (
                          <button
                            key={`${dateStr}-${slot.time}-${slot.status}`}
                            type="button"
                            disabled={past || slot.status !== "free"}
                            onClick={() =>
                              !past &&
                              slot.status === "free" &&
                              handleSlotClick(dateStr, slot.time)
                            }
                            className={`
                            w-full py-2 rounded-lg text-xs font-medium transition-all
                            ${past ? "bg-gray-100 text-gray-300 cursor-not-allowed" : ""}
                            ${!past && slot.status === "free" ? "bg-green-100 text-green-700 hover:bg-green-200" : ""}
                            ${!past && slot.status === "pending" ? "bg-yellow-100 text-yellow-700 cursor-not-allowed" : ""}
                            ${!past && slot.status === "confirmed" ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
                          `}
                          >
                            {slot.time}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-green-100" />
              <span className="text-xs text-gray-400">Disponibile</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-yellow-100" />
              <span className="text-xs text-gray-400">
                In attesa, conferma OTP in corso
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-gray-100" />
              <span className="text-xs text-gray-400">Occupato</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-gray-200 py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {shop.name} — Powered by{" "}
            <a
              href="https://scissorflow.it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              ScissorFlow
            </a>
          </p>
          <div className="flex items-center gap-4">
            {shop.config?.legalMode === "url" && shop.config?.legalUrl ? (
              <a
                href={shop.config.legalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Privacy & Cookie Policy
              </a>
            ) : (
              <a
                href={`/b/${slug}/legal`}
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Privacy & Cookie Policy
              </a>
            )}
          </div>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      {!localStorage.getItem(`cookie_consent_${slug}`) && (
        <CookieBanner
          slug={slug!}
          primaryColor={primaryColor}
          shopName={shop.name}
          legalMode={shop.config?.legalMode}
          legalUrl={shop.config?.legalUrl}
        />
      )}

      {/* MODAL PRENOTAZIONE */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={
          modalStep === "form"
            ? "Completa la prenotazione"
            : modalStep === "otp"
              ? "Conferma il tuo codice"
              : "Prenotazione confermata!"
        }
      >
        {modalStep === "form" && (
          <div className="flex flex-col gap-4">
            <div className="px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-0.5">
                Riepilogo
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {selectedService?.name}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                {selectedDate} alle {selectedTime}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nome *
                </label>
                <input
                  className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="Mario"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Cognome *
                </label>
                <input
                  className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="Rossi"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="mario@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Telefono
              </label>
              <input
                type="tel"
                className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="+39 333 1234567"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            {/* RICORRENZA */}
            <div className="border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  setRecurrence((r) => ({ ...r, enabled: !r.enabled }))
                }
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <RepeatIcon
                    size={16}
                    className="text-gray-600 dark:text-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Prenotazione ricorrente
                  </span>
                </div>
                <div
                  className={`w-9 h-5 rounded-full transition-colors relative ${recurrence.enabled ? "bg-gray-900 dark:bg-white" : "bg-gray-200 dark:bg-gray-600"}`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white dark:bg-gray-900 shadow transition-all ${recurrence.enabled ? "left-4" : "left-0.5"}`}
                  />
                </div>
              </button>

              {recurrence.enabled && (
                <div className="px-4 py-3 flex flex-col gap-3 bg-white dark:bg-gray-900">
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Ripeti automaticamente questa prenotazione
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setRecurrence((r) => ({ ...r, type: "WEEKLY" }))
                      }
                      className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all border ${
                        recurrence.type === "WEEKLY"
                          ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      Ogni settimana
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setRecurrence((r) => ({ ...r, type: "MONTHLY" }))
                      }
                      className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all border ${
                        recurrence.type === "MONTHLY"
                          ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      Ogni mese
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-600 dark:text-gray-300">
                      Numero di appuntamenti
                    </label>
                    <div className="flex gap-2">
                      {[2, 3, 4, 6, 8, 12].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() =>
                            setRecurrence((r) => ({ ...r, repeat: n }))
                          }
                          className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                            recurrence.repeat === n
                              ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">
                    Verranno create <strong>{recurrence.repeat}</strong>{" "}
                    prenotazioni{" "}
                    {recurrence.type === "WEEKLY" ? "settimanali" : "mensili"} a
                    partire dal {selectedDate}
                  </p>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500">
              * Almeno email o telefono richiesti
            </p>
            {lockError && <p className="text-sm text-red-500">{lockError}</p>}

            <button
              type="button"
              onClick={handleLockSlot}
              disabled={
                !form.firstName ||
                !form.lastName ||
                (!form.email && !form.phone) ||
                locking
              }
              className="w-full py-3 rounded-xl text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ backgroundColor: primaryColor }}
            >
              {locking && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {recurrence.enabled
                ? `Prenota ${recurrence.repeat} appuntamenti`
                : "Continua"}
            </button>
          </div>
        )}

        {modalStep === "otp" && (
          <div className="flex flex-col gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto">
              <span className="text-2xl">📧</span>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Abbiamo inviato un codice a
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {form.email || form.phone}
              </p>
            </div>
            <input
              className="w-full px-4 py-3 text-center text-2xl font-mono tracking-widest rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
              placeholder="000000"
              maxLength={6}
              value={form.otp}
              onChange={(e) =>
                setForm({ ...form, otp: e.target.value.replace(/\D/g, "") })
              }
            />
            {otpError && <p className="text-sm text-red-500">{otpError}</p>}
            <button
              type="button"
              onClick={handleConfirmOtp}
              disabled={form.otp.length !== 6 || confirming}
              className="w-full py-3 rounded-xl text-white text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ backgroundColor: primaryColor }}
            >
              {confirming && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              Conferma prenotazione
            </button>
          </div>
        )}

        {modalStep === "confirmed" && (
          <div className="text-center py-4 flex flex-col gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
              style={{ backgroundColor: `${primaryColor}20` }}
            >
              <span className="text-3xl">
                <CheckCircleIcon
                  size={16}
                  weight="duotone"
                  className="inline mr-1.5 text-green-600 dark:text-green-400"
                />
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {recurrence.enabled
                  ? `${recurrence.repeat} appuntamenti confermati!`
                  : "Prenotazione confermata!"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {selectedService?.name}
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                {selectedDate} alle {selectedTime}
              </p>
              {recurrence.enabled && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {recurrence.type === "WEEKLY"
                    ? "Ogni settimana"
                    : "Ogni mese"}{" "}
                  per {recurrence.repeat} volte
                </p>
              )}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Riceverai una email di conferma con tutti i dettagli
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="w-full py-3 rounded-xl text-white text-sm font-medium"
              style={{ backgroundColor: primaryColor }}
            >
              Chiudi
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

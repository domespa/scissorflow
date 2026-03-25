import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  ScissorsIcon,
  ClockIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { shopService } from "@/services/shop.service";
import { bookingService } from "@/services/booking.service";
import { Modal } from "@/components/ui/Modal";
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

type BookingModalStep = "form" | "otp" | "confirmed";
type SlotStatus = "free" | "pending" | "confirmed";
type SlotWithStatus = { time: string; status: SlotStatus };

export const ShopPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [shop, setShop] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [slots, setSlots] = useState<Record<string, SlotWithStatus[]>>({});
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDTO | null>(
    null,
  );
  const [weekOffset, setWeekOffset] = useState(0);

  // MESI GIÀ CARICATI
  const loadedMonths = useRef<Set<string>>(new Set());

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

  const isSlotPast = (dateStr: string, time: string) => {
    const [h, m] = time.split(":").map(Number);
    const slotDate = new Date(dateStr);
    slotDate.setHours(h, m, 0, 0);
    return slotDate < new Date();
  };

  useEffect(() => {
    if (!slug) return;
    loadShop();
  }, [slug]);

  const loadShop = async () => {
    try {
      setLoading(true);
      const data = await shopService.getPublicShop(slug!);
      setShop(data);
      const firstActive = data.services?.find((s: ServiceDTO) => s.isActive);
      if (firstActive) {
        setSelectedService(firstActive);
        await loadSlots(data.id, firstActive.id);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  // CARICA MESE SPECIFICO SE NON GIÀ CARICATO
  const ensureMonthLoaded = async (
    shopId: string,
    serviceId: string,
    monthStr: string,
  ) => {
    if (loadedMonths.current.has(monthStr)) return;
    loadedMonths.current.add(monthStr);
    try {
      const monthSlots = await bookingService.getMonthSlots(
        shopId,
        serviceId,
        monthStr,
      );
      setSlots((prev) => ({ ...prev, ...monthSlots }));
    } catch {
      console.error("Errore caricamento mese", monthStr);
      loadedMonths.current.delete(monthStr);
    }
  };

  // CARICA SLOTS INIZIALI
  const loadSlots = async (shopId: string, serviceId: string) => {
    loadedMonths.current.clear();
    try {
      setLoadingSlots(true);
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

      loadedMonths.current.add(thisMonth);
      loadedMonths.current.add(nextMonth);
      setSlots({ ...thisMonthSlots, ...nextMonthSlots });
    } catch {
      console.error("Errore caricamento slot");
    } finally {
      setLoadingSlots(false);
    }
  };

  // CARICA MESI VISIBILI QUANDO CAMBIA SETTIMANA
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

  const handleSelectService = (e: React.MouseEvent, service: ServiceDTO) => {
    e.preventDefault();
    const scrollY = window.scrollY;
    setSelectedService(service);
    setSelectedDate(null);
    setSelectedTime(null);
    loadSlots(shop.id, service.id).then(() => {
      window.scrollTo(0, scrollY);
    });
  };

  const getWeekDays = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + weekOffset * 7 + i);
      const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      days.push({
        date,
        dateStr,
        dayName: DAYS_IT[date.getDay()],
        dayNum: date.getDate(),
        monthName: MONTHS_IT[date.getMonth()],
        isToday: i === 0 && weekOffset === 0,
        isPast: date < new Date(new Date().setHours(0, 0, 0, 0)),
        slots: (slots[dateStr] ?? []) as SlotWithStatus[],
      });
    }
    return days;
  };

  const handleSlotClick = (dateStr: string, time: string) => {
    setSelectedDate(dateStr);
    setSelectedTime(time);
    setModalStep("form");
    setLockError("");
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
      });
      setBookingId(result.bookingId);
      setModalStep("otp");
    } catch {
      setLockError("Slot non più disponibile. Scegline un altro.");
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
      if (selectedService) loadSlots(shop.id, selectedService.id);
    } catch {
      setOtpError("Codice OTP non valido");
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
        className="relative h-64 md:h-80 flex items-end"
        style={{
          background: shop.config?.coverImage
            ? `url(${shop.config.coverImage}) center/cover`
            : `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}cc 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative w-full px-4 pb-8 max-w-3xl mx-auto">
          <div className="flex items-end gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border-2 border-white/30"
              style={{ backgroundColor: primaryColor }}
            >
              <ScissorsIcon size={28} weight="duotone" className="text-white" />
            </div>
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
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* SERVIZI */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text.gray-500 uppercase tracking-wide mb-3">
            Servizi
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {shop.services
              ?.filter((s: ServiceDTO) => s.isActive)
              .map((service: ServiceDTO) => (
                <button
                  key={service.id}
                  onClick={(e) => handleSelectService(e, service)}
                  className={`
                    shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border
                    transition-all text-left
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
                </button>
              ))}
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
                onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                disabled={weekOffset === 0}
                className="p-1.5 rounded-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <CaretLeftIcon size={16} />
              </button>
              <button
                onClick={() => setWeekOffset(weekOffset + 1)}
                className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <CaretRightIcon size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
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
                      <div className="h-8 bg-gray-100 rounded animate-pulse" />
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
                            disabled={past || slot.status !== "free"}
                            onClick={() =>
                              !past &&
                              slot.status === "free" &&
                              handleSlotClick(dateStr, slot.time)
                            }
                            className={`
                            w-full py-1.5 rounded-lg text-xs font-medium transition-all
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
                Prenotato, in attesa di conferma OTP
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-gray-100" />
              <span className="text-xs text-gray-400">Occupato</span>
            </div>
          </div>
        </div>
      </div>

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
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                Riepilogo
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {selectedService?.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {selectedDate} alle {selectedTime}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nome *
                </label>
                <input
                  className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
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
                  className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
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
                className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
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
                className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="+39 333 1234567"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500">
              * Almeno email o telefono richiesti
            </p>

            {lockError && <p className="text-sm text-red-500">{lockError}</p>}

            <button
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
              Continua
            </button>
          </div>
        )}

        {modalStep === "otp" && (
          <div className="flex flex-col gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto">
              <span className="text-2xl">📧</span>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Abbiamo inviato un codice a
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {form.email || form.phone}
              </p>
            </div>

            <input
              className="w-full px-4 py-3 text-center text-2xl font-mono tracking-widest rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
              placeholder="000000"
              maxLength={6}
              value={form.otp}
              onChange={(e) =>
                setForm({ ...form, otp: e.target.value.replace(/\D/g, "") })
              }
            />

            {otpError && <p className="text-sm text-red-500">{otpError}</p>}

            <button
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
              <span className="text-3xl">✅</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Prenotazione confermata!
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {selectedService?.name}
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                {selectedDate} alle {selectedTime}
              </p>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Riceverai una email di conferma con tutti i dettagli
            </p>
            <button
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

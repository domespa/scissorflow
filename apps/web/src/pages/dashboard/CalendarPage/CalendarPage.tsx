import { useState, useCallback, useEffect } from "react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CalendarIcon,
  ClockIcon,
  ScissorsIcon,
  PlusIcon,
  XIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { bookingService } from "@/services/booking.service";
import { shopService } from "@/services/shop.service";
import { useShop } from "@/hooks/useShop";
import { socket, joinShop, leaveShop } from "@/lib/socket";
import { formatDateOnly } from "@/lib/utils";
import type { ServiceDTO } from "@scissorflow/shared";

const DAYS_IT = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
const MONTHS_IT = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

type TimelineSlot = {
  time: string;
  endTime: string;
  status: "free" | "pending" | "confirmed" | "noshow";
  booking?: {
    id: string;
    customerName: string;
    serviceName: string;
    duration: number;
    price: number | null;
  };
};

type MonthBooking = {
  id: string;
  startAt: string;
  status: string;
};

export const CalendarPage = () => {
  const { shopId } = useShop();
  const today = new Date();

  const [view, setView] = useState<"day" | "month">("day");
  const [selectedDate, setSelectedDate] = useState(today);
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  const [timeline, setTimeline] = useState<TimelineSlot[]>([]);
  const [monthBookings, setMonthBookings] = useState<MonthBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<ServiceDTO[]>([]);

  const [noShowLoadingId, setNoShowLoadingId] = useState<string | null>(null);
  const [noShowConfirmId, setNoShowConfirmId] = useState<string | null>(null);
  const [undoLoadingId, setUndoLoadingId] = useState<string | null>(null);

  const [bookingModal, setBookingModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimelineSlot | null>(null);
  const [bookingForm, setBookingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceId: "",
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const getDateStr = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  const isSlotPast = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    const slotDate = new Date(selectedDate);
    slotDate.setHours(h, m, 0, 0);
    return slotDate < new Date();
  };

  const loadTimeline = useCallback(
    async (date: Date) => {
      if (!shopId) return;
      try {
        setLoading(true);
        const data = await bookingService.getDayTimeline(getDateStr(date));
        setTimeline(data);
      } catch {
        console.error("Errore caricamento timeline");
      } finally {
        setLoading(false);
      }
    },
    [shopId],
  );

  const loadMonthBookings = useCallback(
    async (year: number, month: number) => {
      if (!shopId) return;
      try {
        setLoading(true);
        const data = await bookingService.getMonthBookings(year, month + 1);
        setMonthBookings(data);
      } catch {
        console.error("Errore caricamento mese");
      } finally {
        setLoading(false);
      }
    },
    [shopId],
  );

  const loadServices = useCallback(async () => {
    if (!shopId) return;
    try {
      const data = await shopService.getServices(shopId);
      setServices(data.filter((s: ServiceDTO) => s.isActive));
    } catch {
      console.error("Errore caricamento servizi");
    }
  }, [shopId]);

  useEffect(() => {
    if (!shopId) return;
    loadTimeline(selectedDate);
    loadServices();
    joinShop(shopId);
    socket.on("slot:confirmed", () => loadTimeline(selectedDate));
    socket.on("slot:cancelled", () => loadTimeline(selectedDate));
    socket.on("slot:locked", () => loadTimeline(selectedDate));
    return () => {
      leaveShop();
      socket.off("slot:confirmed");
      socket.off("slot:cancelled");
      socket.off("slot:locked");
    };
  }, [shopId]);

  useEffect(() => {
    if (view === "month") loadMonthBookings(calYear, calMonth);
  }, [view, calYear, calMonth]);

  const handleDayChange = (date: Date) => {
    setSelectedDate(date);
    loadTimeline(date);
  };

  const handleOpenBookingModal = (slot: TimelineSlot) => {
    setSelectedSlot(slot);
    setBookingForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceId: services[0]?.id ?? "",
    });
    setBookingError("");
    setBookingSuccess(false);
    setBookingModal(true);
  };

  const handleNoShow = async (bookingId: string) => {
    if (noShowConfirmId !== bookingId) {
      setNoShowConfirmId(bookingId);
      setTimeout(() => setNoShowConfirmId(null), 3000);
      return;
    }
    try {
      setNoShowLoadingId(bookingId);
      setNoShowConfirmId(null);
      await bookingService.markNoShow(bookingId);
      await loadTimeline(selectedDate);
    } catch {
      console.error("Errore no-show");
    } finally {
      setNoShowLoadingId(null);
    }
  };

  const handleUndoNoShow = async (bookingId: string) => {
    try {
      setUndoLoadingId(bookingId);
      await bookingService.undoNoShow(bookingId);
      await loadTimeline(selectedDate);
    } catch {
      console.error("Errore undo no-show");
    } finally {
      setUndoLoadingId(null);
    }
  };

  const handleManualBooking = async () => {
    if (!selectedSlot || !shopId) return;
    if (!bookingForm.firstName) {
      setBookingError("Il nome è obbligatorio");
      return;
    }
    if (!bookingForm.serviceId) {
      setBookingError("Seleziona un servizio");
      return;
    }

    setBookingLoading(true);
    setBookingError("");

    try {
      const dateStr = getDateStr(selectedDate);
      const startAt = new Date(
        `${dateStr}T${selectedSlot.time}:00`,
      ).toISOString();
      const result = await bookingService.lockSlot({
        shopId,
        serviceId: bookingForm.serviceId,
        startAt,
        customer: {
          firstName: bookingForm.firstName,
          lastName: bookingForm.lastName || "-",
          email: bookingForm.email || undefined,
          phone: bookingForm.phone || undefined,
        },
      });
      await bookingService.confirmBookingAdmin(result.bookingId);
      setBookingSuccess(true);
      await loadTimeline(selectedDate);
      setTimeout(() => {
        setBookingModal(false);
        setBookingSuccess(false);
      }, 1500);
    } catch (err: any) {
      if (err?.response?.status === 409) {
        setBookingError(
          "Il cliente ha già una prenotazione attiva per questo giorno",
        );
      } else {
        setBookingError("Errore durante la prenotazione. Riprova.");
      }
    } finally {
      setBookingLoading(false);
    }
  };

  const getCalendarCells = () => {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    calMonth === today.getMonth() &&
    calYear === today.getFullYear();

  const isSelected = (day: number) =>
    day === selectedDate.getDate() &&
    calMonth === selectedDate.getMonth() &&
    calYear === selectedDate.getFullYear();

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  };

  const confirmedCount = timeline.filter(
    (s) => s.status === "confirmed",
  ).length;
  const totalRevenue = timeline
    .filter((s) => s.status === "confirmed" && s.booking?.price != null)
    .reduce((sum, s) => sum + (s.booking?.price ?? 0), 0);

  const getSlotBg = (status: TimelineSlot["status"]) => {
    if (status === "confirmed")
      return "bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900";
    if (status === "pending")
      return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-900";
    if (status === "noshow")
      return "bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-900";
    return "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-700";
  };

  const getBarColor = (status: TimelineSlot["status"]) => {
    if (status === "confirmed") return "bg-green-400";
    if (status === "pending") return "bg-yellow-400";
    if (status === "noshow") return "bg-orange-400";
    return "bg-gray-300 dark:bg-gray-600";
  };

  const getTimeColor = (status: TimelineSlot["status"]) => {
    if (status === "confirmed") return "text-green-700 dark:text-green-400";
    if (status === "pending") return "text-yellow-700 dark:text-yellow-400";
    if (status === "noshow") return "text-orange-700 dark:text-orange-400";
    return "text-gray-400 dark:text-gray-600";
  };

  const getNameColor = (status: TimelineSlot["status"]) => {
    if (status === "confirmed") return "text-gray-900 dark:text-white";
    if (status === "noshow")
      return "text-orange-700 dark:text-orange-400 line-through";
    return "text-gray-700 dark:text-gray-300";
  };

  const getServiceColor = (status: TimelineSlot["status"]) => {
    if (status === "confirmed") return "text-green-600 dark:text-green-500";
    if (status === "noshow") return "text-orange-500 dark:text-orange-400";
    return "text-yellow-600 dark:text-yellow-500";
  };

  return (
    <div className="flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Calendario
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
            {formatDateOnly(selectedDate)}
          </p>
        </div>
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setView("day")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              view === "day"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Giorno
          </button>
          <button
            onClick={() => {
              setView("month");
              loadMonthBookings(calYear, calMonth);
            }}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              view === "month"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Mese
          </button>
        </div>
      </div>

      {/* VISTA GIORNO */}
      {view === "day" && (
        <div className="flex flex-col gap-4">
          {/* NAVIGAZIONE SETTIMANA */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const prev = new Date(selectedDate);
                prev.setDate(prev.getDate() - 1);
                handleDayChange(prev);
              }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <CaretLeftIcon
                size={16}
                className="text-gray-900 dark:text-white"
              />
            </button>
            <div className="flex gap-1 flex-1">
              {Array.from({ length: 7 }, (_, i) => {
                const date = new Date(selectedDate);
                date.setDate(
                  selectedDate.getDate() - selectedDate.getDay() + i,
                );
                const isSel =
                  date.toDateString() === selectedDate.toDateString();
                const isTod = date.toDateString() === today.toDateString();
                return (
                  <button
                    key={i}
                    onClick={() => handleDayChange(new Date(date))}
                    className={`flex flex-col items-center py-2 px-2 rounded-xl flex-1 transition-all ${
                      isSel
                        ? "bg-gray-900 dark:bg-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span
                      className={`text-xs font-medium ${isSel ? "text-white/70 dark:text-gray-600" : "text-gray-600 dark:text-gray-300"}`}
                    >
                      {DAYS_IT[date.getDay()]}
                    </span>
                    <span
                      className={`text-sm font-semibold mt-0.5 ${
                        isSel
                          ? "text-white dark:text-gray-900"
                          : isTod
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {date.getDate()}
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => {
                const next = new Date(selectedDate);
                next.setDate(next.getDate() + 1);
                handleDayChange(next);
              }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <CaretRightIcon
                size={16}
                className="text-gray-900 dark:text-white"
              />
            </button>
          </div>

          {/* RIEPILOGO */}
          {confirmedCount > 0 && (
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {confirmedCount} prenotazioni confermate
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                €{totalRevenue.toFixed(2)}
              </p>
            </div>
          )}

          {/* TIMELINE */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
            </div>
          ) : timeline.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <CalendarIcon
                size={40}
                weight="duotone"
                className="text-gray-300 dark:text-gray-700 mb-3"
              />
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Nessuno slot disponibile per questo giorno
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                Configura gli orari nelle impostazioni
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              {timeline.map((slot) => {
                const past = isSlotPast(slot.time);
                const isConfirming = noShowConfirmId === slot.booking?.id;
                const isNoShowLoading = noShowLoadingId === slot.booking?.id;
                const isUndoLoading = undoLoadingId === slot.booking?.id;

                return (
                  <div
                    key={`${slot.time}-${slot.status}`}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl border transition-all
                      ${past && slot.status === "free" ? "opacity-40 pointer-events-none" : ""}
                      ${getSlotBg(slot.status)}
                    `}
                  >
                    {/* ORARIO */}
                    <div className="w-20 shrink-0">
                      <p
                        className={`text-sm font-semibold ${getTimeColor(slot.status)}`}
                      >
                        {slot.time}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-600">
                        {slot.endTime}
                      </p>
                    </div>

                    {/* BARRA */}
                    <div
                      className={`w-0.5 h-10 rounded-full shrink-0 ${getBarColor(slot.status)}`}
                    />

                    {/* CONTENUTO */}
                    {slot.status === "free" ? (
                      <div className="flex items-center justify-between flex-1">
                        <span className="text-sm text-gray-400 dark:text-gray-600">
                          Disponibile
                        </span>
                        <button
                          onClick={() => handleOpenBookingModal(slot)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <PlusIcon size={12} weight="bold" />
                          Prenota
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between flex-1 min-w-0">
                        <div className="min-w-0">
                          <p
                            className={`text-sm font-semibold truncate ${getNameColor(slot.status)}`}
                          >
                            {slot.booking?.customerName}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span
                              className={`text-xs flex items-center gap-1 ${getServiceColor(slot.status)}`}
                            >
                              <ScissorsIcon size={10} weight="duotone" />
                              {slot.booking?.serviceName}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <ClockIcon size={10} weight="duotone" />
                              {slot.booking
                                ? formatDuration(slot.booking.duration)
                                : ""}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {slot.booking?.price != null && (
                            <p
                              className={`text-sm font-semibold ${slot.status === "noshow" ? "text-orange-500 line-through" : "text-gray-900 dark:text-white"}`}
                            >
                              €{slot.booking.price.toFixed(2)}
                            </p>
                          )}

                          {slot.status === "pending" && (
                            <span className="text-xs bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded-full">
                              OTP atteso
                            </span>
                          )}

                          {/* NO-SHOW BUTTON */}
                          {slot.status === "confirmed" && slot.booking && (
                            <button
                              onClick={() => handleNoShow(slot.booking!.id)}
                              disabled={isNoShowLoading}
                              className={`text-xs px-2 py-0.5 rounded-full font-medium transition-all disabled:opacity-50 ${
                                isConfirming
                                  ? "bg-red-500 text-white animate-pulse"
                                  : "bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50"
                              }`}
                            >
                              {isNoShowLoading
                                ? "..."
                                : isConfirming
                                  ? "Conferma?"
                                  : "No-show"}
                            </button>
                          )}

                          {/* UNDO NO-SHOW */}
                          {slot.status === "noshow" && slot.booking && (
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 font-medium">
                                No-show
                              </span>
                              <button
                                onClick={() =>
                                  handleUndoNoShow(slot.booking!.id)
                                }
                                disabled={isUndoLoading}
                                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                              >
                                {isUndoLoading ? "..." : "Annulla"}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* VISTA MESE */}
      {view === "month" && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-md">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                const d = new Date(calYear, calMonth - 1);
                setCalMonth(d.getMonth());
                setCalYear(d.getFullYear());
              }}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <CaretLeftIcon
                size={16}
                className="text-gray-900 dark:text-white"
              />
            </button>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {MONTHS_IT[calMonth]} {calYear}
            </span>
            <button
              onClick={() => {
                const d = new Date(calYear, calMonth + 1);
                setCalMonth(d.getMonth());
                setCalYear(d.getFullYear());
              }}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <CaretRightIcon
                size={16}
                className="text-gray-900 dark:text-white"
              />
            </button>
          </div>

          <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
            {DAYS_IT.map((d) => (
              <div
                key={d}
                className="text-center py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-[2px] bg-gray-300 dark:bg-gray-600">
            {getCalendarCells().map((day, i) => {
              if (!day)
                return (
                  <div
                    key={`empty-${i}`}
                    className="bg-white dark:bg-gray-900 h-20"
                  />
                );
              const count = monthBookings.filter(
                (b) =>
                  new Date(b.startAt).getDate() === day &&
                  new Date(b.startAt).getMonth() === calMonth &&
                  new Date(b.startAt).getFullYear() === calYear,
              ).length;
              return (
                <button
                  key={day}
                  onClick={() => {
                    const date = new Date(calYear, calMonth, day);
                    setSelectedDate(date);
                    setView("day");
                    loadTimeline(date);
                  }}
                  className={`bg-white dark:bg-gray-900 h-20 p-2 flex flex-col hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left ${
                    isSelected(day)
                      ? "ring-2 ring-inset ring-gray-900 dark:ring-white"
                      : ""
                  }`}
                >
                  <span
                    className={`text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center ${
                      isToday(day)
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {day}
                  </span>
                  {count > 0 && (
                    <div className="mt-1 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">
                        {count} prev.
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MODAL PRENOTAZIONE MANUALE */}
      {bookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setBookingModal(false)}
          />
          <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                  Nuova prenotazione
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                  {formatDateOnly(selectedDate)} alle {selectedSlot?.time}
                </p>
              </div>
              <button
                onClick={() => setBookingModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div className="px-6 py-4 flex flex-col gap-4">
              {bookingSuccess ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">
                    <CheckCircleIcon
                      size={16}
                      weight="duotone"
                      className="inline mr-1.5 text-green-600 dark:text-green-400"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Prenotazione confermata!
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Servizio *
                    </label>
                    <select
                      value={bookingForm.serviceId}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          serviceId: e.target.value,
                        })
                      }
                      className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} - {s.duration}min
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nome *
                    </label>
                    <input
                      className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                      placeholder="es. Mario"
                      value={bookingForm.firstName}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Cognome{" "}
                      <span className="text-gray-400 font-normal">
                        (opzionale)
                      </span>
                    </label>
                    <input
                      className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                      placeholder="es. Rossi"
                      value={bookingForm.lastName}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email{" "}
                      <span className="text-gray-400 font-normal">
                        (opzionale)
                      </span>
                    </label>
                    <input
                      type="email"
                      className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                      placeholder="mario@example.com"
                      value={bookingForm.email}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Telefono{" "}
                      <span className="text-gray-400 font-normal">
                        (opzionale)
                      </span>
                    </label>
                    <input
                      type="tel"
                      className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                      placeholder="+39 333 1234567"
                      value={bookingForm.phone}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  {bookingError && (
                    <p className="text-sm text-red-500">{bookingError}</p>
                  )}

                  <div className="flex gap-3 pt-1">
                    <button
                      onClick={() => setBookingModal(false)}
                      className="flex-1 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Annulla
                    </button>
                    <button
                      onClick={handleManualBooking}
                      disabled={bookingLoading}
                      className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                    >
                      {bookingLoading && (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white dark:border-gray-900/30 dark:border-t-gray-900 rounded-full animate-spin" />
                      )}
                      Conferma
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { useState, useCallback, useEffect } from "react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CalendarIcon,
  ScissorsIcon,
  PlusIcon,
  XIcon,
  CheckCircleIcon,
  CheckIcon,
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

const isSlotPastFn = (date: Date, time: string) => {
  const [h, m] = time.split(":").map(Number);
  const slotDate = new Date(date);
  slotDate.setHours(h, m, 0, 0);
  return slotDate < new Date();
};

const SlotCard = ({
  slot,
  date,
  noShowConfirmId,
  noShowLoadingId,
  undoLoadingId,
  onBook,
  onNoShow,
  onUndoNoShow,
}: {
  slot: TimelineSlot;
  date: Date;
  noShowConfirmId: string | null;
  noShowLoadingId: string | null;
  undoLoadingId: string | null;
  onBook: (slot: TimelineSlot) => void;
  onNoShow: (id: string) => void;
  onUndoNoShow: (id: string) => void;
}) => {
  const past = isSlotPastFn(date, slot.time);
  const isConfirming = noShowConfirmId === slot.booking?.id;
  const isNoShowLoading = noShowLoadingId === slot.booking?.id;
  const isUndoLoading = undoLoadingId === slot.booking?.id;

  // STATI VISIVI
  const getCardStyle = () => {
    if (slot.status === "noshow")
      return "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800";
    if (slot.status === "pending")
      return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800";
    if (slot.status === "confirmed") {
      if (past)
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
      return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
    }
    // FREE
    if (past)
      return "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600";
    return "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600";
  };

  const getBarColor = () => {
    if (slot.status === "noshow") return "bg-orange-400";
    if (slot.status === "pending") return "bg-yellow-400";
    if (slot.status === "confirmed") return "bg-green-500";
    if (past) return "bg-gray-400 dark:bg-gray-500";
    return "bg-gray-300 dark:bg-gray-600";
  };

  const getTimeColor = () => {
    if (slot.status === "noshow") return "text-orange-600 dark:text-orange-400";
    if (slot.status === "pending")
      return "text-yellow-600 dark:text-yellow-400";
    if (slot.status === "confirmed")
      return "text-green-700 dark:text-green-400";
    if (past) return "text-gray-500 dark:text-gray-400";
    return "text-gray-500 dark:text-gray-400";
  };

  return (
    <div
      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all ${getCardStyle()} ${past && slot.status === "free" ? "opacity-60" : ""}`}
    >
      {/* BARRA */}
      <div className={`w-1 h-10 rounded-full shrink-0 ${getBarColor()}`} />

      {/* ORARIO */}
      <div className="w-16 shrink-0">
        <p className={`text-base font-bold ${getTimeColor()}`}>{slot.time}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {slot.endTime}
        </p>
      </div>

      {/* CONTENUTO */}
      {slot.status === "free" ? (
        <div className="flex items-center justify-between flex-1">
          <span
            className={`text-sm ${past ? "text-gray-400 dark:text-gray-500" : "text-gray-700 dark:text-gray-200"}`}
          >
            {past ? "Non disponibile" : "Disponibile"}
          </span>
          {!past && (
            <button
              onClick={() => onBook(slot)}
              className="flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <PlusIcon size={11} weight="bold" />
              Prenota
            </button>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between flex-1 min-w-0 gap-2">
          <div className="min-w-0 flex-1">
            <p
              className={`text-xs font-semibold truncate ${
                slot.status === "noshow"
                  ? "text-orange-600 dark:text-orange-400 line-through"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {slot.booking?.customerName}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={`text-xs flex items-center gap-0.5 truncate ${
                  slot.status === "confirmed"
                    ? "text-green-600 dark:text-green-500"
                    : slot.status === "noshow"
                      ? "text-orange-500"
                      : "text-yellow-600"
                }`}
              >
                <ScissorsIcon size={9} weight="duotone" />
                {slot.booking?.serviceName}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {slot.booking?.price != null && (
              <p
                className={`text-xs font-semibold ${slot.status === "noshow" ? "text-orange-400 line-through" : "text-gray-900 dark:text-white"}`}
              >
                €{slot.booking.price.toFixed(0)}
              </p>
            )}

            {/* BADGE STATO */}
            {slot.status === "pending" && (
              <span className="text-xs bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded-full font-medium">
                OTP
              </span>
            )}
            {slot.status === "confirmed" && past && (
              <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-0.5">
                <CheckIcon size={9} weight="bold" />
                OK
              </span>
            )}

            {/* NO-SHOW */}
            {slot.status === "confirmed" && slot.booking && (
              <button
                onClick={() => onNoShow(slot.booking!.id)}
                disabled={isNoShowLoading}
                className={`text-xs px-1.5 py-0.5 rounded-full font-medium transition-all disabled:opacity-50 ${
                  isConfirming
                    ? "bg-red-500 text-white animate-pulse"
                    : "bg-red-50 dark:bg-red-900/30 text-red-500 hover:bg-red-100"
                }`}
              >
                {isNoShowLoading ? "..." : isConfirming ? "Sicuro?" : "NS"}
              </button>
            )}

            {/* UNDO NO-SHOW */}
            {slot.status === "noshow" && slot.booking && (
              <button
                onClick={() => onUndoNoShow(slot.booking!.id)}
                disabled={isUndoLoading}
                className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {isUndoLoading ? "..." : "Annulla"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
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
  const [dayBreak, setDayBreak] = useState<{
    start: string;
    end: string;
  } | null>(null);

  const getDateStr = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  const loadTimeline = useCallback(
    async (date: Date) => {
      if (!shopId) return;
      try {
        setLoading(true);
        const data = await bookingService.getDayTimeline(getDateStr(date));
        setTimeline(data);
        const dow = date.getDay();
        const availData = await shopService.getAvailability(shopId!);
        const dayAvail = availData.find(
          (a: {
            dayOfWeek: number;
            breakStart?: string | null;
            breakEnd?: string | null;
          }) => a.dayOfWeek === dow,
        );
        if (dayAvail?.breakStart && dayAvail?.breakEnd) {
          setDayBreak({ start: dayAvail.breakStart, end: dayAvail.breakEnd });
        } else {
          setDayBreak(null);
        }
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
    } catch (error) {
      if (isAxiosError(error) && error.response.status === 409) {
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

  // SPLIT TIMELINE IN DUE COLONNE
  const splitTimeline = () => {
    if (timeline.length === 0) return { left: [], right: [] };

    // SE PAUSA PRANZO CONFIGURATA DIVID COLONNE IN BASE ALLA PUASA
    if (dayBreak) {
      const [bh, bm] = dayBreak.start.split(":").map(Number);
      const breakStartMin = bh * 60 + bm;

      const splitIdx = timeline.findIndex((s) => {
        const [h, m] = s.time.split(":").map(Number);
        return h * 60 + m >= breakStartMin;
      });

      if (splitIdx > 0) {
        return {
          left: timeline.slice(0, splitIdx),
          right: timeline.slice(splitIdx),
        };
      }
    }

    // FALLBACK A METà
    const mid = Math.ceil(timeline.length / 2);
    return { left: timeline.slice(0, mid), right: timeline.slice(mid) };
  };

  const { left: leftSlots, right: rightSlots } = splitTimeline();

  // RIEPILOGO
  const confirmed = timeline.filter((s) => s.status === "confirmed");
  const completedSlots = confirmed.filter((s) =>
    isSlotPastFn(selectedDate, s.time),
  );
  const upcomingSlots = confirmed.filter(
    (s) => !isSlotPastFn(selectedDate, s.time),
  );
  const noShowSlots = timeline.filter((s) => s.status === "noshow");
  const completedRevenue = completedSlots.reduce(
    (sum, s) => sum + (s.booking?.price ?? 0),
    0,
  );
  const upcomingRevenue = upcomingSlots.reduce(
    (sum, s) => sum + (s.booking?.price ?? 0),
    0,
  );

  return (
    <div className="flex flex-col gap-4">
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
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === "day" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-600 dark:text-gray-300"}`}
          >
            Giorno
          </button>
          <button
            onClick={() => {
              setView("month");
              loadMonthBookings(calYear, calMonth);
            }}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === "month" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-600 dark:text-gray-300"}`}
          >
            Mese
          </button>
        </div>
      </div>

      {/* VISTA GIORNO */}
      {view === "day" && (
        <div className="flex flex-col gap-4">
          {/* NAVIGAZIONE GIORNI */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const p = new Date(selectedDate);
                p.setDate(p.getDate() - 1);
                handleDayChange(p);
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
                    className={`flex flex-col items-center py-2 px-2 rounded-xl flex-1 transition-all ${isSel ? "bg-gray-900 dark:bg-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                  >
                    <span
                      className={`text-sm font-medium ${isSel ? "text-white/70 dark:text-gray-600" : "text-gray-600 dark:text-gray-300"}`}
                    >
                      {DAYS_IT[date.getDay()]}
                    </span>
                    <span
                      className={`text-sm font-semibold mt-0.5 ${isSel ? "text-white dark:text-gray-900" : isTod ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}
                    >
                      {date.getDate()}
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => {
                const n = new Date(selectedDate);
                n.setDate(n.getDate() + 1);
                handleDayChange(n);
              }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <CaretRightIcon
                size={16}
                className="text-gray-900 dark:text-white"
              />
            </button>
          </div>

          {/* TIMELINE DUE COLONNE */}
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
                Nessuno slot disponibile
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Configura gli orari nelle impostazioni
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* COLONNA SINISTRA */}
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  {leftSlots[0]?.time ?? ""} -{" "}
                  {leftSlots[leftSlots.length - 1]?.endTime ?? ""}
                </p>
                {leftSlots.map((slot) => (
                  <SlotCard
                    key={`left-${slot.time}-${slot.status}`}
                    slot={slot}
                    date={selectedDate}
                    noShowConfirmId={noShowConfirmId}
                    noShowLoadingId={noShowLoadingId}
                    undoLoadingId={undoLoadingId}
                    onBook={handleOpenBookingModal}
                    onNoShow={handleNoShow}
                    onUndoNoShow={handleUndoNoShow}
                  />
                ))}
              </div>

              {/* COLONNA DESTRA */}
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  {rightSlots[0]?.time ?? ""} -{" "}
                  {rightSlots[rightSlots.length - 1]?.endTime ?? ""}
                </p>
                {rightSlots.map((slot) => (
                  <SlotCard
                    key={`right-${slot.time}-${slot.status}`}
                    slot={slot}
                    date={selectedDate}
                    noShowConfirmId={noShowConfirmId}
                    noShowLoadingId={noShowLoadingId}
                    undoLoadingId={undoLoadingId}
                    onBook={handleOpenBookingModal}
                    onNoShow={handleNoShow}
                    onUndoNoShow={handleUndoNoShow}
                  />
                ))}
              </div>
            </div>
          )}

          {/* RIEPILOGO GIORNATA */}
          {
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
              <div className="flex flex-col gap-1 px-4 py-3 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-500 dark:border-green-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Completate
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {completedSlots.length}
                </p>
                <p className="text-xs text-green-600 dark:text-green-500">
                  €{completedRevenue.toFixed(0)}
                </p>
              </div>
              <div className="flex flex-col gap-1 px-4 py-3 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-500 dark:border-blue-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Da fare
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {upcomingSlots.length}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-500">
                  €{upcomingRevenue.toFixed(0)}
                </p>
              </div>
              <div className="flex flex-col gap-1 px-4 py-3 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-400 dark:border-gray-500">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Totale giorno
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {confirmed.length}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  €{(completedRevenue + upcomingRevenue).toFixed(0)}
                </p>
              </div>
              <div className="flex flex-col gap-1 px-4 py-3 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-500 dark:border-orange-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  No-show
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {noShowSlots.length}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  clienti assenti
                </p>
              </div>
            </div>
          }
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
          <div className="grid grid-cols-7 gap-0.5 bg-gray-300 dark:bg-gray-600">
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
                  className={`bg-white dark:bg-gray-900 h-20 p-2 flex flex-col hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left ${isSelected(day) ? "ring-2 ring-inset ring-gray-900 dark:ring-white" : ""}`}
                >
                  <span
                    className={`text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center ${isToday(day) ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" : "text-gray-900 dark:text-white"}`}
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
                  <CheckCircleIcon
                    size={40}
                    weight="duotone"
                    className="text-green-500 mx-auto mb-3"
                  />
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
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nome *
                      </label>
                      <input
                        className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                        placeholder="Mario"
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
                        Cognome
                      </label>
                      <input
                        className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                        placeholder="Rossi"
                        value={bookingForm.lastName}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
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
                        Telefono
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

// TYPE GUARD AXIOS
const isAxiosError = (
  error: unknown,
): error is { response: { status: number; data: { message: string } } } => {
  return typeof error === "object" && error !== null && "response" in error;
};

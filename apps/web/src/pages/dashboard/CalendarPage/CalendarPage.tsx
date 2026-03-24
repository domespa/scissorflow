import { useState, useEffect, useCallback } from "react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ScissorsIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { bookingService } from "@/services/booking.service";
import { useShop } from "@/hooks/useShop";
import { socket, joinShop, leaveShop } from "@/lib/socket";
import { formatDateIT, formatDateOnly } from "@/lib/utils";

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
  status: "free" | "pending" | "confirmed";
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

  const getDateStr = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

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

  useEffect(() => {
    if (!shopId) return;
    loadTimeline(selectedDate);
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

  const daysWithBookings = new Set(
    monthBookings.map((b) => new Date(b.startAt).getDate()),
  );

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

  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Calendario
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {formatDateOnly(selectedDate)}
          </p>
        </div>
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setView("day")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              view === "day"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400"
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
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            Mese
          </button>
        </div>
      </div>

      {/* =========================================
                      VISTA GIORNO
          ========================================= */}
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
              <CaretLeftIcon size={16} />
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
                    className={`
                      flex flex-col items-center py-2 px-2 rounded-xl flex-1 transition-all
                      ${
                        isSel
                          ? "bg-gray-900 dark:bg-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }
                    `}
                  >
                    <span
                      className={`text-xs font-medium ${isSel ? "text-white/70 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"}`}
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
              <CaretRightIcon size={16} />
            </button>
          </div>

          {/* RIEPILOGO GIORNO */}
          {confirmedCount > 0 && (
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-sm text-gray-500 dark:text-gray-400">
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
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Nessuno slot disponibile per questo giorno
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                Configura gli orari nelle impostazioni
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              {timeline.map((slot) => (
                <div
                  key={`${slot.time}-${slot.status}`}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl border transition-all
                    ${
                      slot.status === "confirmed"
                        ? "bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900"
                        : slot.status === "pending"
                          ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-900"
                          : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
                    }
                  `}
                >
                  {/* ORARIO */}
                  <div className="w-20 shrink-0">
                    <p
                      className={`text-sm font-semibold ${
                        slot.status === "confirmed"
                          ? "text-green-700 dark:text-green-400"
                          : slot.status === "pending"
                            ? "text-yellow-700 dark:text-yellow-400"
                            : "text-gray-400 dark:text-gray-600"
                      }`}
                    >
                      {slot.time}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-600">
                      {slot.endTime}
                    </p>
                  </div>

                  {/* BARRA COLORATA */}
                  <div
                    className={`w-0.5 h-10 rounded-full shrink-0 ${
                      slot.status === "confirmed"
                        ? "bg-green-400"
                        : slot.status === "pending"
                          ? "bg-yellow-400"
                          : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />

                  {/* CONTENUTO */}
                  {slot.status === "free" ? (
                    <div className="flex items-center justify-between flex-1">
                      <span className="text-sm text-gray-400 dark:text-gray-600">
                        Disponibile
                      </span>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <PlusIcon size={12} weight="bold" />
                        Prenota
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between flex-1 min-w-0">
                      <div className="min-w-0">
                        <p
                          className={`text-sm font-semibold truncate ${
                            slot.status === "confirmed"
                              ? "text-gray-900 dark:text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {slot.booking?.customerName}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span
                            className={`text-xs flex items-center gap-1 ${
                              slot.status === "confirmed"
                                ? "text-green-600 dark:text-green-500"
                                : "text-yellow-600 dark:text-yellow-500"
                            }`}
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

                      <div className="flex items-center gap-3 shrink-0">
                        {slot.booking?.price != null && (
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            €{slot.booking.price.toFixed(2)}
                          </p>
                        )}
                        {slot.status === "pending" && (
                          <span className="text-xs bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded-full">
                            OTP atteso
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =========================================
                      VISTA MESE
          ========================================= */}
      {view === "month" && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
            <button
              onClick={() => {
                const d = new Date(calYear, calMonth - 1);
                setCalMonth(d.getMonth());
                setCalYear(d.getFullYear());
              }}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <CaretLeftIcon size={16} />
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
              <CaretRightIcon size={16} />
            </button>
          </div>

          <div className="grid grid-cols-7 border-b border-gray-100 dark:border-gray-800">
            {DAYS_IT.map((d) => (
              <div
                key={d}
                className="text-center py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px bg-gray-100 dark:bg-gray-800">
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
                  className={`
                    bg-white dark:bg-gray-900 h-20 p-2 flex flex-col
                    hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left
                    ${isSelected(day) ? "ring-2 ring-inset ring-gray-900 dark:ring-white" : ""}
                  `}
                >
                  <span
                    className={`
                    text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center
                    ${
                      isToday(day)
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                        : "text-gray-900 dark:text-white"
                    }
                  `}
                  >
                    {day}
                  </span>

                  {count > 0 && (
                    <div className="mt-1">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {count} prev.
                        </span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

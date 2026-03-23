import { useState, useEffect } from "react";
import {
  ClockIcon,
  PaletteIcon,
  CheckIcon,
  PlusIcon,
  TrashIcon,
  CalendarXIcon,
  FloppyDiskIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ArrowCounterClockwiseIcon,
} from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { shopService } from "@/services/shop.service";
import { useShop } from "@/hooks/useShop";
import { SlotMode } from "@scissorflow/shared";
import type { ShopConfigDTO, BlockedSlotDTO } from "@scissorflow/shared";

const DAYS_SHORT = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
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
const PRESET_COLORS = [
  "#1a1a1a",
  "#2D6A4F",
  "#1B4332",
  "#0077B6",
  "#023E8A",
  "#7B2D8B",
  "#C9184A",
  "#E85D04",
];

type DayAvailability = {
  id?: string;
  startTime: string;
  endTime: string;
  breakStart?: string | null;
  breakEnd?: string | null;
  isActive: boolean;
};

type DateException = {
  id: string;
  date: string;
  isOpen: boolean;
  startTime?: string | null;
  endTime?: string | null;
  breakStart?: string | null;
  breakEnd?: string | null;
  reason?: string | null;
};

const defaultAvailability = (): DayAvailability => ({
  startTime: "09:00",
  endTime: "18:00",
  breakStart: null,
  breakEnd: null,
  isActive: false,
});

const Toggle = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`relative w-11 h-6 rounded-full transition-colors ${value ? "bg-gray-900 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 transition-transform ${value ? "translate-x-5" : "translate-x-0"}`}
    />
  </button>
);

const TimeRangeForm = ({
  form,
  onChange,
}: {
  form: DayAvailability;
  onChange: (f: DayAvailability) => void;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        {form.isActive ? "Aperto" : "Chiuso"}
      </p>
      <Toggle
        value={form.isActive}
        onChange={() => onChange({ ...form, isActive: !form.isActive })}
      />
    </div>

    {form.isActive && (
      <>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Apertura
            </label>
            <input
              type="time"
              value={form.startTime}
              onChange={(e) => onChange({ ...form, startTime: e.target.value })}
              className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Chiusura
            </label>
            <input
              type="time"
              value={form.endTime}
              onChange={(e) => onChange({ ...form, endTime: e.target.value })}
              className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
            />
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Pausa pranzo
            </p>
            <Toggle
              value={!!form.breakStart}
              onChange={() =>
                onChange({
                  ...form,
                  breakStart: form.breakStart ? null : "13:00",
                  breakEnd: form.breakEnd ? null : "15:00",
                })
              }
            />
          </div>

          {form.breakStart && (
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Inizio pausa
                </label>
                <input
                  type="time"
                  value={form.breakStart ?? ""}
                  onChange={(e) =>
                    onChange({ ...form, breakStart: e.target.value })
                  }
                  className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Fine pausa
                </label>
                <input
                  type="time"
                  value={form.breakEnd ?? ""}
                  onChange={(e) =>
                    onChange({ ...form, breakEnd: e.target.value })
                  }
                  className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                />
              </div>
            </div>
          )}
        </div>
      </>
    )}
  </div>
);

export const SettingsPage = () => {
  const { shopId } = useShop();
  const [loading, setLoading] = useState(true);
  const [savingConfig, setSavingConfig] = useState(false);
  const [savingDay, setSavingDay] = useState(false);
  const [error, setError] = useState("");
  const [successConfig, setSuccessConfig] = useState(false);

  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  // ORARI DEFAULT
  const [defaultStart, setDefaultStart] = useState("09:00");
  const [defaultEnd, setDefaultEnd] = useState("18:00");
  const [defaultBreakStart, setDefaultBreakStart] = useState("");
  const [defaultBreakEnd, setDefaultBreakEnd] = useState("");

  const [availability, setAvailability] = useState<
    Record<number, DayAvailability>
  >(
    Object.fromEntries(
      [0, 1, 2, 3, 4, 5, 6].map((day) => [day, defaultAvailability()]),
    ),
  );
  const [dateExceptions, setDateExceptions] = useState<DateException[]>([]);
  const [blockedSlots, setBlockedSlots] = useState<BlockedSlotDTO[]>([]);

  const [editingDate, setEditingDate] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<DayAvailability>(
    defaultAvailability(),
  );

  const [editingWeekDay, setEditingWeekDay] = useState<number | null>(null);
  const [editWeekForm, setEditWeekForm] = useState<DayAvailability>(
    defaultAvailability(),
  );

  const [ferieModalOpen, setFerieModalOpen] = useState(false);
  const [ferieForm, setFerieForm] = useState({
    startAt: "",
    endAt: "",
    reason: "",
  });
  const [savingFerie, setSavingFerie] = useState(false);

  const [config, setConfig] = useState<Partial<ShopConfigDTO>>({
    primaryColor: "#1a1a1a",
    tagline: "",
    showPrices: true,
    slotMode: SlotMode.FIXED,
    slotInterval: 30,
  });

  useEffect(() => {
    if (!shopId) return;
    loadData(false);
  }, [shopId]);

  const loadData = async (silent = false) => {
    const scrollY = window.scrollY;
    if (!silent) setLoading(true);
    try {
      const [availData, configData, blockedData, exceptionsData] =
        await Promise.all([
          shopService.getAvailability(shopId!),
          shopService.getConfig(shopId!),
          shopService.getBlockedSlots(shopId!),
          shopService.getDateExceptions(shopId!),
        ]);
      const mapped: Record<number, DayAvailability> = Object.fromEntries(
        [0, 1, 2, 3, 4, 5, 6].map((day) => [day, defaultAvailability()]),
      );
      availData.forEach((a) => {
        mapped[a.dayOfWeek] = {
          id: a.id,
          startTime: a.startTime,
          endTime: a.endTime,
          breakStart: a.breakStart,
          breakEnd: a.breakEnd,
          isActive: a.isActive,
        };
      });
      setAvailability(mapped);
      setConfig(configData);
      setBlockedSlots(blockedData);
      setDateExceptions(exceptionsData);
    } catch {
      setError("Errore durante il caricamento");
    } finally {
      setLoading(false);
      if (silent) requestAnimationFrame(() => window.scrollTo(0, scrollY));
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

  const getDateStr = (day: number) =>
    `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const getBlockedSlot = (day: number) => {
    const date = new Date(calYear, calMonth, day);
    return blockedSlots.find((slot) => {
      const start = new Date(slot.startAt);
      const end = new Date(slot.endAt);
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      return date >= start && date <= end;
    });
  };

  const getDateException = (day: number): DateException | undefined => {
    const dateStr = getDateStr(day);
    return dateExceptions.find((e) => {
      const eDate = new Date(e.date);
      const eStr = `${eDate.getUTCFullYear()}-${String(eDate.getUTCMonth() + 1).padStart(2, "0")}-${String(eDate.getUTCDate()).padStart(2, "0")}`;
      return eStr === dateStr;
    });
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    calMonth === today.getMonth() &&
    calYear === today.getFullYear();

  const isPast = (day: number) =>
    new Date(calYear, calMonth, day) <
    new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // APPLICA ORARI DEFAULT A TUTTI I GIORNI APERTI
  const handleApplyDefault = async () => {
    try {
      await Promise.all(
        [0, 1, 2, 3, 4, 5, 6]
          .filter((day) => availability[day].isActive)
          .map((day) =>
            shopService.setAvailability(shopId!, {
              dayOfWeek: day,
              startTime: defaultStart,
              endTime: defaultEnd,
              breakStart: defaultBreakStart || null,
              breakEnd: defaultBreakEnd || null,
              isActive: true,
            }),
          ),
      );
      await loadData(true);
    } catch {
      setError("Errore applicazione orari default");
    }
  };

  const handleCellClick = (day: number) => {
    if (isPast(day) || getBlockedSlot(day)) return;
    const dayOfWeek = new Date(calYear, calMonth, day).getDay();
    const exception = getDateException(day);
    setEditForm({
      startTime:
        exception?.startTime ?? availability[dayOfWeek].startTime ?? "09:00",
      endTime: exception?.endTime ?? availability[dayOfWeek].endTime ?? "18:00",
      breakStart:
        exception?.breakStart ?? availability[dayOfWeek].breakStart ?? null,
      breakEnd: exception?.breakEnd ?? availability[dayOfWeek].breakEnd ?? null,
      isActive: exception ? exception.isOpen : availability[dayOfWeek].isActive,
    });
    setEditingDate(getDateStr(day));
  };

  const handleQuickToggle = async (day: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPast(day) || getBlockedSlot(day)) return;
    const dayOfWeek = new Date(calYear, calMonth, day).getDay();
    const exception = getDateException(day);
    const currentlyOpen = exception
      ? exception.isOpen
      : availability[dayOfWeek].isActive;
    try {
      await shopService.upsertDateException(shopId!, {
        date: getDateStr(day),
        isOpen: !currentlyOpen,
        startTime:
          exception?.startTime ?? availability[dayOfWeek].startTime ?? "09:00",
        endTime:
          exception?.endTime ?? availability[dayOfWeek].endTime ?? "18:00",
        breakStart:
          exception?.breakStart ??
          availability[dayOfWeek].breakStart ??
          undefined,
        breakEnd:
          exception?.breakEnd ?? availability[dayOfWeek].breakEnd ?? undefined,
      });
      await loadData(true);
    } catch {
      setError("Errore salvataggio");
    }
  };

  const handleRemoveException = async (day: number, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await shopService.deleteDateException(shopId!, getDateStr(day));
      await loadData(true);
    } catch {
      setError("Errore ripristino");
    }
  };

  const handleSaveModal = async () => {
    if (!editingDate) return;
    setSavingDay(true);
    try {
      await shopService.upsertDateException(shopId!, {
        date: editingDate,
        isOpen: editForm.isActive,
        startTime: editForm.startTime,
        endTime: editForm.endTime,
        breakStart: editForm.breakStart ?? null,
        breakEnd: editForm.breakEnd ?? null,
      });
      await loadData(true);
      setEditingDate(null);
    } catch {
      setError("Errore salvataggio");
    } finally {
      setSavingDay(false);
    }
  };

  const handleSaveWeekDay = async () => {
    if (editingWeekDay === null) return;
    setSavingDay(true);
    try {
      await shopService.setAvailability(shopId!, {
        dayOfWeek: editingWeekDay,
        startTime: editWeekForm.startTime,
        endTime: editWeekForm.endTime,
        breakStart: editWeekForm.breakStart ?? null,
        breakEnd: editWeekForm.breakEnd ?? null,
        isActive: editWeekForm.isActive,
      });
      setAvailability((prev) => ({
        ...prev,
        [editingWeekDay]: { ...editWeekForm },
      }));
      setEditingWeekDay(null);
    } catch {
      setError("Errore salvataggio orario");
    } finally {
      setSavingDay(false);
    }
  };

  const handleToggleWeekDay = async (day: number) => {
    const avail = availability[day];
    const updated = { ...avail, isActive: !avail.isActive };
    setAvailability((prev) => ({ ...prev, [day]: updated }));
    try {
      await shopService.setAvailability(shopId!, {
        dayOfWeek: day,
        startTime: updated.startTime,
        endTime: updated.endTime,
        breakStart: updated.breakStart ?? undefined,
        breakEnd: updated.breakEnd ?? undefined,
        isActive: updated.isActive,
      });
    } catch {
      setAvailability((prev) => ({ ...prev, [day]: avail }));
      setError("Errore salvataggio");
    }
  };

  const handleSaveConfig = async () => {
    setSavingConfig(true);
    setError("");
    try {
      await shopService.updateConfig(shopId!, config);
      setSuccessConfig(true);
      setTimeout(() => setSuccessConfig(false), 3000);
    } catch {
      setError("Errore salvataggio configurazione");
    } finally {
      setSavingConfig(false);
    }
  };

  const handleAddFerie = async () => {
    if (!ferieForm.startAt || !ferieForm.endAt) return;
    setSavingFerie(true);
    try {
      await shopService.createBlockedSlot(shopId!, {
        startAt: new Date(ferieForm.startAt + "T00:00:00").toISOString(),
        endAt: new Date(ferieForm.endAt + "T23:59:59").toISOString(),
        reason: ferieForm.reason || undefined,
      });
      await loadData(true);
      setFerieModalOpen(false);
      setFerieForm({ startAt: "", endAt: "", reason: "" });
    } catch {
      setError("Errore aggiunta chiusura");
    } finally {
      setSavingFerie(false);
    }
  };

  const handleDeleteFerie = async (slotId: string) => {
    try {
      await shopService.deleteBlockedSlot(shopId!, slotId);
      await loadData(true);
    } catch {
      setError("Errore eliminazione chiusura");
    }
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const cells = getCalendarCells();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Impostazioni
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Configura orari e aspetto del tuo shop
        </p>
      </div>

      {error && (
        <div className="px-4 py-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-100 dark:border-red-900">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* ORARI SETTIMANALI */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <ClockIcon size={20} weight="duotone" className="text-gray-500" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Orari settimanali
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Imposta gli orari base - verranno applicati a tutti i giorni
              aperti
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* APERTURA / CHIUSURA */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Apertura
              </label>
              <input
                type="time"
                value={defaultStart}
                onChange={(e) => setDefaultStart(e.target.value)}
                className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Chiusura
              </label>
              <input
                type="time"
                value={defaultEnd}
                onChange={(e) => setDefaultEnd(e.target.value)}
                className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
              />
            </div>
          </div>

          {/* PAUSA PRANZO */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Pausa pranzo
              </p>
              <Toggle
                value={!!defaultBreakStart}
                onChange={() => {
                  setDefaultBreakStart(defaultBreakStart ? "" : "13:00");
                  setDefaultBreakEnd(defaultBreakEnd ? "" : "15:00");
                }}
              />
            </div>

            {defaultBreakStart && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Inizio pausa
                  </label>
                  <input
                    type="time"
                    value={defaultBreakStart}
                    onChange={(e) => setDefaultBreakStart(e.target.value)}
                    className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Fine pausa
                  </label>
                  <input
                    type="time"
                    value={defaultBreakEnd}
                    onChange={(e) => setDefaultBreakEnd(e.target.value)}
                    className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* RIEPILOGO GIORNI */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
              Giorni aperti - clicca sul nome per aprire/chiudere, clicca
              sull'orario per modificarlo
            </p>
            <div className="grid grid-cols-7 gap-2">
              {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                const avail = availability[day];
                return (
                  <div
                    key={day}
                    className={`
                    flex flex-col items-center py-3 px-1 rounded-xl border-2 transition-all
                    ${
                      avail.isActive
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                    }
                  `}
                  >
                    <button
                      onClick={() => handleToggleWeekDay(day)}
                      className={`text-xs font-semibold mb-1 ${avail.isActive ? "text-green-700 dark:text-green-400" : "text-gray-400 dark:text-gray-600"}`}
                    >
                      {DAYS_SHORT[day]}
                    </button>
                    {avail.isActive ? (
                      <button
                        onClick={() => {
                          setEditWeekForm({ ...avail });
                          setEditingWeekDay(day);
                        }}
                        className="text-xs text-green-600 dark:text-green-500 hover:underline leading-tight text-center"
                      >
                        {avail.startTime}-{avail.endTime}
                        {avail.breakStart && (
                          <span className="block text-orange-500 dark:text-orange-400">
                            ☕ {avail.breakStart}-{avail.breakEnd}
                          </span>
                        )}
                      </button>
                    ) : (
                      <span className="text-xs text-gray-300 dark:text-gray-700">
                        Chiuso
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Button onClick={handleApplyDefault}>
            Aggiorna tutti i giorni aperti
          </Button>
        </div>
      </Card>

      {/* CALENDARIO MENSILE */}
      <Card padding="none">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Calendario
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Clicca su un giorno per modificare orari o apertura
            </p>
          </div>
          <div className="flex items-center gap-2">
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
            <span className="text-sm font-medium text-gray-900 dark:text-white w-36 text-center">
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
        </div>

        <div className="grid grid-cols-7 border-b border-gray-100 dark:border-gray-800">
          {DAYS_SHORT.map((d) => (
            <div
              key={d}
              className="text-center py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-100 dark:bg-gray-800">
          {cells.map((day, i) => {
            if (!day)
              return (
                <div
                  key={`empty-${i}`}
                  className="bg-white dark:bg-gray-900 h-24"
                />
              );

            const dayOfWeek = new Date(calYear, calMonth, day).getDay();
            const avail = availability[dayOfWeek];
            const blocked = getBlockedSlot(day);
            const exception = getDateException(day);
            const past = isPast(day);
            const todayCell = isToday(day);
            const hasException = !!exception;
            const isOpen = exception ? exception.isOpen : avail.isActive;
            const startTime = exception?.startTime ?? avail.startTime;
            const endTime = exception?.endTime ?? avail.endTime;
            const breakStart = exception?.breakStart ?? avail.breakStart;
            const breakEnd = exception?.breakEnd ?? avail.breakEnd;

            return (
              <div
                key={day}
                onClick={() => !past && !blocked && handleCellClick(day)}
                className={`
                  relative bg-white dark:bg-gray-900 h-24 p-2 flex flex-col
                  ${!past && !blocked ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50" : ""}
                  transition-colors
                `}
              >
                <div className="flex items-start justify-between mb-1">
                  <span
                    className={`
                    text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center shrink-0
                    ${
                      todayCell
                        ? "text-white bg-gray-900 dark:bg-white dark:text-gray-900"
                        : past
                          ? "text-gray-300 dark:text-gray-700"
                          : "text-gray-900 dark:text-white"
                    }
                  `}
                  >
                    {day}
                  </span>

                  {!past && !blocked && (
                    <div className="flex items-center gap-0.5">
                      {hasException && (
                        <button
                          onClick={(e) => handleRemoveException(day, e)}
                          className="p-0.5 rounded text-gray-400 hover:text-gray-600"
                          title="Ripristina orario normale"
                        >
                          <ArrowCounterClockwiseIcon size={10} weight="bold" />
                        </button>
                      )}
                      <button
                        onClick={(e) => handleQuickToggle(day, e)}
                        className={`relative w-7 h-3.5 rounded-full transition-colors shrink-0 ${isOpen ? "bg-green-500" : "bg-gray-200 dark:bg-gray-700"}`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-2.5 h-2.5 rounded-full bg-white transition-transform ${isOpen ? "translate-x-3.5" : "translate-x-0"}`}
                        />
                      </button>
                    </div>
                  )}
                </div>

                {blocked ? (
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-xs text-red-400 font-medium bg-red-50 dark:bg-red-950 px-1.5 py-0.5 rounded text-center leading-tight">
                      {blocked.reason ?? "Ferie"}
                    </span>
                  </div>
                ) : past ? (
                  <div className="flex-1" />
                ) : isOpen ? (
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded px-1.5 py-1">
                      <p className="text-xs text-green-700 dark:text-green-400 font-medium leading-tight">
                        {startTime} - {endTime}
                      </p>
                      {breakStart && (
                        <p className="text-xs text-orange-500 dark:text-orange-400 leading-tight">
                          ☕ {breakStart}-{breakEnd}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex items-end">
                    <span className="text-xs text-gray-300 dark:text-gray-700">
                      Chiuso
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 px-5 py-3 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-green-100" />
            <span className="text-xs text-gray-400">Aperto</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-red-50" />
            <span className="text-xs text-gray-400">Ferie</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-gray-100" />
            <span className="text-xs text-gray-400">Chiuso</span>
          </div>
        </div>
      </Card>

      {/* FERIE E CHIUSURE */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <CalendarXIcon
              size={20}
              weight="duotone"
              className="text-gray-500"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Ferie e chiusure
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Blocca periodi interi
              </p>
            </div>
          </div>
          <Button size="sm" onClick={() => setFerieModalOpen(true)}>
            <PlusIcon size={14} weight="bold" className="mr-1.5" />
            Aggiungi
          </Button>
        </div>

        {blockedSlots.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-sm text-gray-400">
              Nessuna chiusura pianificata
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {blockedSlots.map((slot) => (
              <div
                key={slot.id}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {slot.reason ?? "Chiusura straordinaria"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {formatDate(slot.startAt)} → {formatDate(slot.endAt)}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteFerie(slot.id)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                >
                  <TrashIcon size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* PERSONALIZZAZIONE */}
      <Card>
        <div className="flex items-center gap-3 mb-5">
          <PaletteIcon size={20} weight="duotone" className="text-gray-500" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Personalizzazione
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Aspetto del tuo shop pubblico
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Input
            label="Tagline"
            placeholder="Il tuo barbiere di fiducia"
            value={config.tagline ?? ""}
            onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
          />

          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Colore principale
            </p>
            <div className="flex gap-2">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setConfig({ ...config, primaryColor: color })}
                  className="relative w-8 h-8 rounded-lg transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                >
                  {config.primaryColor === color && (
                    <CheckIcon
                      size={14}
                      weight="bold"
                      className="absolute inset-0 m-auto text-white"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Durata slot (minuti)
              </label>
              <select
                value={config.slotInterval}
                onChange={(e) =>
                  setConfig({ ...config, slotInterval: Number(e.target.value) })
                }
                className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none"
              >
                {[10, 15, 20, 30, 45, 60].map((v) => (
                  <option key={v} value={v}>
                    {v} min
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <div className="flex items-center justify-between py-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Mostra prezzi
                </p>
                <Toggle
                  value={!!config.showPrices}
                  onChange={() =>
                    setConfig({ ...config, showPrices: !config.showPrices })
                  }
                />
              </div>
            </div>
          </div>

          {successConfig && (
            <div className="px-4 py-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-100 dark:border-green-900">
              <p className="text-sm text-green-600 dark:text-green-400">
                ✅ Configurazione salvata
              </p>
            </div>
          )}

          <Button loading={savingConfig} onClick={handleSaveConfig}>
            <FloppyDiskIcon size={16} weight="bold" className="mr-2" />
            Salva configurazione
          </Button>
        </div>
      </Card>

      {/* MODAL GIORNO SPECIFICO */}
      <Modal
        isOpen={editingDate !== null}
        onClose={() => setEditingDate(null)}
        title={`Orario - ${editingDate}`}
      >
        <div className="flex flex-col gap-4">
          <TimeRangeForm form={editForm} onChange={setEditForm} />
          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              onClick={() => setEditingDate(null)}
              className="flex-1"
            >
              Annulla
            </Button>
            <Button
              loading={savingDay}
              onClick={handleSaveModal}
              className="flex-1"
            >
              Salva
            </Button>
          </div>
        </div>
      </Modal>

      {/* MODAL ORARIO SETTIMANALE */}
      <Modal
        isOpen={editingWeekDay !== null}
        onClose={() => setEditingWeekDay(null)}
        title={`Orario - tutti i ${DAYS_SHORT[editingWeekDay ?? 0]}`}
      >
        <div className="flex flex-col gap-4">
          <TimeRangeForm form={editWeekForm} onChange={setEditWeekForm} />
          <p className="text-xs text-gray-400">
            ℹ️ Modifica tutti i {DAYS_SHORT[editingWeekDay ?? 0]} del calendario
          </p>
          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              onClick={() => setEditingWeekDay(null)}
              className="flex-1"
            >
              Annulla
            </Button>
            <Button
              loading={savingDay}
              onClick={handleSaveWeekDay}
              className="flex-1"
            >
              Salva
            </Button>
          </div>
        </div>
      </Modal>

      {/* MODAL FERIE */}
      <Modal
        isOpen={ferieModalOpen}
        onClose={() => setFerieModalOpen(false)}
        title="Aggiungi chiusura"
      >
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Dal *
              </label>
              <input
                type="date"
                value={ferieForm.startAt}
                onChange={(e) =>
                  setFerieForm({ ...ferieForm, startAt: e.target.value })
                }
                className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Al *
              </label>
              <input
                type="date"
                value={ferieForm.endAt}
                onChange={(e) =>
                  setFerieForm({ ...ferieForm, endAt: e.target.value })
                }
                className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900"
              />
            </div>
          </div>

          <Input
            label="Motivo (opzionale)"
            placeholder="es. Ferie estive, Natale..."
            value={ferieForm.reason}
            onChange={(e) =>
              setFerieForm({ ...ferieForm, reason: e.target.value })
            }
          />

          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              onClick={() => setFerieModalOpen(false)}
              className="flex-1"
            >
              Annulla
            </Button>
            <Button
              loading={savingFerie}
              disabled={!ferieForm.startAt || !ferieForm.endAt}
              onClick={handleAddFerie}
              className="flex-1"
            >
              Aggiungi
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

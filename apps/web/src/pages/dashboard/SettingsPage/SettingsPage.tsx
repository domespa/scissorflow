import { useState, useEffect, useCallback, useRef } from "react";
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
  ScissorsIcon,
  UploadIcon,
  ImageIcon,
  GearIcon,
  CoffeeIcon,
  CheckCircleIcon,
  ProhibitIcon,
} from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { ImageCropper } from "@/components/ui/ImageCropper";
import { shopService } from "@/services/shop.service";
import { cloudinaryService } from "@/services/cloudinary.service";
import { getCroppedImg } from "@/lib/cropImage";
import { useShop } from "@/hooks/useShop";
import { SlotMode } from "@scissorflow/shared";
import type { ShopConfigDTO, BlockedSlotDTO } from "@scissorflow/shared";
import type { Area } from "react-easy-crop";

const DAYS_SHORT = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
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
const FERIE_DAYS = ["Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"];
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
const PRESET_IMAGES = [
  {
    id: "barber1",
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&q=60",
    label: "Barbershop classico",
  },
  {
    id: "barber2",
    url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&q=60",
    label: "Taglio moderno",
  },
  {
    id: "barber3",
    url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=200&q=60",
    label: "Stile vintage",
  },
  {
    id: "barber4",
    url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&q=60",
    label: "Salone premium",
  },
  {
    id: "barber5",
    url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=80",
    thumb:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=200&q=60",
    label: "Fade & Beard",
  },
];

// GENERA TUTTI GLI ORARI CON STEP 15MIN
const HOURS_OPTIONS = Array.from({ length: 18 }, (_, i) =>
  String(i + 6).padStart(2, "0"),
);
const MINUTES_OPTIONS = ["00", "15", "30", "45"];

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

type SettingsImageSource = "none" | "preset" | "upload";

const defaultAvailability = (): DayAvailability => ({
  startTime: "09:00",
  endTime: "18:00",
  breakStart: null,
  breakEnd: null,
  isActive: false,
});

// TIME PICKER GRID
const TimePicker = ({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
}) => {
  const [h, m] = value.split(":");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="flex items-center gap-1.5">
        <select
          value={h}
          onChange={(e) => onChange(`${e.target.value}:${m}`)}
          className="w-16 px-1 py-2 text-base font-semibold text-center text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-gray-900 dark:focus:border-white cursor-pointer"
        >
          {HOURS_OPTIONS.map((hr) => (
            <option key={hr} value={hr}>
              {hr}
            </option>
          ))}
        </select>
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          :
        </span>
        <select
          value={m}
          onChange={(e) => onChange(`${h}:${e.target.value}`)}
          className="w-16 px-1 py-2 text-base font-semibold text-center text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-gray-900 dark:focus:border-white cursor-pointer"
        >
          {MINUTES_OPTIONS.map((mn) => (
            <option key={mn} value={mn}>
              {mn}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Toggle = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`relative w-11 h-6 rounded-full transition-colors ${value ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 transition-transform ${value ? "translate-x-5" : "translate-x-0"}`}
    />
  </button>
);

// FORM ORARIO CON TIMEPICKER
const TimeRangeForm = ({
  form,
  onChange,
  showApplyAll,
  applyAll,
  onApplyAllChange,
  dayName,
}: {
  form: DayAvailability;
  onChange: (f: DayAvailability) => void;
  showApplyAll?: boolean;
  applyAll?: boolean;
  onApplyAllChange?: () => void;
  dayName?: string;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
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
          <TimePicker
            label="Apertura"
            value={form.startTime}
            onChange={(v) => onChange({ ...form, startTime: v })}
          />
          <TimePicker
            label="Chiusura"
            value={form.endTime}
            onChange={(v) => onChange({ ...form, endTime: v })}
          />
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
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
              <TimePicker
                label="Inizio pausa"
                value={form.breakStart ?? "13:00"}
                onChange={(v) => onChange({ ...form, breakStart: v })}
              />
              <TimePicker
                label="Fine pausa"
                value={form.breakEnd ?? "15:00"}
                onChange={(v) => onChange({ ...form, breakEnd: v })}
              />
            </div>
          )}
        </div>
      </>
    )}
    {showApplyAll && onApplyAllChange && dayName && (
      <div className="flex items-center gap-2 pt-1 border-t border-gray-200 dark:border-gray-700">
        <input
          type="checkbox"
          id="apply-all"
          checked={applyAll}
          onChange={onApplyAllChange}
          className="w-4 h-4 rounded accent-gray-900 dark:accent-white cursor-pointer"
        />
        <label
          htmlFor="apply-all"
          className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        >
          Applica a tutti i{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            {dayName}
          </span>
        </label>
      </div>
    )}
  </div>
);

// CALENDARIO FERIE
type FerieCalendarProps = {
  onConfirm: (startAt: string, endAt: string, reason: string) => void;
  onCancel: () => void;
  loading: boolean;
  error: string;
  blockedSlots: BlockedSlotDTO[];
  formatDate: (iso: string) => string;
};

const FerieCalendar = ({
  onConfirm,
  onCancel,
  loading,
  error,
  blockedSlots,
  formatDate,
}: FerieCalendarProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [reason, setReason] = useState("");

  const toDateStr = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const fmtDate = (d: Date) =>
    d.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const daysBetween = (a: Date, b: Date) =>
    Math.round(Math.abs(b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const isBlockedDate = (date: Date) =>
    blockedSlots.some((slot) => {
      const s = new Date(slot.startAt);
      s.setHours(0, 0, 0, 0);
      const e = new Date(slot.endAt);
      e.setHours(23, 59, 59, 999);
      return date >= s && date <= e;
    });

  const handleDayClick = (date: Date) => {
    if (date < today || isBlockedDate(date)) return;
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else if (date.getTime() === startDate.getTime()) {
        setStartDate(null);
      } else {
        setEndDate(date);
      }
    }
  };

  const getDayState = (date: Date) => {
    if (date < today) return "past";
    if (isBlockedDate(date)) return "blocked";
    const effectiveEnd = endDate ?? hoverDate;
    if (startDate && date.getTime() === startDate.getTime()) return "start";
    if (effectiveEnd && date.getTime() === effectiveEnd.getTime()) return "end";
    if (startDate && effectiveEnd && date > startDate && date < effectiveEnd)
      return "in-range";
    if (date.getTime() === today.getTime()) return "today";
    return "default";
  };

  const cells = () => {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const result: (Date | null)[] = [];
    for (let i = 0; i < offset; i++) result.push(null);
    for (let d = 1; d <= daysInMonth; d++)
      result.push(new Date(calYear, calMonth, d));
    return result;
  };

  const canConfirm = startDate && endDate;
  const totalDays = startDate && endDate ? daysBetween(startDate, endDate) : 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            const d = new Date(calYear, calMonth - 1);
            setCalMonth(d.getMonth());
            setCalYear(d.getFullYear());
          }}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
        >
          <CaretLeftIcon size={16} />
        </button>
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {MONTHS_IT[calMonth]} {calYear}
        </span>
        <button
          type="button"
          onClick={() => {
            const d = new Date(calYear, calMonth + 1);
            setCalMonth(d.getMonth());
            setCalYear(d.getFullYear());
          }}
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
        >
          <CaretRightIcon size={16} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {FERIE_DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-semibold text-gray-600 dark:text-gray-300 py-1"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells().map((date, i) => {
          if (!date) return <div key={`e-${i}`} />;
          const state = getDayState(date);
          const isDisabled = state === "past" || state === "blocked";
          const isSelected = state === "start" || state === "end";
          const isInRange = state === "in-range";
          return (
            <button
              key={date.getTime()}
              type="button"
              disabled={isDisabled}
              onClick={() => handleDayClick(date)}
              onMouseEnter={() =>
                startDate && !endDate && !isDisabled && setHoverDate(date)
              }
              onMouseLeave={() => setHoverDate(null)}
              className={`
                h-8 w-full rounded-lg text-xs font-medium transition-all
                ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
                ${state === "past" ? "text-gray-300 dark:text-gray-600" : ""}
                ${state === "blocked" ? "text-red-300 dark:text-red-800 line-through" : ""}
                ${isSelected ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900" : ""}
                ${isInRange ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" : ""}
                ${state === "today" ? "text-blue-600 dark:text-blue-400 font-semibold" : ""}
                ${!isDisabled && !isSelected && !isInRange ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" : ""}
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
        {!startDate
          ? "Clicca il primo giorno della chiusura"
          : !endDate
            ? "Ora clicca il giorno finale"
            : ""}
      </p>
      {canConfirm && (
        <div className="flex items-center justify-between px-3 py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600">
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-0.5">
              Periodo selezionato
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {fmtDate(startDate!)} → {fmtDate(endDate!)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {totalDays}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {totalDays === 1 ? "giorno" : "giorni"}
            </p>
          </div>
        </div>
      )}
      <input
        type="text"
        placeholder="Motivo (opzionale) - es. Ferie estive, Natale..."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
      />
      {error && (
        <div className="px-3 py-2.5 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 rounded-lg">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}
      <div className="flex gap-3 pt-1">
        <Button variant="secondary" onClick={onCancel} className="flex-1">
          Annulla
        </Button>
        <Button
          loading={loading}
          disabled={!canConfirm}
          onClick={() =>
            canConfirm &&
            onConfirm(toDateStr(startDate!), toDateStr(endDate!), reason)
          }
          className="flex-1"
        >
          Aggiungi chiusura
        </Button>
      </div>
    </div>
  );
};

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

  const [defaultStart, setDefaultStart] = useState("09:00");
  const [defaultEnd, setDefaultEnd] = useState("18:00");
  const [defaultBreakStart, setDefaultBreakStart] = useState("");
  const [defaultBreakEnd, setDefaultBreakEnd] = useState("");
  const [defaultHasBreak, setDefaultHasBreak] = useState(false);

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
  const [editApplyAll, setEditApplyAll] = useState(false);
  const [editingWeekDay, setEditingWeekDay] = useState<number | null>(null);
  const [editWeekForm, setEditWeekForm] = useState<DayAvailability>(
    defaultAvailability(),
  );
  const [ferieModalOpen, setFerieModalOpen] = useState(false);
  const [ferieError, setFerieError] = useState("");
  const [savingFerie, setSavingFerie] = useState(false);

  const [config, setConfig] = useState<Partial<ShopConfigDTO>>({
    primaryColor: "#1a1a1a",
    tagline: "",
    showPrices: true,
    slotMode: SlotMode.FIXED,
    slotInterval: 30,
  });

  const settingsFileInputRef = useRef<HTMLInputElement>(null);
  const [settingsImageSource, setSettingsImageSource] =
    useState<SettingsImageSource>("none");
  const [settingsSelectedPreset, setSettingsSelectedPreset] = useState<
    string | null
  >(null);
  const [settingsUploadedSrc, setSettingsUploadedSrc] = useState<string | null>(
    null,
  );
  const [settingsCroppedAreaPixels, setSettingsCroppedAreaPixels] =
    useState<Area | null>(null);
  const [settingsCroppedUrl, setSettingsCroppedUrl] = useState<string | null>(
    null,
  );
  const [settingsIsCropping, setSettingsIsCropping] = useState(false);

  const settingsMockupUrl =
    settingsImageSource === "preset"
      ? settingsSelectedPreset
      : settingsImageSource === "upload"
        ? settingsCroppedUrl
        : (config.coverImage ?? null);

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

      const firstActiveDay = [1, 2, 3, 4, 5, 6, 0].find(
        (d) => mapped[d].isActive,
      );
      if (firstActiveDay !== undefined) {
        setDefaultStart(mapped[firstActiveDay].startTime);
        setDefaultEnd(mapped[firstActiveDay].endTime);
        if (mapped[firstActiveDay].breakStart) {
          setDefaultHasBreak(true);
          setDefaultBreakStart(mapped[firstActiveDay].breakStart ?? "13:00");
          setDefaultBreakEnd(mapped[firstActiveDay].breakEnd ?? "15:00");
        }
      }
      if (configData.coverImage) {
        setSettingsImageSource("preset");
        setSettingsSelectedPreset(configData.coverImage);
      }
    } catch {
      setError("Errore durante il caricamento");
    } finally {
      setLoading(false);
      if (silent) requestAnimationFrame(() => window.scrollTo(0, scrollY));
    }
  };

  const handleSettingsFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError("Immagine troppo grande. Max 5MB.");
      return;
    }
    setSettingsUploadedSrc(URL.createObjectURL(file));
    setSettingsImageSource("upload");
    setSettingsSelectedPreset(null);
    setSettingsCroppedUrl(null);
    setSettingsIsCropping(true);
  };

  const handleSettingsCropComplete = useCallback(
    async (area: Area) => {
      setSettingsCroppedAreaPixels(area);
      if (!settingsUploadedSrc) return;
      try {
        const croppedFile = await getCroppedImg(settingsUploadedSrc, area);
        setSettingsCroppedUrl(URL.createObjectURL(croppedFile));
      } catch {
        /* silenzioso */
      }
    },
    [settingsUploadedSrc],
  );

  const handleSettingsSelectPreset = (url: string) => {
    setSettingsSelectedPreset(url);
    setSettingsImageSource("preset");
    setSettingsUploadedSrc(null);
    setSettingsCroppedUrl(null);
    setSettingsIsCropping(false);
    setConfig((prev) => ({ ...prev, coverImage: url }));
  };

  const getCalendarCells = () => {
    const firstDayRaw = new Date(calYear, calMonth, 1).getDay();
    const firstDay = firstDayRaw === 0 ? 6 : firstDayRaw - 1;
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
      start.setHours(0, 0, 0, 0);
      const end = new Date(slot.endAt);
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
              breakStart: defaultHasBreak ? defaultBreakStart : null,
              breakEnd: defaultHasBreak ? defaultBreakEnd : null,
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
    setEditApplyAll(false);
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
      const dayOfWeek = new Date(editingDate).getDay();

      if (editApplyAll) {
        // APPLICA A TUTTI I GIORNI DELLA SETTIMANA SELEZIONATA
        await shopService.setAvailability(shopId!, {
          dayOfWeek,
          startTime: editForm.startTime,
          endTime: editForm.endTime,
          breakStart: editForm.breakStart ?? null,
          breakEnd: editForm.breakEnd ?? null,
          isActive: editForm.isActive,
        });
      } else {
        // APPLICA SOLO A QUESTO GIORNO
        await shopService.upsertDateException(shopId!, {
          date: editingDate,
          isOpen: editForm.isActive,
          startTime: editForm.startTime,
          endTime: editForm.endTime,
          breakStart: editForm.breakStart ?? null,
          breakEnd: editForm.breakEnd ?? null,
        });
      }
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
      let coverImageUrl = config.coverImage;
      if (
        settingsImageSource === "upload" &&
        settingsCroppedAreaPixels &&
        settingsUploadedSrc
      ) {
        const croppedFile = await getCroppedImg(
          settingsUploadedSrc,
          settingsCroppedAreaPixels,
        );
        coverImageUrl = await cloudinaryService.uploadImage(croppedFile);
      } else if (settingsImageSource === "preset" && settingsSelectedPreset) {
        coverImageUrl = settingsSelectedPreset;
      } else if (settingsImageSource === "none") {
        coverImageUrl = undefined;
      }
      await shopService.updateConfig(shopId!, {
        ...config,
        coverImage: coverImageUrl,
      });
      setSuccessConfig(true);
      setTimeout(() => setSuccessConfig(false), 3000);
    } catch {
      setError("Errore salvataggio configurazione");
    } finally {
      setSavingConfig(false);
    }
  };

  const handleAddFerie = async (
    startAt: string,
    endAt: string,
    reason: string,
  ) => {
    setFerieError("");
    const start = new Date(startAt + "T12:00:00");
    const end = new Date(endAt + "T12:00:00");
    if (start > end) {
      setFerieError(
        "La data di fine deve essere successiva alla data di inizio.",
      );
      return;
    }
    if (start.getTime() === end.getTime()) {
      setFerieError("La data di inizio e di fine non possono essere uguali.");
      return;
    }
    const overlap = blockedSlots.find((slot) => {
      const s = new Date(slot.startAt);
      s.setHours(0, 0, 0, 0);
      const e = new Date(slot.endAt);
      e.setHours(23, 59, 59, 999);
      return start <= e && end >= s;
    });
    if (overlap) {
      setFerieError(
        `Periodo sovrapposto con una chiusura esistente: ${formatDate(overlap.startAt)} → ${formatDate(overlap.endAt)}.`,
      );
      return;
    }
    setSavingFerie(true);
    try {
      await shopService.createBlockedSlot(shopId!, {
        startAt: new Date(startAt + "T00:00:00").toISOString(),
        endAt: new Date(endAt + "T23:59:59").toISOString(),
        reason: reason || undefined,
      });
      await loadData(true);
      setFerieModalOpen(false);
      setFerieError("");
    } catch {
      setFerieError("Errore durante l'aggiunta della chiusura. Riprova.");
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

  // NOME GIORNO PER MODAL
  const editingDayOfWeek = editingDate ? new Date(editingDate).getDay() : null;
  const editingDayName =
    editingDayOfWeek !== null
      ? DAYS_SHORT[editingDayOfWeek === 0 ? 6 : editingDayOfWeek - 1]
      : "";

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Impostazioni
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
          Configura orari e aspetto del tuo shop
        </p>
      </div>

      {error && (
        <div className="px-4 py-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* ORARI SETTIMANALI */}
      <Card className="shadow-md border border-gray-300 dark:border-gray-600">
        <div className="flex flex-col gap-5">
          {/* RIGA ORARI: APERTURA/CHIUSURA | SEPARATORE | PAUSA PRANZO */}
          <div className="flex flex-col md:flex-row items-start gap-0">
            {/* APERTURA / CHIUSURA */}
            <div className="flex flex-col gap-3 flex-1">
              <p className="flex items-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide gap-3">
                <ClockIcon size={20} weight="duotone" />
                Orari settimanali
              </p>
              <div className="flex items-end gap-20">
                <TimePicker
                  label="Apertura"
                  value={defaultStart}
                  onChange={setDefaultStart}
                />
                <TimePicker
                  label="Chiusura"
                  value={defaultEnd}
                  onChange={setDefaultEnd}
                />
              </div>
            </div>

            {/* SEPARATORE VERTICALE */}
            <div className="hidden md:block self-stretch w-px bg-gray-300 dark:bg-gray-600 mx-5 mt-6" />

            {/* SEPARATORE ORIZZONTALE DA MOBILE */}
            <div className="block md:hidden w-full h-px bg-gray-300 dark:bg-gray-600 my-3" />

            {/* PAUSA PRANZO */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <p className="flex items-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide gap-3">
                  <CoffeeIcon size={20} weight="duotone" />
                  Pausa pranzo
                </p>
                <Toggle
                  value={defaultHasBreak}
                  onChange={() => {
                    setDefaultHasBreak(!defaultHasBreak);
                    if (!defaultHasBreak) {
                      setDefaultBreakStart("13:00");
                      setDefaultBreakEnd("15:00");
                    }
                  }}
                />
              </div>
              {defaultHasBreak ? (
                <div className="flex items-end gap-20">
                  <TimePicker
                    label="Inizio"
                    value={defaultBreakStart}
                    onChange={setDefaultBreakStart}
                  />
                  <TimePicker
                    label="Fine"
                    value={defaultBreakEnd}
                    onChange={setDefaultBreakEnd}
                  />
                </div>
              ) : (
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Nessuna pausa impostata
                </p>
              )}
            </div>
          </div>

          {/* GIORNI APERTI */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-3">
              Giorni aperti - clicca per aprire/chiudere
            </p>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 0].map((day) => {
                const avail = availability[day];
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleToggleWeekDay(day)}
                    className={`flex flex-col items-center py-3 px-1 rounded-xl border-2 transition-all ${
                      avail.isActive
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold ${avail.isActive ? "text-green-700 dark:text-green-400" : "text-gray-600 dark:text-gray-300"}`}
                    >
                      {DAYS_SHORT[day]}
                    </span>
                    <span
                      className={`text-xs mt-1 ${avail.isActive ? "text-green-600 dark:text-green-500" : "text-gray-400 dark:text-gray-600"}`}
                    >
                      {avail.isActive ? "Aperto" : "Chiuso"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <Button onClick={handleApplyDefault}>Aggiorna calendario</Button>
        </div>
      </Card>

      {/* CALENDARIO MENSILE */}
      <Card
        padding="none"
        className="shadow-md border border-gray-300 dark:border-gray-600"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Calendario
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Clicca su un giorno per modificare
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const d = new Date(calYear, calMonth - 1);
                setCalMonth(d.getMonth());
                setCalYear(d.getFullYear());
              }}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
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
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            >
              <CaretRightIcon size={16} />
            </button>
          </div>
        </div>

        {/* INTESTAZIONE GIORNI */}
        <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
          {DAYS_SHORT.map((d) => (
            <div
              key={d}
              className="text-center py-2.5 text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider"
            >
              {d}
            </div>
          ))}
        </div>

        {/* GRIGLIA CELLE */}
        <div className="grid grid-cols-7 gap-0.5 bg-gray-300 dark:bg-gray-600">
          {cells.map((day, i) => {
            if (!day)
              return (
                <div
                  key={`empty-${i}`}
                  className="bg-gray-50 dark:bg-gray-800/40 h-24 md:h-28"
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

            return (
              <div
                key={day}
                onClick={() => !past && !blocked && handleCellClick(day)}
                className={`relative h-24 md:h-28 p-2 md:p-2.5 flex flex-col transition-colors
                  ${past ? "bg-gray-50 dark:bg-gray-800/40 cursor-default" : "bg-white dark:bg-gray-900"}
                  ${!past && !blocked ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/60" : ""}
                `}
              >
                <div className="flex items-start justify-between mb-1">
                  {/* NUMERO GIORNO */}
                  <span
                    className={`text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0
                      ${
                        todayCell
                          ? "text-white bg-gray-900 dark:bg-white dark:text-gray-900"
                          : past
                            ? "text-gray-300 dark:text-gray-600"
                            : "text-gray-800 dark:text-gray-100"
                      }`}
                  >
                    {day}
                  </span>
                  {!past && !blocked && (
                    <div className="flex items-center gap-0.5">
                      {hasException && (
                        <button
                          onClick={(e) => handleRemoveException(day, e)}
                          className="p-0.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                          title="Ripristina"
                        >
                          <ArrowCounterClockwiseIcon size={10} weight="bold" />
                        </button>
                      )}
                      <button
                        onClick={(e) => handleQuickToggle(day, e)}
                        className={`relative w-7 h-3.5 rounded-full transition-colors shrink-0 ${isOpen ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}`}
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
                    <span className="text-red-600 dark:text-red-500 font-medium bg-red-100 dark:bg-red-950 px-2.5 py-1.5 rounded-3xl text-center leading-tight text-[13px] ">
                      {blocked.reason ?? "Ferie"}
                    </span>
                  </div>
                ) : past ? (
                  <div className="flex-1" />
                ) : isOpen ? (
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded px-1.5 py-0.5">
                      <p className="text-green-700 dark:text-green-400 font-semibold leading-tight text-[13px]">
                        {startTime} - {endTime}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex items-end">
                    <span className="text-gray-400 dark:text-gray-500 text-xs font-medium">
                      Chiuso
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* LEGENDA */}
        <div className="flex items-center gap-4 px-5 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-green-200 dark:bg-green-800" />
            <span className="text-xs text-gray-600 dark:text-gray-300">
              Aperto
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-red-100 dark:bg-red-900" />
            <span className="text-xs text-gray-600 dark:text-gray-300">
              Ferie
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-gray-200 dark:bg-gray-600" />
            <span className="text-xs text-gray-600 dark:text-gray-300">
              Chiuso
            </span>
          </div>
        </div>
      </Card>

      {/* DUE CARD AFFIANCATE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-md border border-gray-300 dark:border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CalendarXIcon
                size={20}
                weight="duotone"
                className="text-gray-600 dark:text-gray-300"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Ferie e chiusure
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Blocca periodi interi
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => {
                setFerieError("");
                setFerieModalOpen(true);
              }}
            >
              <PlusIcon size={14} weight="bold" className="mr-1.5" />
              Aggiungi
            </Button>
          </div>
          {blockedSlots.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Nessuna chiusura pianificata
              </p>
            </div>
          ) : (
            <div className="max-h-48 overflow-y-auto flex flex-col gap-2">
              {blockedSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {slot.reason ?? "Chiusura straordinaria"}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                      {formatDate(slot.startAt)} → {formatDate(slot.endAt)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteFerie(slot.id)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors shrink-0 ml-2"
                  >
                    <TrashIcon size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="shadow-md border border-gray-300 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-5">
            <GearIcon
              size={20}
              weight="duotone"
              className="text-gray-600 dark:text-gray-300"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Impostazioni shop
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Configura le opzioni del tuo shop
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between py-3 border border-gray-300 dark:border-gray-600 rounded-xl px-4 bg-gray-50 dark:bg-gray-800/40">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Mostra prezzi
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  I clienti vedono i prezzi dei servizi
                </p>
              </div>
              <Toggle
                value={!!config.showPrices}
                onChange={() =>
                  setConfig({ ...config, showPrices: !config.showPrices })
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Intervallo slot calendario
              </label>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                Ogni quanto tempo può iniziare un appuntamento
              </p>
              <select
                value={config.slotInterval}
                onChange={(e) =>
                  setConfig({ ...config, slotInterval: Number(e.target.value) })
                }
                className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
              >
                {[10, 15, 20, 25, 30, 45, 60].map((v) => (
                  <option key={v} value={v}>
                    {v} minuti
                  </option>
                ))}
              </select>
            </div>
            <Button loading={savingConfig} onClick={handleSaveConfig}>
              <FloppyDiskIcon size={16} weight="bold" className="mr-2" />
              Salva impostazioni
            </Button>
          </div>
        </Card>
      </div>

      {/* PERSONALIZZAZIONE */}
      <Card className="shadow-md border border-gray-300 dark:border-gray-600">
        <div className="flex items-center gap-3 mb-5">
          <PaletteIcon
            size={20}
            weight="duotone"
            className="text-gray-600 dark:text-gray-300"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Personalizzazione
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Aspetto del tuo shop pubblico
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-5">
            <Input
              label="Tagline"
              placeholder="Il tuo barbiere di fiducia"
              value={config.tagline ?? ""}
              onChange={(e) =>
                setConfig({ ...config, tagline: e.target.value })
              }
            />
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Colore principale
              </p>
              <div className="flex gap-2 flex-wrap">
                {PRESET_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setConfig({ ...config, primaryColor: color })
                    }
                    className="relative w-8 h-8 rounded-lg transition-transform hover:scale-110 shadow-sm"
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
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Immagine hero
              </p>
              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => {
                    setSettingsImageSource("preset");
                    setSettingsUploadedSrc(null);
                    setSettingsCroppedUrl(null);
                    setSettingsIsCropping(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-all ${settingsImageSource === "preset" || settingsImageSource === "none" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"}`}
                >
                  Scegli preset
                </button>
                <button
                  type="button"
                  onClick={() => settingsFileInputRef.current?.click()}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-all flex items-center justify-center gap-1.5 ${settingsImageSource === "upload" ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"}`}
                >
                  <UploadIcon size={12} />
                  Carica la tua
                </button>
                <input
                  ref={settingsFileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={handleSettingsFileSelect}
                />
              </div>
              {(settingsImageSource === "preset" ||
                settingsImageSource === "none") && (
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_IMAGES.map((img) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => handleSettingsSelectPreset(img.url)}
                      className={`relative rounded-lg overflow-hidden aspect-video transition-all shadow-sm ${settingsSelectedPreset === img.url ? "ring-2 ring-gray-900 dark:ring-white" : "opacity-70 hover:opacity-100"}`}
                    >
                      <img
                        src={img.thumb}
                        alt={img.label}
                        className="w-full h-full object-cover"
                      />
                      {settingsSelectedPreset === img.url && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <CheckIcon
                            size={20}
                            weight="bold"
                            className="text-white"
                          />
                        </div>
                      )}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setSettingsImageSource("none");
                      setSettingsSelectedPreset(null);
                      setConfig({ ...config, coverImage: undefined });
                    }}
                    className={`relative rounded-lg overflow-hidden aspect-video border-2 border-dashed transition-all flex items-center justify-center ${settingsImageSource === "none" ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800" : "border-gray-300 dark:border-gray-600 opacity-70 hover:opacity-100"}`}
                  >
                    <div className="text-center">
                      <ImageIcon
                        size={16}
                        className="text-gray-400 mx-auto mb-0.5"
                      />
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Rimuovi immagine
                      </p>
                    </div>
                  </button>
                </div>
              )}
              {settingsImageSource === "upload" &&
                settingsUploadedSrc &&
                settingsIsCropping && (
                  <div className="flex flex-col gap-2 mt-2">
                    <ImageCropper
                      imageSrc={settingsUploadedSrc}
                      onCropComplete={handleSettingsCropComplete}
                    />
                    <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                      Trascina per posizionare · Scorri per zoomare
                    </p>
                  </div>
                )}
            </div>
            <Button loading={savingConfig} onClick={handleSaveConfig}>
              <FloppyDiskIcon size={16} weight="bold" className="mr-2" />
              Salva personalizzazione
            </Button>
          </div>

          <div className="lg:w-96 lg:shrink-0 lg:sticky lg:top-6 flex flex-col gap-4">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Anteprima live
            </p>
            <div className="flex flex-col gap-1">
              <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-md">
                <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <div className="flex-1 mx-1.5 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
                </div>
                <div
                  className="relative h-36 flex items-end"
                  style={{
                    background: settingsMockupUrl
                      ? `url(${settingsMockupUrl}) center/cover`
                      : `linear-gradient(135deg, ${config.primaryColor ?? "#1a1a1a"} 0%, ${config.primaryColor ?? "#1a1a1a"}cc 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative px-2 pb-1.5 flex items-end gap-1.5">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: config.primaryColor ?? "#1a1a1a",
                      }}
                    >
                      <ScissorsIcon
                        size={12}
                        weight="duotone"
                        className="text-white"
                      />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight truncate max-w-25">
                        Il tuo shop
                      </p>
                      {config.tagline && (
                        <p
                          className="text-white/70 truncate max-w-25"
                          style={{ fontSize: "9px" }}
                        >
                          {config.tagline}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2">
                  <div className="flex gap-1 mb-1.5 overflow-hidden">
                    {["Taglio", "Barba", "Colore"].map((s) => (
                      <div
                        key={s}
                        className="px-1.5 py-0.5 rounded-full text-white shrink-0"
                        style={{
                          backgroundColor: config.primaryColor ?? "#1a1a1a",
                          fontSize: "8px",
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-0.5">
                    {["L", "M", "M", "G", "V"].map((d, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-0.5"
                      >
                        <p
                          className="text-gray-500"
                          style={{ fontSize: "7px" }}
                        >
                          {d}
                        </p>
                        <div className="w-full h-2.5 bg-green-100 rounded" />
                        <div className="w-full h-2.5 bg-green-100 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                Desktop
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className="rounded-2xl overflow-hidden border-2 border-gray-400 dark:border-gray-600 shadow-md bg-white dark:bg-gray-900"
                style={{ width: "90px" }}
              >
                <div className="bg-gray-900 h-3 flex items-center justify-center">
                  <div className="w-6 h-1 bg-gray-700 rounded-full" />
                </div>
                <div
                  className="relative flex items-end"
                  style={{
                    height: "90px",
                    background: settingsMockupUrl
                      ? `url(${settingsMockupUrl}) center/cover`
                      : `linear-gradient(135deg, ${config.primaryColor ?? "#1a1a1a"} 0%, ${config.primaryColor ?? "#1a1a1a"}cc 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative px-1.5 pb-1 flex items-end gap-1">
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: config.primaryColor ?? "#1a1a1a",
                      }}
                    >
                      <ScissorsIcon
                        size={9}
                        weight="duotone"
                        className="text-white"
                      />
                    </div>
                    <p
                      className="text-white font-semibold leading-tight truncate"
                      style={{ fontSize: "7px", maxWidth: "40px" }}
                    >
                      Shop
                    </p>
                  </div>
                </div>
                <div className="p-1.5">
                  <div className="flex gap-0.5 mb-1 overflow-hidden">
                    {["Taglio", "Barba"].map((s) => (
                      <div
                        key={s}
                        className="px-1 py-0.5 rounded-full text-white shrink-0"
                        style={{
                          backgroundColor: config.primaryColor ?? "#1a1a1a",
                          fontSize: "6px",
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-0.5">
                    {["L", "M", "M", "G", "V"].map((d, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-0.5"
                      >
                        <p
                          className="text-gray-500"
                          style={{ fontSize: "5px" }}
                        >
                          {d}
                        </p>
                        <div
                          className="w-full bg-green-100 rounded"
                          style={{ height: "5px" }}
                        />
                        <div
                          className="w-full bg-green-100 rounded"
                          style={{ height: "5px" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pb-1.5 flex justify-center">
                  <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300">Mobile</p>
            </div>
          </div>
        </div>
      </Card>

      {/* MODAL GIORNO SPECIFICO */}
      <Modal
        isOpen={editingDate !== null}
        onClose={() => setEditingDate(null)}
        title={`${editingDate} - ${editingDayName}`}
      >
        <div className="flex flex-col gap-4">
          <TimeRangeForm
            form={editForm}
            onChange={setEditForm}
            showApplyAll={true}
            applyAll={editApplyAll}
            onApplyAllChange={() => setEditApplyAll(!editApplyAll)}
            dayName={`${editingDayName}`}
          />
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

      {/* TOAST FISSO */}
      {successConfig && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-gray-900 dark:bg-white shadow-xl border border-gray-800 dark:border-gray-200 animate-fade-in">
          <CheckCircleIcon
            size={18}
            weight="duotone"
            className="text-green-400 dark:text-green-600 shrink-0"
          />
          <p className="text-sm font-medium text-white dark:text-gray-900 whitespace-nowrap">
            Impostazioni salvate
          </p>
        </div>
      )}

      {/* MODAL ORARIO SETTIMANALE */}
      <Modal
        isOpen={editingWeekDay !== null}
        onClose={() => setEditingWeekDay(null)}
        title={`Orario - tutti i ${DAYS_SHORT[(editingWeekDay ?? 0) === 0 ? 6 : (editingWeekDay ?? 0) - 1]}`}
      >
        <div className="flex flex-col gap-4">
          <TimeRangeForm form={editWeekForm} onChange={setEditWeekForm} />
          <p className="text-xs text-gray-600 dark:text-gray-300">
            ℹ️ Modifica tutti i{" "}
            {
              DAYS_SHORT[
                (editingWeekDay ?? 0) === 0 ? 6 : (editingWeekDay ?? 0) - 1
              ]
            }{" "}
            del calendario{" "}
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
        onClose={() => {
          setFerieModalOpen(false);
          setFerieError("");
        }}
        title="Aggiungi chiusura"
      >
        <FerieCalendar
          onConfirm={handleAddFerie}
          onCancel={() => {
            setFerieModalOpen(false);
            setFerieError("");
          }}
          loading={savingFerie}
          error={ferieError}
          blockedSlots={blockedSlots}
          formatDate={formatDate}
        />
      </Modal>
    </div>
  );
};

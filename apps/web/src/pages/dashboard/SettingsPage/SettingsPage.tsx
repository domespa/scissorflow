import { useState, useEffect } from "react";
import { ClockIcon, PaletteIcon, CheckIcon } from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { shopService } from "@/services/shop.service";
import { useShop } from "@/hooks/useShop";
import { SlotMode } from "@scissorflow/shared";
import type { ShopConfigDTO } from "@scissorflow/shared";

const DAYS = [
  { day: 1, label: "Lunedì" },
  { day: 2, label: "Martedì" },
  { day: 3, label: "Mercoledì" },
  { day: 4, label: "Giovedì" },
  { day: 5, label: "Venerdì" },
  { day: 6, label: "Sabato" },
  { day: 0, label: "Domenica" },
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

// DISPONIBILITÀ DEFAULT
type DayAvailability = {
  id?: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
};

const defaultAvailability = (): DayAvailability => ({
  startTime: "09:00",
  endTime: "18:00",
  isActive: false,
});

export const SettingsPage = () => {
  const { shopId } = useShop();
  const [loading, setLoading] = useState(true);
  const [savingConfig, setSavingConfig] = useState(false);
  const [savingDay, setSavingDay] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [successConfig, setSuccessConfig] = useState(false);

  // STATO DISPONIBILITÀ
  const [availability, setAvailability] = useState<
    Record<number, DayAvailability>
  >(Object.fromEntries(DAYS.map(({ day }) => [day, defaultAvailability()])));

  // STATO CONFIG
  const [config, setConfig] = useState<Partial<ShopConfigDTO>>({
    primaryColor: "#1a1a1a",
    tagline: "",
    showPrices: true,
    slotMode: SlotMode.FIXED,
    slotInterval: 30,
  });

  // CARICA DATI
  useEffect(() => {
    if (!shopId) return;
    loadData();
  }, [shopId]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [availData, configData] = await Promise.all([
        shopService.getAvailability(shopId!),
        shopService.getConfig(shopId!),
      ]);

      // MAPPA DISPONIBILITÀ PER GIORNO
      const mapped: Record<number, DayAvailability> = Object.fromEntries(
        DAYS.map(({ day }) => [day, defaultAvailability()]),
      );
      availData.forEach((a) => {
        mapped[a.dayOfWeek] = {
          id: a.id,
          startTime: a.startTime,
          endTime: a.endTime,
          isActive: a.isActive,
        };
      });
      setAvailability(mapped);
      setConfig(configData);
    } catch {
      setError("Errore durante il caricamento");
    } finally {
      setLoading(false);
    }
  };

  // SALVA DISPONIBILITÀ DI UN GIORNO
  const handleSaveDay = async (day: number) => {
    setSavingDay(day);
    try {
      await shopService.setAvailability(shopId!, {
        dayOfWeek: day,
        startTime: availability[day].startTime,
        endTime: availability[day].endTime,
        isActive: availability[day].isActive,
      });
      await loadData();
    } catch {
      setError("Errore salvataggio orario");
    } finally {
      setSavingDay(null);
    }
  };

  // SALVA CONFIG
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

  // AGGIORNA UN CAMPO DI UN GIORNO
  const updateDay = (day: number, field: string, value: string | boolean) => {
    setAvailability((prev: Record<number, DayAvailability>) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      {/* HEADER */}
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

      {/* SEZIONE ORARI */}
      <Card padding="none">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-800">
          <ClockIcon size={20} weight="duotone" className="text-gray-500" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Orari di apertura
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Configura quando sei disponibile
            </p>
          </div>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {DAYS.map(({ day, label }) => (
            <div key={day} className="flex items-center gap-4 px-5 py-3">
              {/* TOGGLE GIORNO */}
              <button
                onClick={() =>
                  updateDay(day, "isActive", !availability[day].isActive)
                }
                className={`
                  relative w-10 h-5 rounded-full transition-colors shrink-0
                  ${
                    availability[day].isActive
                      ? "bg-gray-900 dark:bg-white"
                      : "bg-gray-200 dark:bg-gray-700"
                  }
                `}
              >
                <span
                  className={`
                  absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white dark:bg-gray-900
                  transition-transform ${availability[day].isActive ? "translate-x-5" : "translate-x-0"}
                `}
                />
              </button>

              {/* NOME GIORNO */}
              <span
                className={`text-sm w-24 shrink-0 ${
                  availability[day].isActive
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-400 dark:text-gray-600"
                }`}
              >
                {label}
              </span>

              {/* ORARI */}
              {availability[day].isActive ? (
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="time"
                    value={availability[day].startTime}
                    onChange={(e) =>
                      updateDay(day, "startTime", e.target.value)
                    }
                    className="text-sm px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                  />
                  <span className="text-gray-400 text-xs">—</span>
                  <input
                    type="time"
                    value={availability[day].endTime}
                    onChange={(e) => updateDay(day, "endTime", e.target.value)}
                    className="text-sm px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                  />
                  <Button
                    size="sm"
                    variant="secondary"
                    loading={savingDay === day}
                    onClick={() => handleSaveDay(day)}
                  >
                    Salva
                  </Button>
                </div>
              ) : (
                <span className="text-xs text-gray-400 dark:text-gray-600">
                  Chiuso
                </span>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* SEZIONE CONFIG */}
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
          {/* TAGLINE */}
          <Input
            label="Tagline"
            placeholder="Il tuo barbiere di fiducia"
            value={config.tagline ?? ""}
            onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
          />

          {/* COLORE */}
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

          {/* SLOT INTERVAL */}
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
                className="text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
              >
                {[10, 15, 20, 30, 45, 60].map((v) => (
                  <option key={v} value={v}>
                    {v} min
                  </option>
                ))}
              </select>
            </div>

            {/* MOSTRA PREZZI */}
            <div className="flex flex-col justify-end">
              <div className="flex items-center justify-between py-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Mostra prezzi
                </p>
                <button
                  onClick={() =>
                    setConfig({ ...config, showPrices: !config.showPrices })
                  }
                  className={`
                    relative w-11 h-6 rounded-full transition-colors
                    ${config.showPrices ? "bg-gray-900 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"}
                  `}
                >
                  <span
                    className={`
                    absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900
                    transition-transform ${config.showPrices ? "translate-x-5" : "translate-x-0"}
                  `}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* SUCCESSO */}
          {successConfig && (
            <div className="px-4 py-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-100 dark:border-green-900">
              <p className="text-sm text-green-600 dark:text-green-400">
                ✅ Configurazione salvata
              </p>
            </div>
          )}

          <Button loading={savingConfig} onClick={handleSaveConfig}>
            Salva configurazione
          </Button>
        </div>
      </Card>
    </div>
  );
};

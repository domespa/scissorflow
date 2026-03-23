import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScissorsIcon,
  PaletteIcon,
  StorefrontIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { authService } from "@/services/auth.service";
import { SlotMode } from "@scissorflow/shared";
import { useAuthStore } from "@/store/auth.store";

// COLORI PREDEFINITI
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

// STEP DEL WIZARD
type Step = "shop" | "config" | "done";

export const OnboardingPage = () => {
  console.log("OnboardingPage rendered");
  const { user, setAuth } = useAuthStore();
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("shop");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    shopName: "",
    shopSlug: "",
    primaryColor: "#1a1a1a",
    tagline: "",
    showPrices: true,
  });

  // GENERA SLUG DAL NOME
  const handleShopNameChange = (name: string) => {
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setForm({ ...form, shopName: name, shopSlug: slug });
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    try {
      const shop = await authService.onboarding({
        shopName: form.shopName,
        shopSlug: form.shopSlug || undefined,
        config: {
          primaryColor: form.primaryColor,
          tagline: form.tagline || undefined,
          showPrices: form.showPrices,
          slotMode: SlotMode.FIXED,
          slotInterval: 30,
        },
      });

      // AGGIORNA LO STORE
      setAuth({ ...user!, shopId: shop.id }, token!);

      setStep("done");
    } catch {
      setError("Errore durante la configurazione. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* LOGO */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <ScissorsIcon
            size={32}
            weight="duotone"
            className="text-gray-900 dark:text-white"
          />
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">
            ScissorFlow
          </span>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {(["shop", "config"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`
                w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium
                ${
                  step === s || step === "done"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                }
              `}
              >
                {i + 1}
              </div>
              {i === 0 && (
                <div
                  className={`w-12 h-0.5 ${
                    step !== "shop"
                      ? "bg-gray-900 dark:bg-white"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* CARD */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
          {/* STEP 1 NOME SHOP */}
          {step === "shop" && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <StorefrontIcon
                    size={20}
                    weight="duotone"
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Il tuo shop
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Come si chiama il tuo barbershop?
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Input
                  label="Nome shop"
                  placeholder="Mario Barbershop"
                  value={form.shopName}
                  onChange={(e) => handleShopNameChange(e.target.value)}
                  required
                />

                <div className="flex flex-col gap-1">
                  <Input
                    label="URL personalizzato"
                    placeholder="mario-barbershop"
                    value={form.shopSlug}
                    onChange={(e) =>
                      setForm({ ...form, shopSlug: e.target.value })
                    }
                  />
                  {form.shopSlug && (
                    <p className="text-xs text-gray-400">
                      scissorflow.com/b/
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {form.shopSlug}
                      </span>
                    </p>
                  )}
                </div>

                <Input
                  label="Tagline (opzionale)"
                  placeholder="Il tuo barbiere di fiducia"
                  value={form.tagline}
                  onChange={(e) =>
                    setForm({ ...form, tagline: e.target.value })
                  }
                />

                <Button
                  className="w-full mt-2"
                  disabled={!form.shopName}
                  onClick={() => setStep("config")}
                >
                  Continua
                </Button>
              </div>
            </>
          )}

          {/* STEP 2 PERSONALIZZAZIONE */}
          {step === "config" && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <PaletteIcon
                    size={20}
                    weight="duotone"
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Personalizza
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Scegli il colore del tuo shop
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {/* COLORI PREDEFINITI */}
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Colore principale
                  </p>
                  <div className="grid grid-cols-8 gap-2">
                    {PRESET_COLORS.map((color) => (
                      <button
                        key={color}
                        onClick={() =>
                          setForm({ ...form, primaryColor: color })
                        }
                        className="relative w-8 h-8 rounded-lg transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                      >
                        {form.primaryColor === color && (
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

                {/* MOSTRA PREZZI */}
                <div className="flex items-center justify-between py-3 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Mostra prezzi
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      I clienti vedono i prezzi dei servizi
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setForm({ ...form, showPrices: !form.showPrices })
                    }
                    className={`
                      relative w-11 h-6 rounded-full transition-colors
                      ${form.showPrices ? "bg-gray-900 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"}
                    `}
                  >
                    <span
                      className={`
                      absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900
                      transition-transform ${form.showPrices ? "translate-x-5" : "translate-x-0"}
                    `}
                    />
                  </button>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setStep("shop")}
                    className="flex-1"
                  >
                    Indietro
                  </Button>
                  <Button
                    loading={loading}
                    onClick={handleSubmit}
                    className="flex-1"
                  >
                    Crea shop
                  </Button>
                </div>
              </div>
            </>
          )}

          {/* STEP 3 DONE */}
          {step === "done" && (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                <CheckIcon
                  size={32}
                  weight="bold"
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Shop creato! 🎉
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Il tuo barbershop è pronto. Ora configura i tuoi servizi e gli
                orari.
              </p>
              <Button className="w-full" onClick={() => navigate("/dashboard")}>
                Vai alla dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScissorsIcon,
  PaletteIcon,
  StorefrontIcon,
  CheckIcon,
  ImageIcon,
  UploadIcon,
  ClockIcon,
  PlusIcon,
  TrashIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ImageCropper } from "@/components/ui/ImageCropper";
import { authService } from "@/services/auth.service";
import { ShopLogo } from "@/components/ui/ShopLogo";
import { cloudinaryService } from "@/services/cloudinary.service";
import { getCroppedImg } from "@/lib/cropImage";
import { SlotMode } from "@scissorflow/shared";
import { useAuthStore } from "@/store/auth.store";
import type { Area } from "react-easy-crop";

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

const DAYS = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];

type Step = "shop" | "config" | "operations" | "done";
type ImageSource = "none" | "preset" | "upload";

type ServiceForm = {
  name: string;
  duration: number;
  price: string;
};

type DayForm = {
  isActive: boolean;
  startTime: string;
  endTime: string;
  breakStart: string;
  breakEnd: string;
  hasBreak: boolean;
};

export const OnboardingPage = () => {
  const { user, setAuth } = useAuthStore();
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<Step>("shop");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // STEP 1
  const [form, setForm] = useState({
    shopName: "",
    shopSlug: "",
    primaryColor: "#1a1a1a",
    tagline: "",
    showPrices: true,
  });

  // STEP 2 - IMMAGINE
  const [imageSource, setImageSource] = useState<ImageSource>("none");
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [uploadedImageSrc, setUploadedImageSrc] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedPreviewUrl, setCroppedPreviewUrl] = useState<string | null>(
    null,
  );
  const [isCropping, setIsCropping] = useState(false);
  const [logoStyle, setLogoStyle] = useState("badge-vintage");

  // STEP 3 - ORARI
  const [days, setDays] = useState<Record<number, DayForm>>(
    Object.fromEntries(
      [0, 1, 2, 3, 4, 5, 6].map((d) => [
        d,
        {
          isActive: d !== 0 && d !== 1, // DOM  E LUN CHIUSO
          startTime: "09:00",
          endTime: "18:00",
          hasBreak: true,
          breakStart: "13:00",
          breakEnd: "14:00",
        },
      ]),
    ),
  );

  // STEP 3 - SERVIZI
  const [services, setServices] = useState<ServiceForm[]>([
    { name: "", duration: 30, price: "" },
  ]);

  const mockupImageUrl =
    imageSource === "preset" ? (selectedPreset ?? null) : croppedPreviewUrl;

  // SLOT INTERVAL PER DURATA PRIMO SERVIZIO INSERITO
  const slotInterval =
    services.length > 0 && services[0].duration > 0 ? services[0].duration : 30;

  const handleShopNameChange = (name: string) => {
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    setForm({ ...form, shopName: name, shopSlug: slug });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError("Immagine troppo grande. Max 5MB.");
      return;
    }
    const blobUrl = URL.createObjectURL(file);
    setUploadedImageSrc(blobUrl);
    setImageSource("upload");
    setSelectedPreset(null);
    setCroppedPreviewUrl(null);
    setIsCropping(true);
    setError("");
  };

  const handleCropComplete = useCallback(
    async (area: Area) => {
      setCroppedAreaPixels(area);
      if (!uploadedImageSrc) return;
      try {
        const croppedFile = await getCroppedImg(uploadedImageSrc, area);
        setCroppedPreviewUrl(URL.createObjectURL(croppedFile));
      } catch {
        /* silenzioso */
      }
    },
    [uploadedImageSrc],
  );

  const handleSelectPreset = (url: string) => {
    setSelectedPreset(url);
    setImageSource("preset");
    setUploadedImageSrc(null);
    setCroppedPreviewUrl(null);
    setIsCropping(false);
    setError("");
  };

  const handleAddService = () => {
    setServices([...services, { name: "", duration: 30, price: "" }]);
  };

  const handleRemoveService = (i: number) => {
    if (services.length === 1) return;
    setServices(services.filter((_, idx) => idx !== i));
  };

  const handleServiceChange = (
    i: number,
    field: keyof ServiceForm,
    value: string | number,
  ) => {
    setServices(
      services.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)),
    );
  };

  const handleSubmit = async () => {
    setError("");

    // VALIDAZIONE SERVIZI
    if (services.every((s) => !s.name.trim())) {
      setError("Aggiungi almeno un servizio.");
      return;
    }

    setLoading(true);
    try {
      let coverImageUrl: string | undefined;
      if (imageSource === "upload" && croppedAreaPixels && uploadedImageSrc) {
        const croppedFile = await getCroppedImg(
          uploadedImageSrc,
          croppedAreaPixels,
        );
        coverImageUrl = await cloudinaryService.uploadImage(croppedFile);
      } else if (imageSource === "preset" && selectedPreset) {
        coverImageUrl = selectedPreset;
      }

      const shop = await authService.onboarding({
        shopName: form.shopName,
        shopSlug: form.shopSlug || undefined,
        config: {
          primaryColor: form.primaryColor,
          tagline: form.tagline || undefined,
          showPrices: form.showPrices,
          slotMode: SlotMode.FIXED,
          slotInterval,
          coverImage: coverImageUrl,
          logoStyle,
          legalMode: "generated",
        },
        availability: [0, 1, 2, 3, 4, 5, 6].map((d) => ({
          dayOfWeek: d,
          startTime: days[d].startTime,
          endTime: days[d].endTime,
          breakStart: days[d].hasBreak ? days[d].breakStart : null,
          breakEnd: days[d].hasBreak ? days[d].breakEnd : null,
          isActive: days[d].isActive,
        })),
        services: services
          .filter((s) => s.name.trim())
          .map((s) => ({
            name: s.name.trim(),
            duration: s.duration,
            price: s.price ? parseFloat(s.price) : undefined,
          })),
      });

      setAuth({ ...user!, shopId: shop.id }, token!);
      setStep("done");
    } catch {
      setError("Errore durante la configurazione. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  // MOCKUP
  const MockupPreview = () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        Anteprima live
      </p>
      <div className="flex flex-col gap-1">
        <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-sm">
          <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <div className="flex-1 mx-1.5 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>
          <div
            className="relative h-20 flex items-end"
            style={{
              background: mockupImageUrl
                ? `url(${mockupImageUrl}) center/cover`
                : `linear-gradient(135deg, ${form.primaryColor} 0%, ${form.primaryColor}cc 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative px-2 pb-1.5 flex items-end gap-1.5">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: form.primaryColor }}
              >
                <ScissorsIcon
                  size={12}
                  weight="duotone"
                  className="text-white"
                />
              </div>
              <div>
                <p className="text-white text-xs font-semibold leading-tight truncate max-w-25">
                  {form.shopName || "Il tuo shop"}
                </p>
                {form.tagline && (
                  <p
                    className="text-white/70 truncate max-w-25"
                    style={{ fontSize: "9px" }}
                  >
                    {form.tagline}
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
                    backgroundColor: form.primaryColor,
                    fontSize: "8px",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-0.5">
              {["L", "M", "M", "G", "V"].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <p className="text-gray-400" style={{ fontSize: "7px" }}>
                    {d}
                  </p>
                  <div className="w-full h-2.5 bg-green-100 rounded" />
                  <div className="w-full h-2.5 bg-green-100 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center">Desktop</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div
          className="rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-900"
          style={{ width: "80px" }}
        >
          <div className="bg-gray-900 h-3 flex items-center justify-center">
            <div className="w-6 h-1 bg-gray-700 rounded-full" />
          </div>
          <div
            className="relative flex items-end"
            style={{
              height: "56px",
              background: mockupImageUrl
                ? `url(${mockupImageUrl}) center/cover`
                : `linear-gradient(135deg, ${form.primaryColor} 0%, ${form.primaryColor}cc 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative px-1.5 pb-1 flex items-end gap-1">
              <div
                className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                style={{ backgroundColor: form.primaryColor }}
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
                {form.shopName || "Shop"}
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
                    backgroundColor: form.primaryColor,
                    fontSize: "6px",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-0.5">
              {["L", "M", "M", "G", "V"].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <p className="text-gray-400" style={{ fontSize: "5px" }}>
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
        <p className="text-xs text-gray-400">Mobile</p>
      </div>
    </div>
  );

  const totalSteps = 3;
  const currentStepIndex =
    step === "shop" ? 0 : step === "config" ? 1 : step === "operations" ? 2 : 3;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
      <div
        className={`w-full ${step === "config" ? "max-w-4xl" : step === "operations" ? "max-w-2xl" : "max-w-md"}`}
      >
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

        {/* TORNA AL LOGIN */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            onClick={() => {
              useAuthStore.getState().logout();
              navigate("/login");
            }}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Hai già un account?{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              Accedi
            </span>
          </button>
        </div>

        {/* STEP INDICATOR */}
        {step !== "done" && (
          <div className="flex items-center justify-center gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                    currentStepIndex > i
                      ? "bg-green-500 text-white"
                      : currentStepIndex === i
                        ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                        : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                  }`}
                >
                  {currentStepIndex > i ? (
                    <CheckIcon size={14} weight="bold" />
                  ) : (
                    i + 1
                  )}
                </div>
                {i < 2 && (
                  <div
                    className={`w-12 h-0.5 ${currentStepIndex > i ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* STEP 1 - SHOP */}
        {step === "shop" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 p-6 shadow-sm">
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
                <p className="text-sm text-gray-600 dark:text-gray-300">
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
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              />
              <Button
                className="w-full mt-2"
                disabled={!form.shopName}
                onClick={() => setStep("config")}
              >
                Continua
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2 - PERSONALIZZAZIONE */}
        {step === "config" && (
          <div className="flex flex-col-reverse md:flex-row md:items-start gap-4">
            <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 p-6 shadow-sm flex flex-col gap-5">
              <div className="flex items-center gap-3">
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
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Dai uno stile al tuo shop
                  </p>
                </div>
              </div>

              {/* COLORI */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Colore principale
                </p>
                <div className="grid grid-cols-8 gap-2">
                  {PRESET_COLORS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setForm({ ...form, primaryColor: color })}
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

              {/* LOGO */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Logo shop
                </p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { id: "badge-vintage", label: "Badge" },
                    { id: "hex-scissors", label: "Forbici" },
                    { id: "shield-razor", label: "Rasoio" },
                    { id: "circle-comb", label: "Pettine" },
                    { id: "square-scissors", label: "Forbici 2" },
                    { id: "hex-razor", label: "Rasoio 2" },
                  ].map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setLogoStyle(style.id)}
                      className={`flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all ${
                        logoStyle === style.id
                          ? "border-gray-900 dark:border-white"
                          : "border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                      <ShopLogo
                        shopName={form.shopName || "Shop"}
                        primaryColor={form.primaryColor}
                        logoStyle={style.id}
                        size={40}
                        radius={8}
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {style.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* ALERT POLICY */}
                <div className="flex items-start gap-2.5 px-3 py-2.5 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-xl">
                  <ShieldCheckIcon
                    size={16}
                    className="text-blue-500 shrink-0 mt-0.5"
                  />
                  <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                    La <strong>Privacy & Cookie Policy</strong> verrà generata
                    automaticamente da ScissorFlow. Se desideri caricare la tua,
                    potrai farlo dal pannello <strong>Impostazioni</strong> dopo
                    la registrazione.
                  </p>
                </div>
              </div>

              {/* IMMAGINE HERO */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Immagine hero
                </p>
                <div className="flex gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      setImageSource("preset");
                      setUploadedImageSrc(null);
                      setCroppedPreviewUrl(null);
                      setIsCropping(false);
                    }}
                    className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-all ${
                      imageSource === "preset" || imageSource === "none"
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    Scegli preset
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-all flex items-center justify-center gap-1.5 ${
                      imageSource === "upload"
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <UploadIcon size={12} />
                    Carica la tua
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>

                {(imageSource === "preset" || imageSource === "none") && (
                  <div className="grid grid-cols-3 gap-2">
                    {PRESET_IMAGES.map((img) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => handleSelectPreset(img.url)}
                        className={`relative rounded-lg overflow-hidden aspect-video transition-all ${
                          selectedPreset === img.url
                            ? "ring-2 ring-gray-900 dark:ring-white"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img.thumb}
                          alt={img.label}
                          className="w-full h-full object-cover"
                        />
                        {selectedPreset === img.url && (
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
                        setImageSource("none");
                        setSelectedPreset(null);
                      }}
                      className={`relative rounded-lg overflow-hidden aspect-video border-2 border-dashed transition-all flex items-center justify-center ${
                        imageSource === "none"
                          ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800"
                          : "border-gray-200 dark:border-gray-700 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <div className="text-center">
                        <ImageIcon
                          size={16}
                          className="text-gray-400 mx-auto mb-0.5"
                        />
                        <p className="text-xs text-gray-400">Solo colore</p>
                      </div>
                    </button>
                  </div>
                )}

                {imageSource === "upload" && uploadedImageSrc && isCropping && (
                  <div className="flex flex-col gap-2">
                    <ImageCropper
                      imageSrc={uploadedImageSrc}
                      onCropComplete={handleCropComplete}
                    />
                    <p className="text-xs text-gray-400 text-center">
                      Trascina per posizionare · Scorri per zoomare
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  onClick={() => setStep("shop")}
                  className="flex-1"
                >
                  Indietro
                </Button>
                <Button
                  onClick={() => setStep("operations")}
                  className="flex-1"
                >
                  Continua
                </Button>
              </div>
            </div>

            <div className="md:w-64 md:shrink-0 md:sticky md:top-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 p-4 shadow-sm">
              <MockupPreview />
            </div>
          </div>
        )}

        {/* STEP 3 - OPERATIVITÀ */}
        {step === "operations" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 p-6 shadow-sm flex flex-col gap-6">
            {/* ORARI */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <ClockIcon
                    size={20}
                    weight="duotone"
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                    Orari di apertura
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Quando sei aperto al pubblico?
                  </p>
                </div>
              </div>

              {/* GIORNI */}
              <div className="grid grid-cols-7 gap-1.5 mb-4">
                {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() =>
                      setDays({
                        ...days,
                        [d]: { ...days[d], isActive: !days[d].isActive },
                      })
                    }
                    className={`py-2 rounded-lg text-xs font-medium transition-all ${
                      days[d].isActive
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600"
                    }`}
                  >
                    {DAYS[d]}
                  </button>
                ))}
              </div>

              {/* ORARI APERTURA/CHIUSURA */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Apertura
                  </label>
                  <input
                    type="time"
                    value={days[1].startTime}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDays(
                        Object.fromEntries(
                          [0, 1, 2, 3, 4, 5, 6].map((d) => [
                            d,
                            { ...days[d], startTime: val },
                          ]),
                        ),
                      );
                    }}
                    className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Chiusura
                  </label>
                  <input
                    type="time"
                    value={days[1].endTime}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDays(
                        Object.fromEntries(
                          [0, 1, 2, 3, 4, 5, 6].map((d) => [
                            d,
                            { ...days[d], endTime: val },
                          ]),
                        ),
                      );
                    }}
                    className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                  />
                </div>
              </div>

              {/* PAUSA PRANZO */}
              <div className="border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Pausa pranzo
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const hasBreak = !days[1].hasBreak;
                      setDays(
                        Object.fromEntries(
                          [0, 1, 2, 3, 4, 5, 6].map((d) => [
                            d,
                            { ...days[d], hasBreak },
                          ]),
                        ),
                      );
                    }}
                    className={`relative w-11 h-6 rounded-full transition-colors ${days[1].hasBreak ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"}`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 transition-transform ${days[1].hasBreak ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </button>
                </div>
                {days[1].hasBreak && (
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        Inizio pausa
                      </label>
                      <input
                        type="time"
                        value={days[1].breakStart}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDays(
                            Object.fromEntries(
                              [0, 1, 2, 3, 4, 5, 6].map((d) => [
                                d,
                                { ...days[d], breakStart: val },
                              ]),
                            ),
                          );
                        }}
                        className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        Fine pausa
                      </label>
                      <input
                        type="time"
                        value={days[1].breakEnd}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDays(
                            Object.fromEntries(
                              [0, 1, 2, 3, 4, 5, 6].map((d) => [
                                d,
                                { ...days[d], breakEnd: val },
                              ]),
                            ),
                          );
                        }}
                        className="text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* MOSTRA PREZZI */}
              <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Mostra prezzi
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    I clienti vedono i prezzi dei servizi
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setForm({ ...form, showPrices: !form.showPrices })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${form.showPrices ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 transition-transform ${form.showPrices ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>
            </div>

            {/* SERVIZI */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <ScissorsIcon
                    size={20}
                    weight="duotone"
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                    Servizi
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Aggiungi i servizi che offri
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"
                  >
                    <div className="flex-1 grid grid-cols-3 gap-2">
                      <input
                        placeholder="es. Taglio"
                        value={service.name}
                        onChange={(e) =>
                          handleServiceChange(i, "name", e.target.value)
                        }
                        className="col-span-1 text-sm px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white placeholder:text-gray-400"
                      />
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="30"
                          min={5}
                          max={240}
                          value={service.duration}
                          onChange={(e) =>
                            handleServiceChange(
                              i,
                              "duration",
                              parseInt(e.target.value) || 30,
                            )
                          }
                          className="w-full text-sm px-3 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                          min
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                          €
                        </span>
                        <input
                          type="number"
                          placeholder="0"
                          min={0}
                          value={service.price}
                          onChange={(e) =>
                            handleServiceChange(i, "price", e.target.value)
                          }
                          className="w-full text-sm px-3 py-2 pl-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-gray-900 dark:focus:border-white"
                        />
                      </div>
                    </div>
                    {services.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveService(i)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors shrink-0"
                      >
                        <TrashIcon size={16} />
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddService}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
                >
                  <PlusIcon size={16} />
                  Aggiungi servizio
                </button>
              </div>

              {/* SCRITTA DINAMICA SLOT INTERVAL */}
              {services.some((s) => s.name.trim()) && (
                <div className="mt-3 flex items-center gap-2 px-3 py-2.5 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-lg">
                  <CalendarIcon size={14} className="text-blue-500 shrink-0" />
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    ⏱ Gli slot del calendario saranno impostati a{" "}
                    <strong>{slotInterval} minuti</strong>
                    <span className="text-blue-500">
                      Puoi modificarlo nelle Impostazioni.
                    </span>
                  </p>
                </div>
              )}
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => setStep("config")}
                className="flex-1"
              >
                Indietro
              </Button>
              <Button
                loading={loading}
                onClick={handleSubmit}
                className="flex-1"
              >
                {loading ? "Creazione..." : "Crea shop"}
              </Button>
            </div>
          </div>
        )}

        {/* DONE */}
        {step === "done" && (
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 p-6 shadow-sm text-center">
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
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Il tuo barbershop è pronto. Puoi gestire tutto dal tuo pannello.
            </p>
            <Button className="w-full" onClick={() => navigate("/dashboard")}>
              Vai alla dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

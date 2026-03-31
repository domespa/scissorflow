import { z } from "zod";

// SCHEMA REGISTRAZIONE
export const registerSchema = z.object({
  email: z.email("Email non valida"),
  password: z.string().min(8, "La password deve essere di almeno 8 caratteri"),
  firstName: z.string().min(2, "Il nome deve essere di almeno 2 caratteri"),
  lastName: z.string().min(2, "Il cognome deve essere di almeno 2 caratteri"),
});

// SCHEMA LOGIN
export const loginSchema = z.object({
  email: z.email("Email non valida"),
  password: z.string().min(1, "La password è obbligatoria"),
});

// SCHEMA ONBOARDING
export const onboardingSchema = z.object({
  shopName: z
    .string()
    .min(2, "Il nome dello shop deve essere di almeno 2 caratteri"),
  shopSlug: z
    .string()
    .min(2)
    .regex(
      /^[a-z0-9-]+$/,
      "Lo slug può contenere solo lettere minuscole, numeri e trattini",
    )
    .optional(),
  config: z.object({
    primaryColor: z
      .string()
      .regex(/^#[0-9A-Fa-f]{6}$/, "Colore hex non valido"),
    coverImage: z.url().optional(),
    logo: z.url().optional(),
    tagline: z.string().max(100).optional(),
    showPrices: z.boolean(),
  }),
  // ORARI
  availability: z
    .array(
      z.object({
        dayOfWeek: z.number().min(0).max(6),
        startTime: z.string(),
        endTime: z.string(),
        breakStart: z.string().nullable().optional(),
        breakEnd: z.string().nullable().optional(),
        isActive: z.boolean(),
      }),
    )
    .optional(),
  // SERVIZI
  services: z
    .array(
      z.object({
        name: z.string().min(1),
        duration: z.number().min(5),
        price: z.number().min(0).optional(),
      }),
    )
    .optional(),
});

// USIAMO .infer DI ZOD PER DEFINIRIRE I TIPI - SI AGGIORNANO IN AUTOMATICO SE CAMBIA LO SCHEMA
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type OnboardingInput = z.infer<typeof onboardingSchema>;

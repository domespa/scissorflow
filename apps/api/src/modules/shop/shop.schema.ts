import { z } from "zod";

// SCHEMA PER AGGIORNARE LO SHOP
export const updateConfigSchema = z.object({
  primaryColor: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, "Il colore deve essere un hex valido")
    .optional(),
  coverImage: z.url().optional().nullable(),
  logo: z.url().optional().nullable(),
  tagline: z.string().max(100).optional().nullable(),
  showPrices: z.boolean().optional(),
  slotMode: z.enum(["FIXED", "DYNAMIC"]).optional(),
  slotInterval: z.number().min(5).max(120).optional(),
});

// SCHEMA CREAZIONE/MODIFICA SERVIZIO
export const upsertServiceSchema = z.object({
  name: z.string().min(2, "Il nome deve essere di almeno due caratteri"),
  duration: z
    .number()
    .min(10, "La durata minima è 10 minuti")
    .max(120, "La durata massima è di 2 ore"),
  price: z.number().min(0).optional(),
  isActive: z.boolean().default(true),
});

// SCHEMA ORARI DISPONIBILI
export const availabilitySchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  startTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato orario non valido"),
  endTime: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato orario non valido"),
  breakStart: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .optional()
    .nullable(),
  breakEnd: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .optional()
    .nullable(),
  isActive: z.boolean().default(true),
});

// SCHEMA SLOT SBLOCCATO
export const blockedSlotSchema = z.object({
  startAt: z.iso.datetime("Data non valita"),
  endAt: z.iso.datetime("Data non valida"),
  reason: z.string().optional(),
});

// INFERENZA TIPI
export type UpdateConfigInput = z.infer<typeof updateConfigSchema>;
export type UpsertServiceInput = z.infer<typeof upsertServiceSchema>;
export type AvailabilityInput = z.infer<typeof availabilitySchema>;
export type BlockedSlotInput = z.infer<typeof blockedSlotSchema>;

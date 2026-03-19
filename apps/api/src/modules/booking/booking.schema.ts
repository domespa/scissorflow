import { z } from "zod";

// SCHEMA DEL CLIENTE CHE BLOCCA UNO SLOT
export const lockSlotSchema = z.object({
  shopId: z.string().min(1, "ShopId obbligatorio"),
  serviceId: z.string().min(1, "ServiceId obbligatorio"),
  startAt: z.iso.datetime("Data non valida"),
  customer: z
    .object({
      firstName: z.string().min(2, "Il nome deve essere di almeno 2 caratteri"),
      lastName: z
        .string()
        .min(2, "Il cognome deve essere di almeno 2 caratteri"),
      email: z.email("Email non valida").optional(),
      phone: z.string().min(9, "Numero non valido").optional(),
    })
    .refine((data) => data.email || data.phone, "Email o telefono obbligatori"),
  recurrence: z
    .object({
      type: z.enum(["WEEKLY", "MONTHLY"]),
      repeat: z.number().min(1).max(12),
    })
    .optional(),
});

// SCHEMA CONFERMA OTP
export const confirmOtpSchema = z.object({
  bookingId: z.string().min(1, "BookingId obbligatorio"),
  otpCode: z.string().length(6, "Il codice OTP deve essere di 6 cifre"),
});

// SCHEMA PER CANCELLAZIONE
export const cancelBookingSchema = z.object({
  bookingId: z.string().min(1, "BookingId obbligatorio"),
});

// SCHEMA PER OTTENERE SLOT DISPONIBILI
export const getMonthSlotsSchema = z.object({
  shopId: z.string().min(1, "ShopId obbligatorio"),
  serviceId: z.string().min(1, "ServiceId obbligatorio"),
  month: z
    .string()
    .regex(
      /^\d{4}-\d{2}$/,
      "Formato mese non valido - usa YYYY-MM es. 2026-03",
    ),
});

// INFIRENZ TYPES
export type LockSlotInput = z.infer<typeof lockSlotSchema>;
export type ConfirmOtpInput = z.infer<typeof confirmOtpSchema>;
export type CancelBookingInput = z.infer<typeof cancelBookingSchema>;
export type GetMonthSlotsInput = z.infer<typeof getMonthSlotsSchema>;

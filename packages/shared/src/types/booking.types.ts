// STATI POSSIBILI CHE PUò AVERE UNA PRENOTAZIONE
export enum BookingStatus {
  PENDING = "PENDING", // SOFTLOCK ATTIVO, DA CONFERMARE OTP
  CONFIRMED = "CONFIRMED", // OTP CONFERMATO, PRENOTAZIONE ATTIVA
  COMPLETED = "COMPLETED", // APPUNTAMENTO AVVENUTO
  CANCELLED = "CANCELLED", // APPUNTAMENTO CANCELLATO O ANNULLATO DAL BARBIERE
  NO_SHOW = "NO_SHOW", // CLIENTE NON SI è PRESENTATO
  EXPIRED = "EXPIRED", // OTP SCADUTO, SLOTO TORNATO LIBERO
}

// TIPO RICORRENZA
export type RecurrenceType = "WEEKLY" | "MONTHLY";

// DATI DELLA PRENOTAZIONE CHE COMUNICANO FE E BE
export interface BookingDTO {
  id: string;
  shopId: string;
  customerId: string;
  serviceId: string;
  startAt: string;
  endAt: string;
  status: BookingStatus;
  recurrenceGroupId?: string;
  createdAt: string;
}

// DATI CHE IL CLIENTE COMPILA QUANDO BLOCCA SLOT
export interface LockSlotDTO {
  shopId: string;
  serviceId: string;
  startAt: string;
  customer: {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
  };
  recurrence?: {
    type: RecurrenceType;
    repeat: number;
  };
}

// CONFERMA OTP
export interface ConfirmBookingOTP {
  bookingId: string;
  otpCode: string;
}

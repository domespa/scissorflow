import { create } from "zustand";

interface BookingState {
  // SLOT SELEZIONATO DEL CLIENTE
  selectedDate: string | null;
  selectedTime: string | null;
  selectedServiceId: string | null;

  // CONTDOWN SOFTLOCK
  lockExpiresAt: string | null;
  pendingBookingId: string | null;

  // AZIONI
  selectSlot: (date: string, time: string, serviceId: string) => void;
  setLock: (bookingId: string, expiresAt: string) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedDate: null,
  selectedTime: null,
  selectedServiceId: null,
  lockExpiresAt: null,
  pendingBookingId: null,

  selectSlot: (date, time, serviceId) =>
    set({
      selectedDate: date,
      selectedTime: time,
      selectedServiceId: serviceId,
    }),

  setLock: (bookingId, expiresAt) =>
    set({
      pendingBookingId: bookingId,
      lockExpiresAt: expiresAt,
    }),

  clearBooking: () =>
    set({
      selectedDate: null,
      selectedTime: null,
      selectedServiceId: null,
      lockExpiresAt: null,
      pendingBookingId: null,
    }),
}));

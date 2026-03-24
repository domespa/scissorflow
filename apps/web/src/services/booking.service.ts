import { api } from "./api";
import type {
  LockSlotDTO,
  ConfirmBookingOTP,
  BookingWithDetailsDTO,
} from "@scissorflow/shared";

type SlotWithStatus = {
  time: string;
  status: "free" | "pending" | "confirmed";
};

type TimelineSlot = {
  time: string;
  endTime: string;
  status: "free" | "pending" | "confirmed";
  booking?: {
    id: string;
    customerName: string;
    serviceName: string;
    duration: number;
    price: number | null;
  };
};

export const bookingService = {
  // SLOTS MENSILI
  async getMonthSlots(
    shopId: string,
    serviceId: string,
    month: string,
  ): Promise<Record<string, SlotWithStatus[]>> {
    const response = await api.get("/bookings/slots", {
      params: { shopId, serviceId, month },
    });
    return response.data;
  },

  // LOCK SLOT
  async lockSlot(data: LockSlotDTO): Promise<{
    otpCode: string;
    expiresAt: string;
    bookingId: string;
    customer: { firstName: string; email: string | null; phone: string | null };
  }> {
    const response = await api.post("/bookings/lock", data);
    return response.data;
  },

  // CONFERMA OTP
  async confirmOtp(data: ConfirmBookingOTP): Promise<void> {
    await api.post("/bookings/confirm", data);
  },

  // CANCELLA PRENOTAZIONE
  async cancelBooking(bookingId: string): Promise<void> {
    await api.post("/bookings/cancel", { bookingId });
  },

  // TROVA PRENOTAZIONE GIORNO
  async getDayBookings(date: string): Promise<BookingWithDetailsDTO[]> {
    const response = await api.get("/bookings/day", { params: { date } });
    return response.data;
  },

  // TROVA PRENOTAZIONE MESE
  async getMonthBookings(
    year: number,
    month: number,
  ): Promise<BookingWithDetailsDTO[]> {
    const response = await api.get("/bookings/month", {
      params: { year, month },
    });
    return response.data;
  },

  // TIMELINE GIORNALIERA
  async getDayTimeline(date: string): Promise<TimelineSlot[]> {
    const response = await api.get("/bookings/timeline", { params: { date } });
    return response.data;
  },

  // DETTAGLI PRENOTAZIONE PUBBLICA
  async getPublicBooking(bookingId: string) {
    const response = await api.get(`/bookings/public/${bookingId}`);
    return response.data;
  },
};

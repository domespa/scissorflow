import { api } from "./api";
import type { LockSlotDTO, ConfirmBookingOTP } from "@scissorflow/shared";

type SlotWithStatus = {
  time: string;
  status: "free" | "pending" | "confirmed";
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
};

import cron from "node-cron";
import { bookingRepository } from "../modules/booking/booking.repository";
import { io } from "@/server";

// OGNI MINUTO - LIBERA SLOT CON OTP SCADUTO
export const expireBookingsJob = cron.createTask("* * * * *", async () => {
  try {
    const expired = await bookingRepository.findExpiredBookings();

    for (const booking of expired) {
      await bookingRepository.updateStatus(booking.id, "EXPIRED");

      // EMETTE EVENTO WEBSOCKET QUANDO TORNA DISPONIBILE
      io.to(booking.shopId).emit("slot:expired", {
        shopId: booking.shopId,
        startAt: booking.startAt.toISOString(),
        endAt: booking.endAt.toISOString(),
      });
    }

    if (expired.length > 0) {
      console.log(`⏰ ${expired.length} slot scaduti liberati`);
    }
  } catch (error) {
    console.error("❌ Errore job expireBookings:", error);
  }
});

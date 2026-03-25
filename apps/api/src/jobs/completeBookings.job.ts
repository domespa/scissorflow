import cron from "node-cron";
import { bookingRepository } from "../modules/booking/booking.repository";

// OGNI ORA METTI COMPLETATE QUELLE VECCHIE
export const completeBookingsJob = cron.createTask(
  "0 * * * *",
  async () => {
    try {
      const toComplete = await bookingRepository.findBookingsToComplete();

      for (const booking of toComplete) {
        await bookingRepository.updateStatus(booking.id, "COMPLETED");
      }

      if (toComplete.length > 0) {
        console.log(
          `✅ ${toComplete.length} prenotazioni marcate come completate`,
        );
      }
    } catch (error) {
      console.error("❌ Errore job completeBookings:", error);
    }
  },
  { timezone: "Europe/Rome" },
);

import cron from "node-cron";
import { bookingRepository } from "../modules/booking/booking.repository";
import { notificationService } from "../modules/notification/notification.service";
import { env } from "@/config/env";

// OGNI ORA MANDA REMINDER
export const sendRemindersJob = cron.createTask("0 * * * *", async () => {
  try {
    // REMINDER 24 ORE PRIMA
    const bookings24h = await bookingRepository.findBookingsForReminder(24);
    for (const booking of bookings24h) {
      if (booking.customer.email) {
        await notificationService.sendReminder({
          to: booking.customer.email,
          firstName: booking.customer.firstName,
          shopName: booking.shop.name,
          serviceName: booking.service.name,
          startAt: booking.startAt,
          cancelUrl: `${env.CLIENT_URL}/cancel/${booking.id}`,
          hoursUntil: 24,
        });
        await bookingRepository.markReminderSent(booking.id);
      }
    }

    // REMINDER 2 ORE PRIMA
    const bookings2h = await bookingRepository.findBookingsForReminder(2);
    for (const booking of bookings2h) {
      if (booking.customer.email) {
        await notificationService.sendReminder({
          to: booking.customer.email,
          firstName: booking.customer.firstName,
          shopName: booking.shop.name,
          serviceName: booking.service.name,
          startAt: booking.startAt,
          cancelUrl: `${env.CLIENT_URL}/cancel/${booking.id}`,
          hoursUntil: 2,
        });
        await bookingRepository.markReminderSent(booking.id);
      }
    }

    if (bookings24h.length + bookings2h.length > 0) {
      console.log(
        `📧 ${bookings24h.length} reminder 24h + ${bookings2h.length} reminder 2h inviati`,
      );
    }
  } catch (error) {
    console.error("❌ Errore job sendReminders:", error);
  }
});

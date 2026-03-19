import cron from "node-cron";
import { prisma } from "@/config/database";
import { notificationService } from "../modules/notification/notification.service";

// OGNI GIORNO ALLE 8:00 RIEPILOGO AL BARBIERE
export const dailySummaryJob = cron.createTask("0 8 * * *", async () => {
  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    // TROVA TUTTI GLI SHOP
    const shops = await prisma.shop.findMany({
      include: {
        users: {
          where: { role: "OWNER" },
          include: { user: true },
        },
        bookings: {
          where: {
            startAt: { gte: startOfDay, lte: endOfDay },
            status: "CONFIRMED",
          },
          include: {
            customer: true,
            service: true,
          },
          orderBy: { startAt: "asc" },
        },
      },
    });

    for (const shop of shops) {
      const owner = shop.users[0]?.user;
      if (!owner?.email) continue;

      const bookings = shop.bookings.map((b) => ({
        customerName: `${b.customer.firstName} ${b.customer.lastName}`,
        serviceName: b.service.name,
        time: b.startAt.toLocaleTimeString("it-IT", {
          timeZone: "Europe/Rome",
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));

      await notificationService.sendDailySummary({
        to: owner.email,
        shopName: shop.name,
        date: today,
        bookings,
      });
    }

    console.log(`📋 Riepilogo giornaliero inviato a ${shops.length} shop`);
  } catch (error) {
    console.error("❌ Errore job dailySummary:", error);
  }
});

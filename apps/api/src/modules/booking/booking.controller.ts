import type { Request, Response } from "express";
import { bookingService } from "./booking.service";
import { bookingRepository } from "./booking.repository";
import {
  lockSlotSchema,
  confirmOtpSchema,
  cancelBookingSchema,
  getMonthSlotsSchema,
} from "./booking.schema";

// UTILITY PER ESTRARRE PARAMS COME STRINGA
const getParam = (param: string | string[]): string => {
  return Array.isArray(param) ? param[0] : param;
};

export const bookingController = {
  // =========================================
  //          SLOTS MENSILI DISPONIBILI
  // =========================================
  async getMonthSlots(req: Request, res: Response) {
    const result = getMonthSlotsSchema.safeParse(req.query);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const data = await bookingService.getMonthSlots(result.data);
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "SHOP_NOT_FOUND") {
          res.status(404).json({ message: "Shop non trovato" });
          return;
        }
        if (error.message === "SERVICE_NOT_FOUND") {
          res.status(404).json({ message: "Servizio non trovato" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //              LOCK SLOT
  // =========================================
  async lockSlot(req: Request, res: Response) {
    const result = lockSlotSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const data = await bookingService.lockSlot(result.data);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "CUSTOMER_ALREADY_HAS_BOOKING") {
          res.status(409).json({ message: "Hai già una prenotazione attiva" });
          return;
        }
        if (error.message === "SERVICE_NOT_FOUND") {
          res.status(404).json({ message: "Servizio non trovato" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //              CONFERMA OTP
  // =========================================
  async confirmOtp(req: Request, res: Response) {
    const result = confirmOtpSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const data = await bookingService.confirmOtp(result.data);
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "BOOKING_NOT_FOUND") {
          res.status(404).json({ message: "Prenotazione non trovata" });
          return;
        }
        if (error.message === "BOOKING_NOT_PENDING") {
          res
            .status(409)
            .json({ message: "Prenotazione non in attesa di conferma" });
          return;
        }
        if (error.message === "OTP_EXPIRED") {
          res.status(410).json({ message: "Codice OTP scaduto" });
          return;
        }
        if (error.message === "OTP_INVALID") {
          res.status(422).json({ message: "Codice OTP non valido" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //              CONFERMA SENZA OTP
  // =========================================
  async confirmBookingAdmin(req: Request, res: Response) {
    try {
      const { bookingId } = req.body;
      await bookingService.confirmBookingAdmin(bookingId);
      res.status(200).json({ message: "Prenotazione confermata" });
    } catch (error) {
      if (error instanceof Error && error.message === "BOOKING_NOT_FOUND") {
        res.status(404).json({ message: "Prenotazione non trovata" });
        return;
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //           CANCELLA PRENOTAZIONE
  // =========================================
  async cancelBooking(req: Request, res: Response) {
    const result = cancelBookingSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const { bookingId } = result.data;
      await bookingService.cancelBooking(bookingId);
      res.status(200).json({ message: "Prenotazione cancellata" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "BOOKING_NOT_FOUND") {
          res.status(404).json({ message: "Prenotazione non trovata" });
          return;
        }
        if (error.message === "CANCELLATION_NOT_ALLOWED") {
          res.status(409).json({
            message:
              "Cancellazione non consentita - meno di 2 ore all'appuntamento",
          });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //           TROVA PRENOTAZIONE
  // =========================================
  async getDayBookings(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const date =
        getParam(req.query.date as string) ??
        new Date().toISOString().slice(0, 10);
      const data = await bookingService.getDayBookings(shopId, date);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async getMonthBookings(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const year = Number(req.query.year) || new Date().getFullYear();
      const month = Number(req.query.month) || new Date().getMonth() + 1;
      const data = await bookingService.getMonthBookings(shopId, year, month);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async getDayTimeline(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const date =
        getParam(req.query.date as string) ??
        new Date().toISOString().slice(0, 10);
      const data = await bookingService.getDayTimeline(shopId, date);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //           DETTAGLI PRENOTAZIONE
  // =========================================
  async getPublicBooking(req: Request, res: Response) {
    try {
      const bookingId = getParam(req.params.bookingId);
      const data = await bookingService.getPublicBooking(bookingId);
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error && error.message === "BOOKING_NOT_FOUND") {
        res.status(404).json({ message: "Prenotazione non trovata" });
        return;
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //              ANALYTICS
  // =========================================
  async getAnalytics(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const now = new Date();
      const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

      const bookings = await bookingRepository.findBookingsByShopAndDateRange(
        shopId,
        sixMonthsAgo,
        now,
      );

      // PRENOTAZIONI PER MESE
      const byMonth: Record<
        string,
        { month: string; bookings: number; revenue: number }
      > = {};
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
        const label = d.toLocaleDateString("it-IT", {
          month: "short",
          year: "2-digit",
        });
        byMonth[key] = { month: label, bookings: 0, revenue: 0 };
      }

      // PRENOTAZIONI PER GIORNO SETTIMANA
      const DAYS = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
      const byDayOfWeek = DAYS.map((d) => ({ day: d, bookings: 0 }));

      // SERVIZI PIÙ RICHIESTI
      const byService: Record<
        string,
        { name: string; count: number; revenue: number }
      > = {};

      // STATS MESE CORRENTE
      const thisMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
      let thisMonthBookings = 0;
      let thisMonthRevenue = 0;
      let noShows = 0;
      let totalConfirmed = 0;

      for (const b of bookings) {
        const date = new Date(b.startAt);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

        // MESE
        if (
          byMonth[key] &&
          (b.status === "CONFIRMED" || b.status === "COMPLETED")
        ) {
          byMonth[key].bookings++;
          byMonth[key].revenue += b.service.price ?? 0;
        }

        // GIORNO SETTIMANA
        if (b.status === "CONFIRMED" || b.status === "COMPLETED") {
          byDayOfWeek[date.getDay()].bookings++;
        }

        // SERVIZI
        if (b.status === "CONFIRMED" || b.status === "COMPLETED") {
          if (!byService[b.serviceId]) {
            byService[b.serviceId] = {
              name: b.service.name,
              count: 0,
              revenue: 0,
            };
          }
          byService[b.serviceId].count++;
          byService[b.serviceId].revenue += b.service.price ?? 0;
        }

        // QUESTO MESE
        if (key === thisMonthKey) {
          if (b.status === "CONFIRMED" || b.status === "COMPLETED") {
            thisMonthBookings++;
            thisMonthRevenue += b.service.price ?? 0;
            totalConfirmed++;
          }
          if (b.status === "NO_SHOW") noShows++;
        }
      }

      const noShowRate =
        totalConfirmed + noShows > 0
          ? Math.round((noShows / (totalConfirmed + noShows)) * 100)
          : 0;

      res.status(200).json({
        thisMonth: {
          bookings: thisMonthBookings,
          revenue: thisMonthRevenue,
          noShowRate,
        },
        byMonth: Object.values(byMonth),
        byDayOfWeek,
        topServices: Object.values(byService)
          .sort((a, b) => b.count - a.count)
          .slice(0, 5),
      });
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //              NO SHOW
  // =========================================
  async markNoShow(req: Request, res: Response) {
    try {
      const { bookingId } = req.body;
      await bookingService.markNoShow(bookingId);
      res.status(200).json({ message: "No-show registrato" });
    } catch (error) {
      if (error instanceof Error && error.message === "BOOKING_NOT_FOUND") {
        res.status(404).json({ message: "Prenotazione non trovata" });
        return;
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async undoNoShow(req: Request, res: Response) {
    try {
      const { bookingId } = req.body;
      await bookingService.undoNoShow(bookingId);
      res.status(200).json({ message: "No-show annullato" });
    } catch (error) {
      if (error instanceof Error && error.message === "BOOKING_NOT_FOUND") {
        res.status(404).json({ message: "Prenotazione non trovata" });
        return;
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================
};

import type { Request, Response } from "express";
import { bookingService } from "./booking.service";
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
          res.status(401).json({ message: "Codice OTP non valido" });
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
};

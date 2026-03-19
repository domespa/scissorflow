import { Router } from "express";
import { bookingController } from "./booking.controller";

const router = Router();

// =========================================
//              ROTTE PUBBLICHE
// =========================================

// GET /api/bookings/slots?shopId=xxx&serviceId=yyy&month=2026-03
router.get("/slots", bookingController.getMonthSlots);

// POST /api/bookings/lock - CLIENTE BLOCCA SLOT
router.post("/lock", bookingController.lockSlot);

// POST /api/bookings/confirm - CLIENTE CONFERMA OTP
router.post("/confirm", bookingController.confirmOtp);

// POST /api/bookings/cancel - CLIENTE CANCELLA
router.post("/cancel", bookingController.cancelBooking);

export default router;

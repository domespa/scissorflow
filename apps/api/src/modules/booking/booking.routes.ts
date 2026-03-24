import { Router } from "express";
import { bookingController } from "./booking.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { requireRole } from "@/middlewares/role.middleware";

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

// =========================================

// =========================================
//              ROTTE PROTETE
// =========================================

// GET /api/bookings/day?date=2026-03-21
router.get(
  "/day",
  authMiddleware,
  requireRole("COLLABORATOR"),
  bookingController.getDayBookings,
);

// GET /api/bookings/month?year=2026&month=3
router.get(
  "/month",
  authMiddleware,
  requireRole("COLLABORATOR"),
  bookingController.getMonthBookings,
);

router.get(
  "/timeline",
  authMiddleware,
  requireRole("COLLABORATOR"),
  bookingController.getDayTimeline,
);

// =========================================

export default router;

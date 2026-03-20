import { Router } from "express";
import { shopController } from "./shop.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { requireRole } from "@/middlewares/role.middleware";

const router = Router();

// =========================================
//              ROTTE PUBBLICHE
// =========================================
router.get("/:slug", shopController.getPublicShop);
// =========================================

// =========================================
//              PROTTETE
// =========================================
router.get(
  "/:shopId/config",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getConfig,
);

router.put(
  "/:shopId/config",
  authMiddleware,
  requireRole("OWNER"),
  shopController.updateConfig,
);
// =========================================

// =========================================
//              SERVIZI
// =========================================
router.get(
  "/:shopId/services",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getServices,
);

router.post(
  "/:shopId/services",
  authMiddleware,
  requireRole("OWNER"),
  shopController.createService,
);

router.put(
  "/:shopId/services/:serviceId",
  authMiddleware,
  requireRole("OWNER"),
  shopController.updateService,
);

router.delete(
  "/:shopId/services/:serviceId",
  authMiddleware,
  requireRole("OWNER"),
  shopController.deleteService,
);
// =========================================

// =========================================
//              DISPONIBILITÀ
// =========================================
router.get(
  "/:shopId/availability",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getAvailability,
);

router.post(
  "/:shopId/availability",
  authMiddleware,
  requireRole("OWNER"),
  shopController.setAvailability,
);
// =========================================

// =========================================
//              SLOT BLOCCATI
// =========================================
router.get(
  "/:shopId/blocked-slots",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getBlockedSlots,
);

router.post(
  "/:shopId/blocked-slots",
  authMiddleware,
  requireRole("OWNER"),
  shopController.createBlockedSlot,
);

router.delete(
  "/:shopId/blocked-slots/:slotId",
  authMiddleware,
  requireRole("OWNER"),
  shopController.deleteBlockedSlot,
);
// =========================================

// =========================================
//              ECCEZIONI DATE
// =========================================
router.get(
  "/:shopId/date-exceptions",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getDateExceptions,
);

router.post(
  "/:shopId/date-exceptions",
  authMiddleware,
  requireRole("OWNER"),
  shopController.upsertDateException,
);

router.delete(
  "/:shopId/date-exceptions/:date",
  authMiddleware,
  requireRole("OWNER"),
  shopController.deleteDateException,
);
// =========================================

export default router;

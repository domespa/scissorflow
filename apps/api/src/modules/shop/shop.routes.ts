import { Router } from "express";
import { shopController } from "./shop.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { requireRole } from "@/middlewares/role.middleware";

const router = Router();

// =========================================
//              ROTTE PUBBLICHE
// =========================================

// GET /api/shops/:slug // PAGINA PUBBLICA DEL BARBIERE
router.get("/:slug", shopController.getPublicShop);

// =========================================

// =========================================
//              ROTTE POTRETTE
// =========================================

// CONFIG
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

// SERVIZI
// COLLARATORE SOLO LETTURA
router.get(
  "/:shopId/services",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getServices,
);

// OWNER TUTTO
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

// DISPONIBILITA'
// COLLABORATOR SOLO LETTURA
router.get(
  "/:shopId/availability",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getAvailability,
);

// OWNER TUTTO
router.post(
  "/:shopId/availability",
  authMiddleware,
  requireRole("OWNER"),
  shopController.setAvailability,
);

// SLOT BLOCCATI
// COLLABORATORE SOLO LETTURA
router.get(
  "/:shopId/blocked-slots",
  authMiddleware,
  requireRole("COLLABORATOR"),
  shopController.getBlockedSlots,
);

// OWNER TUTTO
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

export default router;

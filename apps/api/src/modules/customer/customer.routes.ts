import { Router } from "express";
import { customerController } from "./customer.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { requireRole } from "@/middlewares/role.middleware";

const router = Router();

// GET /api/customers
router.get(
  "/",
  authMiddleware,
  requireRole("COLLABORATOR"),
  customerController.getCustomers,
);

// GET /api/customers/blocked
router.get(
  "/blocked",
  authMiddleware,
  requireRole("COLLABORATOR"),
  customerController.getBlockedCustomers,
);

// POST /api/customers/block-manual
router.post(
  "/block-manual",
  authMiddleware,
  requireRole("OWNER"),
  customerController.blockCustomerManual,
);

// GET /api/customers/blacklist
router.get(
  "/blacklist",
  authMiddleware,
  requireRole("OWNER"),
  customerController.getBlacklist,
);

// POST /api/customers/blacklist
router.post(
  "/blacklist",
  authMiddleware,
  requireRole("OWNER"),
  customerController.addToBlacklist,
);

// DELETE /api/customers/blacklist/:blacklistId
router.delete(
  "/blacklist/:blacklistId",
  authMiddleware,
  requireRole("OWNER"),
  customerController.removeFromBlacklist,
);

// GET /api/customers/:customerId
router.get(
  "/:customerId",
  authMiddleware,
  requireRole("COLLABORATOR"),
  customerController.getCustomerDetail,
);

// POST /api/customers/:customerId/unblock
router.post(
  "/:customerId/unblock",
  authMiddleware,
  requireRole("OWNER"),
  customerController.unblockCustomer,
);

export default router;

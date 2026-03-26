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

// GET /api/customers/:customerId
router.get(
  "/:customerId",
  authMiddleware,
  requireRole("COLLABORATOR"),
  customerController.getCustomerDetail,
);

export default router;

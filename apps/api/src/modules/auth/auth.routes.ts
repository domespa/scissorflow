import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

// =========================================
//              ROTTE PUBBLICHE
// =========================================
// POST /api/auth/register
router.post("/register", authController.register);

// POST /api/auth/login
router.post("/login", authController.login);

// POST /api/auth/onboarding
router.post("/onboarding", authController.onboarding);
// =========================================

export default router;

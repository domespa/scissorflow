import type { Request, Response } from "express";
import { registerSchema, loginSchema, onboardingSchema } from "./auth.schema";
import { authService } from "./auth.service";

export const authController = {
  // =========================================
  //                REGISTRAZIONE
  // =========================================
  async register(req: Request, res: Response) {
    // VALIDAZIONE DATI IN ARRIVO CON ZOD
    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Dati non validi",
        errors: result.error.issues,
      });
      return;
    }

    try {
      const data = await authService.register(result.data);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "EMAIL_ALREADY_EXISTS") {
          res
            .status(409)
            .json({ message: "Email già presente nei nostri archivi" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //                LOGIN
  // =========================================
  async login(req: Request, res: Response) {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: " Dati non validi",
        errors: result.error.issues,
      });
      return;
    }

    try {
      const data = await authService.login(result.data);
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "INVALID_CREDENTIALS") {
          res.status(401).json({ message: "Email o password errati" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //                ONBOARDING
  // =========================================
  async onboarding(req: Request, res: Response) {
    const result = onboardingSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Dati non validi",
        errors: result.error.issues,
      });
      return;
    }

    try {
      const userId = req.body.userId;
      const data = await authService.onboarding(userId, result.data);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "SLUG_ALREADY_EXISTS") {
          res.status(409).json({
            message: "Slug già esistente, scegline un altro",
          });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
};

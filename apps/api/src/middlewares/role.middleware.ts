import type { Request, Response, NextFunction } from "express";
import { prisma } from "@/config/database";

// MIDDLEWARE PER RUOLO SPECIFICO
export const requireRole = (role: "OWNER" | "COLLABORATOR") => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // CHECK SE PRIMA è AUTENTICATO
    const userId = req.user?.userId;
    if (!userId) {
      res.status(401).json({ message: "Non autenticato" });
      return;
    }

    // PRENDIAMO LO SHOPID DA PARAMS O BODY
    const shopId = Array.isArray(req.params.shopId)
      ? req.params.shopId[0]
      : (req.params.shopId ?? req.body.shopId);
    if (!shopId) {
      res.status(400).json({ message: " ShopId mancante" });
      return;
    }

    // CHECK SE HA IL RUOLO RICHIESTO
    const shopUser = await prisma.shopUser.findUnique({
      where: {
        userId_shopId: {
          userId,
          shopId,
        },
      },
    });
    if (!shopUser) {
      res.status(403).json({ message: "Non hai accesso a questo shop" });
      return;
    }

    // SOLO OWNER CONSENTITO
    if (role === "OWNER" && shopUser.role !== "OWNER") {
      res
        .status(403)
        .json({ message: "Solo il proprietario può eseguire questa azione" });
      return;
    }

    // METTIAMO LO SHOP ALLA REQUEST PER I CONTROLLER
    req.shopUser = shopUser;

    next();
  };
};

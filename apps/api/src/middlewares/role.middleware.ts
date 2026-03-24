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

    // PRENDIAMO LO SHOPID DA PARAMS, BODY, O QUERY
    const shopId = Array.isArray(req.params.shopId)
      ? req.params.shopId[0]
      : (req.params.shopId ?? req.body?.shopId ?? (req.query.shopId as string));

    if (shopId) {
      // SHOP SPECIFICO
      const shopUser = await prisma.shopUser.findUnique({
        where: { userId_shopId: { userId, shopId } },
      });
      if (!shopUser) {
        res.status(403).json({ message: "Non hai accesso a questo shop" });
        return;
      }
      if (role === "OWNER" && shopUser.role !== "OWNER") {
        res
          .status(403)
          .json({ message: "Solo il proprietario può eseguire questa azione" });
        return;
      }
      req.shopUser = shopUser;
    } else {
      // SE NESSUN SHOPID PRENDI IL PRIMO DELL'UTENTE
      const shopUser = await prisma.shopUser.findFirst({
        where: { userId },
      });
      if (!shopUser) {
        res.status(403).json({ message: "Nessuno shop associato" });
        return;
      }
      if (role === "OWNER" && shopUser.role !== "OWNER") {
        res
          .status(403)
          .json({ message: "Solo il proprietario può eseguire questa azione" });
        return;
      }
      req.shopUser = shopUser;
    }

    next();
  };
};

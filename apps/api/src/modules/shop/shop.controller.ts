import type { Request, Response } from "express";
import { shopService } from "./shop.service";
import {
  updateConfigSchema,
  upsertServiceSchema,
  availabilitySchema,
  blockedSlotSchema,
} from "./shop.schema";

// UTILITY PER ESTRARRE PARAMS COME STRINGA
const getParams = (param: string | string[]): string => {
  return Array.isArray(param) ? param[0] : param;
};

export const shopController = {
  // =========================================
  //              SHOP PUBBLICO
  // =========================================
  async getPublicShop(req: Request, res: Response) {
    try {
      const slug = getParams(req.params.slug);
      const shop = await shopService.getPublicShop(slug);
      res.status(200).json(shop);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "SHOP_NOT_FOUND") {
          res.status(404).json({ message: "Shop non trovato" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //                  CONFIG
  // =========================================
  async updateConfig(req: Request, res: Response) {
    const result = updateConfigSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.updateConfig(shopId, result.data);
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "SHOP_NOT_FOUND") {
          res.status(404).json({ message: "Shop non trovato" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async getConfig(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.getConfig(shopId);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //                  SERVIZI
  // =========================================
  async getServices(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.getServices(shopId);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async createService(req: Request, res: Response) {
    const result = upsertServiceSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }
    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.createService(shopId, result.data);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async updateService(req: Request, res: Response) {
    const result = upsertServiceSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const shopId = req.shopUser!.shopId;
      const serviceId = getParams(req.params.serviceId);
      const data = await shopService.updateService(
        shopId,
        serviceId,
        result.data,
      );
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "SERVICE_NOT_FOUND") {
          res.status(404).json({ message: "Servizio non trovato" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async deleteService(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const serviceId = getParams(req.params.serviceId);
      await shopService.deleteService(shopId, serviceId);
      res.status(200).json({ message: "Servizio eliminato" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "SERVICE_NOT_FOUND") {
          res.status(404).json({ message: "Servizio non trovato" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //               DISPONIBILITÀ
  // =========================================
  async getAvailability(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.getAvailability(shopId);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async setAvailability(req: Request, res: Response) {
    const result = availabilitySchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.setAvailability(shopId, result.data);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //               SLOT BLOCCATI
  // =========================================
  async getBlockedSlots(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.getBlockedSlots(shopId);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async createBlockedSlot(req: Request, res: Response) {
    const result = blockedSlotSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Dati non validi", errors: result.error.issues });
      return;
    }

    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.createBlockedSlot(shopId, result.data);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "INVALID_DATE_RANGE") {
          res.status(400).json({
            message: "La data di inizio deve essere prima della fine",
          });
          return;
        }
        if (error.message === "PAST_DATE") {
          res
            .status(400)
            .json({ message: "Non puoi bloccare slot nel passato" });
          return;
        }
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async deleteBlockedSlot(req: Request, res: Response) {
    try {
      const slotId = getParams(req.params.slotId);
      await shopService.deleteBlockedSlot(slotId);
      res.status(200).json({ message: "Slot eliminato" });
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================
  //                  DATA
  // =========================================
  async getDateExceptions(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.getDateExceptions(shopId);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async upsertDateException(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await shopService.upsertDateException(shopId, req.body);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async deleteDateException(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const date = getParams(req.params.date);
      await shopService.deleteDateException(shopId, date);
      res.status(204).send();
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================
};

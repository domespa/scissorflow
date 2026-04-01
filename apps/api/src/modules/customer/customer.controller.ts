import type { Request, Response } from "express";
import { customerRepository } from "./customer.repository";

// UTILITY PER ESTRARRE PARAMS COME STRINGA
const getParam = (param: string | string[]): string => {
  return Array.isArray(param) ? param[0] : param;
};

export const customerController = {
  // =========================================
  //           LISTA CLIENTI SHOP
  // =========================================
  async getCustomers(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await customerRepository.findByShop(shopId);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //           DETTAGLIO CLIENTE
  // =========================================
  async getCustomerDetail(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const customerId = getParam(req.params.customerId);
      const data = await customerRepository.findByIdWithBookings(
        customerId,
        shopId,
      );
      if (!data) {
        res.status(404).json({ message: "Cliente non trovato" });
        return;
      }
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //           CLIENTI BLOCCATI
  // =========================================

  async getBlockedCustomers(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await customerRepository.findBlockedByShop(shopId);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async unblockCustomer(req: Request, res: Response) {
    try {
      const customerId = getParam(req.params.customerId);
      await customerRepository.unblockCustomer(customerId);
      res.status(200).json({ message: "Cliente sbloccato" });
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async blockCustomerManual(req: Request, res: Response) {
    try {
      const { email, phone } = req.body;
      if (!email && !phone) {
        res.status(400).json({ message: "Inserisci almeno email o telefono" });
        return;
      }
      await customerRepository.blockCustomerManual(email, phone);
      res.status(200).json({ message: "Cliente bloccato" });
    } catch (error) {
      if (error instanceof Error && error.message === "CUSTOMER_NOT_FOUND") {
        res
          .status(404)
          .json({ message: "Nessun cliente trovato con questi recapiti" });
        return;
      }
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================

  // =========================================
  //           BLACKLIST
  // =========================================
  async getBlacklist(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const data = await customerRepository.findBlacklist(shopId);
      res.status(200).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async addToBlacklist(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const { email, phone, reason } = req.body;
      if (!email && !phone) {
        res.status(400).json({ message: "Inserisci almeno email o telefono" });
        return;
      }
      const data = await customerRepository.addToBlacklist(
        shopId,
        email,
        phone,
        reason,
      );
      res.status(201).json(data);
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },

  async removeFromBlacklist(req: Request, res: Response) {
    try {
      const shopId = req.shopUser!.shopId;
      const blacklistId = getParam(req.params.blacklistId);
      await customerRepository.removeFromBlacklist(shopId, blacklistId);
      res.status(200).json({ message: "Rimosso dalla blacklist" });
    } catch {
      res.status(500).json({ message: "Errore interno" });
    }
  },
  // =========================================
};

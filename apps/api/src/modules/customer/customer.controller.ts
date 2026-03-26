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
};

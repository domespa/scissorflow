import { shopRepository } from "./shop.repository";
import type {
  UpdateConfigInput,
  UpsertServiceInput,
  AvailabilityInput,
  BlockedSlotInput,
} from "./shop.schema";

export const shopService = {
  // =========================================
  //              SHOP PUBBLICO
  // =========================================
  async getPublicShop(slug: string) {
    const shop = await shopRepository.findBySlug(slug);
    if (!shop) {
      throw new Error("SHOP_NOT_FOUND");
    }
    return shop;
  },
  // =========================================

  // =========================================
  //              CONFIG
  // =========================================
  async updateConfig(shopId: string, input: UpdateConfigInput) {
    const shop = await shopRepository.findById(shopId);
    if (!shop) {
      throw new Error("SHOP_NOT_FOUND");
    }
    return shopRepository.updateConfig(shopId, input);
  },

  async getConfig(shopId: string) {
    return shopRepository.findConfig(shopId);
  },
  // =========================================

  // =========================================
  //              SERVIZI
  // =========================================
  async getServices(shopId: string) {
    return shopRepository.findServices(shopId);
  },

  async createService(shopId: string, input: UpsertServiceInput) {
    return shopRepository.createService(shopId, input);
  },

  async updateService(
    shopId: string,
    serviceId: string,
    input: UpsertServiceInput,
  ) {
    const service = await shopRepository.findServicesById(serviceId);
    if (!service || service.shopId !== shopId) {
      throw new Error("SERVICE_NOT_FOUND");
    }
    return shopRepository.updateService(serviceId, input);
  },

  async deleteService(shopId: string, serviceId: string) {
    const service = await shopRepository.findServicesById(serviceId);
    if (!service || service.shopId !== shopId) {
      throw new Error("SERVICE_NOT_FOUND");
    }
    return shopRepository.deleteService(serviceId);
  },
  // =========================================

  // =========================================
  //              DISPONIBILITà
  // =========================================
  async getAvailability(shopId: string) {
    return shopRepository.findAvailability(shopId);
  },

  async setAvailability(shopId: string, input: AvailabilityInput) {
    return shopRepository.upsertAvailability(shopId, input);
  },
  // =========================================

  // =========================================
  //              SLOT BLOCCATI
  // =========================================
  async getBlockedSlots(shopId: string) {
    return shopRepository.findBlockedSlots(shopId);
  },

  async createBlockedSlot(shopId: string, input: BlockedSlotInput) {
    // CHECK PER VEDERE SE STARTAT E PRIMA DI ENDAT
    const start = new Date(input.startAt);
    const end = new Date(input.endAt);
    if (start >= end) {
      throw new Error("INVALID_DATE_RANGE");
    }
    // SLOT NON NEL PASSATO
    if (start < new Date()) {
      throw new Error("PAST_DATE");
    }
    return shopRepository.createBlockedSlot(shopId, input);
  },

  async deleteBlockedSlot(slotId: string) {
    return shopRepository.deleteBlockedSlot(slotId);
  },
  // =========================================

  // =========================================
  //              DATE
  // =========================================
  async getDateExceptions(shopId: string) {
    return shopRepository.findDateExceptions(shopId);
  },

  async upsertDateException(
    shopId: string,
    input: {
      date: string;
      isOpen: boolean;
      startTime?: string;
      endTime?: string;
      breakStart?: string;
      breakEnd?: string;
      reason?: string;
    },
  ) {
    const date = new Date(input.date);
    date.setUTCHours(0, 0, 0, 0);
    return shopRepository.upsertDateException(shopId, {
      date,
      isOpen: input.isOpen,
      startTime: input.startTime,
      endTime: input.endTime,
      breakStart: input.breakStart,
      breakEnd: input.breakEnd,
      reason: input.reason,
    });
  },

  async deleteDateException(shopId: string, date: string) {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    return shopRepository.deleteDateException(shopId, d);
  },
  // =========================================
};

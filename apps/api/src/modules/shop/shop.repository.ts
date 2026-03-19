import { prisma } from "@/config/database";
import type {
  UpdateConfigInput,
  UpsertServiceInput,
  AvailabilityInput,
  BlockedSlotInput,
} from "./shop.schema";

export const shopRepository = {
  // =========================================
  //                SHOP
  // =========================================
  async findBySlug(slug: string) {
    return prisma.shop.findUnique({
      where: { slug },
      include: {
        config: true,
        services: {
          where: { isActive: true },
          orderBy: { name: "asc" },
        },
        availability: {
          where: { isActive: true },
          orderBy: { dayOfWeek: "asc" },
        },
      },
    });
  },

  async findById(shopId: string) {
    return prisma.shop.findUnique({
      where: { id: shopId },
      include: {
        config: true,
        availability: {
          where: { isActive: true },
          orderBy: { dayOfWeek: "asc" },
        },
      },
    });
  },
  // =========================================

  // =========================================
  //                CONFIG
  // =========================================
  async updateConfig(shopId: string, input: UpdateConfigInput) {
    return prisma.shopConfig.update({
      where: { shopId },
      data: input,
    });
  },
  // =========================================

  // =========================================
  //                SERVIZI
  // =========================================
  async findServices(shopId: string) {
    return prisma.service.findMany({
      where: { shopId },
      orderBy: { name: "asc" },
    });
  },

  async findServicesById(serviceId: string) {
    return prisma.service.findUnique({
      where: { id: serviceId },
    });
  },

  async createService(shopId: string, input: UpsertServiceInput) {
    return prisma.service.create({
      data: { shopId, ...input },
    });
  },

  async updateService(serviceId: string, input: UpsertServiceInput) {
    return prisma.service.update({
      where: { id: serviceId },
      data: input,
    });
  },

  async deleteService(serviceId: string) {
    return prisma.service.update({
      where: { id: serviceId },
      data: { isActive: false },
    });
  },
  // =========================================

  // =========================================
  //                DISPONIBILITà
  // =========================================
  async findAvailability(shopId: string) {
    return prisma.availability.findMany({
      where: { shopId },
      orderBy: { dayOfWeek: "asc" },
    });
  },

  async upsertAvailability(shopId: string, input: AvailabilityInput) {
    return prisma.availability.upsert({
      where: {
        id: `${shopId}-${input.dayOfWeek}`,
      },
      update: input,
      create: { shopId, ...input },
    });
  },
  // =========================================

  // =========================================
  //                SLOT BLOCCATI
  // =========================================
  async findBlockedSlots(shopId: string) {
    return prisma.blockedSlot.findMany({
      where: {
        shopId,
        endAt: { gte: new Date() }, // SOLO FUTURI
      },
      orderBy: { startAt: "asc" },
    });
  },

  async createBlockedSlot(shopId: string, input: BlockedSlotInput) {
    return prisma.blockedSlot.create({
      data: {
        shopId,
        startAt: new Date(input.startAt),
        endAt: new Date(input.endAt),
        reason: input.reason,
      },
    });
  },

  async deleteBlockedSlot(slotId: string) {
    return prisma.blockedSlot.delete({
      where: { id: slotId },
    });
  },
  // =========================================
};

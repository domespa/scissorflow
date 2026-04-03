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
        users: {
          where: { role: "OWNER" },
          include: {
            user: { select: { email: true } },
          },
          take: 1,
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

  async findConfig(shopId: string) {
    return prisma.shopConfig.findUnique({
      where: { shopId },
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
      where: { shopId_dayOfWeek: { shopId, dayOfWeek: input.dayOfWeek } },
      create: {
        shopId,
        dayOfWeek: input.dayOfWeek,
        startTime: input.startTime,
        endTime: input.endTime,
        breakStart: input.breakStart ?? null,
        breakEnd: input.breakEnd ?? null,
        isActive: input.isActive,
      },
      update: {
        startTime: input.startTime,
        endTime: input.endTime,
        breakStart: input.breakStart ?? null,
        breakEnd: input.breakEnd ?? null,
        isActive: input.isActive,
      },
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

  // =========================================
  //                DATE
  // =========================================
  async findDateExceptions(shopId: string) {
    return prisma.dateException.findMany({
      where: { shopId },
      orderBy: { date: "asc" },
    });
  },

  async upsertDateException(
    shopId: string,
    data: {
      date: Date;
      isOpen: boolean;
      startTime?: string;
      endTime?: string;
      breakStart?: string | null;
      breakEnd?: string | null;
      reason?: string;
    },
  ) {
    // TROVA SE ESISTE GIÀ UN'ECCEZIONE PER QUELLA DATA
    const startOfDay = new Date(data.date);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(data.date);
    endOfDay.setUTCHours(23, 59, 59, 999);

    const existing = await prisma.dateException.findFirst({
      where: {
        shopId,
        date: { gte: startOfDay, lte: endOfDay },
      },
    });

    if (existing) {
      return prisma.dateException.update({
        where: { id: existing.id },
        data: {
          isOpen: data.isOpen,
          startTime: data.startTime,
          endTime: data.endTime,
          breakStart: data.breakStart,
          breakEnd: data.breakEnd,
          reason: data.reason,
        },
      });
    }

    return prisma.dateException.create({
      data: { shopId, ...data },
    });
  },

  async deleteDateException(shopId: string, date: Date) {
    const startOfDay = new Date(date);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999);

    return prisma.dateException.deleteMany({
      where: {
        shopId,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });
  },
  // =========================================
};

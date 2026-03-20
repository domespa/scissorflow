import { prisma } from "@/config/database";
import type { BookingStatus } from "@/generated/prisma";

export const bookingRepository = {
  // =========================================
  //           SLOTS MENSILI
  // =========================================

  // TROVA TUTTE LE PRENOTAZIONI ATTIVE DEL MESE
  async findActiveBookingsByMonth(shopId: string, year: number, month: number) {
    const startOfMonth = new Date(year, month - 1, 1, 0, 0, 0, 0);
    const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

    return prisma.booking.findMany({
      where: {
        shopId,
        startAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        status: { in: ["PENDING", "CONFIRMED"] },
      },
      select: {
        startAt: true,
        endAt: true,
        status: true,
      },
    });
  },

  // TROVA SLOT BLOCCATI DEL MESE
  async findBlockedSlotsByMonth(shopId: string, year: number, month: number) {
    const startOfMonth = new Date(year, month - 1, 1, 0, 0, 0, 0);
    const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

    return prisma.blockedSlot.findMany({
      where: {
        shopId,
        startAt: { lte: endOfMonth },
        endAt: { gte: startOfMonth },
      },
      select: {
        startAt: true,
        endAt: true,
      },
    });
  },

  // =========================================
  //           PRENOTAZIONE
  // =========================================

  // CONTROLLA SE UN'EMAIL HA GIA' UNA PRENOTAZIONE ATTIVA
  async findActiveBookingByEmail(email: string, shopId: string) {
    return prisma.booking.findFirst({
      where: {
        shopId,
        status: { in: ["PENDING", "CONFIRMED"] },
        customer: { email },
      },
    });
  },

  // CONTROLLA SE UN TELEFONO HA GIA' UNA PRENOTAZIONE ATTIVA
  async findActiveBookingByPhone(phone: string, shopId: string) {
    return prisma.booking.findFirst({
      where: {
        shopId,
        status: { in: ["PENDING", "CONFIRMED"] },
        customer: { phone },
      },
    });
  },

  // TROVA PRENOTAZIONE PER ID
  async findById(bookingId: string) {
    return prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        customer: true,
        service: true,
        shop: {
          include: { config: true },
        },
      },
    });
  },

  // CREA CUSTOMER SE NON ESISTE
  async findOrCreateCustomer(data: {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
  }) {
    // CERCA PER EMAIL O TELEFONO
    const existing = await prisma.customer.findFirst({
      where: {
        OR: [
          data.email ? { email: data.email } : {},
          data.phone ? { phone: data.phone } : {},
        ],
      },
    });

    if (existing) return existing;

    return prisma.customer.create({ data });
  },

  // CREA GRUPPO RICORRENZA
  async createRecurrenceGroup() {
    return prisma.recurrenceGroup.create({ data: {} });
  },

  // CREA PRENOTAZIONE
  async createBooking(data: {
    shopId: string;
    customerId: string;
    serviceId: string;
    startAt: Date;
    endAt: Date;
    otpCode: string;
    otpExpiresAt: Date;
    lockedAt: Date;
    lockedUntil: Date;
    recurrenceGroupId?: string;
  }) {
    return prisma.booking.create({ data });
  },

  // CONFERMA PRENOTAZIONE
  async confirmBooking(bookingId: string) {
    return prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: "CONFIRMED",
        otpCode: null,
        otpExpiresAt: null,
        lockedAt: null,
        lockedUntil: null,
      },
    });
  },

  // AGGIORNA STATO PRENOTAZIONE
  async updateStatus(bookingId: string, status: BookingStatus) {
    return prisma.booking.update({
      where: { id: bookingId },
      data: { status },
    });
  },

  // TROVA PRENOTAZIONI SCADUTE
  async findExpiredBookings() {
    return prisma.booking.findMany({
      where: {
        status: "PENDING",
        lockedUntil: { lt: new Date() },
      },
    });
  },

  // TROVA PRENOTAZIONI DA COMPLETARE AUTOMATICAMENTE
  async findBookingsToComplete() {
    const twoHoursAgo = new Date();
    twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

    return prisma.booking.findMany({
      where: {
        status: "CONFIRMED",
        endAt: { lt: twoHoursAgo },
      },
      include: { customer: true },
    });
  },

  // TROVA PRENOTAZIONI PER REMINDER
  async findBookingsForReminder(hoursFromNow: number) {
    const now = new Date();
    const target = new Date();
    target.setHours(target.getHours() + hoursFromNow);

    return prisma.booking.findMany({
      where: {
        status: "CONFIRMED",
        startAt: {
          gte: now,
          lte: target,
        },
        // SOLO SE NON GIA' MANDATO
        reminderSentAt: null,
      },
      include: {
        customer: true,
        service: true,
        shop: true,
      },
    });
  },

  // MARCA REMINDER COME INVIATO
  async markReminderSent(bookingId: string) {
    return prisma.booking.update({
      where: { id: bookingId },
      data: { reminderSentAt: new Date() },
    });
  },

  // TROVA PRENOTAZIONE APPENA CREATA
  async findPendingByCustomerAndShop(customerId: string, shopId: string) {
    return prisma.booking.findFirst({
      where: {
        customerId,
        shopId,
        status: "PENDING",
      },
      orderBy: { createdAt: "desc" },
    });
  },

  // TROVA DATE DEL MESE
  async findDateExceptionsByMonth(shopId: string, year: number, month: number) {
    const startOfMonth = new Date(year, month - 1, 1, 0, 0, 0, 0);
    const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

    return prisma.dateException.findMany({
      where: {
        shopId,
        date: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });
  },
};

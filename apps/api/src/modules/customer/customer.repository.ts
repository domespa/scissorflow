import { prisma } from "@/config/database";

export const customerRepository = {
  // LISTA CLIENTI CON STATS
  async findByShop(shopId: string) {
    const customers = await prisma.customer.findMany({
      where: {
        bookings: { some: { shopId } },
        isBlocked: false,
      },
      include: {
        bookings: {
          where: { shopId, status: { in: ["CONFIRMED", "COMPLETED"] } },
          include: { service: true },
          orderBy: { startAt: "desc" },
        },
      },
      orderBy: { id: "desc" },
    });

    return customers.map((c) => {
      const bookings = c.bookings;
      const lastBooking = bookings[0];
      const totalSpent = bookings.reduce(
        (sum, b) => sum + (b.service.price ?? 0),
        0,
      );
      return {
        id: c.id,
        firstName: c.firstName,
        lastName: c.lastName,
        email: c.email,
        phone: c.phone,
        noShows: c.noShows,
        isBlocked: c.isBlocked,
        totalBookings: bookings.length,
        totalSpent,
        lastBookingAt: lastBooking?.startAt ?? null,
        lastServiceName: lastBooking?.service.name ?? null,
        firstVisitAt:
          bookings.length > 0 ? bookings[bookings.length - 1].startAt : null,
      };
    });
  },

  // DETTAGLIO CLIENTE CON STORICO
  async findByIdWithBookings(customerId: string, shopId: string) {
    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
      include: {
        bookings: {
          where: {
            shopId,
            status: { in: ["CONFIRMED", "COMPLETED", "CANCELLED", "NO_SHOW"] },
          },
          include: { service: true },
          orderBy: { startAt: "desc" },
        },
      },
    });

    if (!customer) return null;

    const confirmedBookings = customer.bookings.filter(
      (b) => b.status === "CONFIRMED" || b.status === "COMPLETED",
    );
    const totalSpent = confirmedBookings.reduce(
      (sum, b) => sum + (b.service.price ?? 0),
      0,
    );

    return {
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      noShows: customer.noShows,
      isBlocked: customer.isBlocked,
      totalBookings: confirmedBookings.length,
      totalSpent,
      bookings: customer.bookings.map((b) => ({
        id: b.id,
        startAt: b.startAt,
        endAt: b.endAt,
        status: b.status,
        serviceName: b.service.name,
        servicePrice: b.service.price,
        duration: b.service.duration,
      })),
    };
  },

  // LISTA CLIENTI BLOCCATI
  async findBlockedByShop(shopId: string) {
    const customers = await prisma.customer.findMany({
      where: {
        bookings: { some: { shopId } },
        isBlocked: true,
      },
      include: {
        bookings: {
          where: { shopId, status: { in: ["CONFIRMED", "COMPLETED"] } },
          include: { service: true },
          orderBy: { startAt: "desc" },
        },
      },
      orderBy: { id: "desc" },
    });

    return customers.map((c) => {
      const bookings = c.bookings;
      const lastBooking = bookings[0];
      const totalSpent = bookings.reduce(
        (sum, b) => sum + (b.service.price ?? 0),
        0,
      );
      return {
        id: c.id,
        firstName: c.firstName,
        lastName: c.lastName,
        email: c.email,
        phone: c.phone,
        noShows: c.noShows,
        isBlocked: c.isBlocked,
        totalBookings: bookings.length,
        totalSpent,
        lastBookingAt: lastBooking?.startAt ?? null,
        lastServiceName: lastBooking?.service.name ?? null,
        firstVisitAt:
          bookings.length > 0 ? bookings[bookings.length - 1].startAt : null,
      };
    });
  },

  // SBLOCCA CLIENTE
  async unblockCustomer(customerId: string) {
    return prisma.customer.update({
      where: { id: customerId },
      data: { isBlocked: false },
    });
  },

  // BLOCCO MANUALE
  async blockCustomerManual(email?: string, phone?: string) {
    const customer = await prisma.customer.findFirst({
      where: {
        OR: [email ? { email } : {}, phone ? { phone } : {}],
      },
    });
    if (!customer) throw new Error("CUSTOMER_NOT_FOUND");
    return prisma.customer.update({
      where: { id: customer.id },
      data: { isBlocked: true, noShows: { increment: 1 } },
    });
  },

  // BLACKLIST
  async findBlacklist(shopId: string) {
    return prisma.blacklist.findMany({
      where: { shopId },
      orderBy: { createdAt: "desc" },
    });
  },

  async addToBlacklist(
    shopId: string,
    email?: string,
    phone?: string,
    reason?: string,
  ) {
    return prisma.blacklist.create({
      data: {
        shopId,
        email: email || null,
        phone: phone || null,
        reason: reason || null,
      },
    });
  },

  async removeFromBlacklist(shopId: string, blacklistId: string) {
    return prisma.blacklist.delete({
      where: { id: blacklistId, shopId },
    });
  },

  async isBlacklisted(email?: string, phone?: string): Promise<boolean> {
    if (!email && !phone) return false;
    const found = await prisma.blacklist.findFirst({
      where: {
        OR: [email ? { email } : {}, phone ? { phone } : {}],
      },
    });
    return !!found;
  },
};

import bcrypt from "bcryptjs";
import { bookingRepository } from "./booking.repository";
import { shopRepository } from "../shop/shop.repository";
import type {
  LockSlotInput,
  ConfirmOtpInput,
  GetMonthSlotsInput,
} from "./booking.schema";
import { io } from "@/server";
import { notificationService } from "../notification/notification.service";
import { env } from "@/config/env";

const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const generateTimeSlots = (
  startTime: string,
  endTime: string,
  interval: number,
  duration: number,
  breakStart?: string | null,
  breakEnd?: string | null,
): string[] => {
  const slots: string[] = [];
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);

  let current = startHour * 60 + startMin;
  const end = endHour * 60 + endMin;

  const breakStartMin = breakStart
    ? breakStart
        .split(":")
        .map(Number)
        .reduce((h, m) => h * 60 + m)
    : null;
  const breakEndMin = breakEnd
    ? breakEnd
        .split(":")
        .map(Number)
        .reduce((h, m) => h * 60 + m)
    : null;

  while (current + duration <= end) {
    const slotEnd = current + duration;

    const overlapsBreak =
      breakStartMin !== null &&
      breakEndMin !== null &&
      current < breakEndMin &&
      slotEnd > breakStartMin;

    if (!overlapsBreak) {
      const hours = Math.floor(current / 60);
      const mins = current % 60;
      slots.push(
        `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`,
      );
    }

    current += interval;
  }

  return slots;
};

const getNextRecurrenceDate = (
  date: Date,
  type: "WEEKLY" | "MONTHLY",
  iteration: number,
): Date => {
  const next = new Date(date);

  if (type === "WEEKLY") {
    next.setDate(next.getDate() + 7 * iteration);
  } else {
    const targetDay = date.getDate();
    next.setMonth(next.getMonth() + iteration);

    const lastDayOfMonth = new Date(
      next.getFullYear(),
      next.getMonth() + 1,
      0,
    ).getDate();

    if (targetDay > lastDayOfMonth) {
      next.setDate(lastDayOfMonth);
    } else {
      next.setDate(targetDay);
    }
  }

  return next;
};

export const bookingService = {
  // =========================================
  //          SLOT MENSILI DISPONIBILI
  // =========================================
  async getMonthSlots(input: GetMonthSlotsInput) {
    const [year, month] = input.month.split("-").map(Number);

    const now = new Date();
    const requestedMonth = new Date(year, month - 1, 1);
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    if (requestedMonth < currentMonth) return {};

    const shop = await shopRepository.findById(input.shopId);
    if (!shop) throw new Error("SHOP_NOT_FOUND");

    const service = await shopRepository.findServicesById(input.serviceId);
    if (!service) throw new Error("SERVICE_NOT_FOUND");

    const [bookings, blockedSlots, dateExceptions] = await Promise.all([
      bookingRepository.findActiveBookingsByMonth(input.shopId, year, month),
      bookingRepository.findBlockedSlotsByMonth(input.shopId, year, month),
      bookingRepository.findDateExceptionsByMonth(input.shopId, year, month),
    ]);

    const result: {
      [key: string]: {
        time: string;
        status: "free" | "pending" | "confirmed";
      }[];
    } = {};

    const daysInMonth = new Date(year, month, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date < today) continue;

      const dayOfWeek = date.getDay();

      const exception = dateExceptions.find((e) => {
        const exDate = new Date(e.date);
        return (
          exDate.getFullYear() === year &&
          exDate.getMonth() === month - 1 &&
          exDate.getDate() === day
        );
      });

      let availabilities = shop.availability.filter(
        (a) => a.dayOfWeek === dayOfWeek && a.isActive,
      );

      if (exception && !exception.isOpen) continue;

      if (exception && exception.isOpen) {
        availabilities = [
          {
            id: "exception",
            shopId: input.shopId,
            dayOfWeek,
            startTime: exception.startTime ?? "09:00",
            endTime: exception.endTime ?? "18:00",
            breakStart: exception.breakStart ?? null,
            breakEnd: exception.breakEnd ?? null,
            isActive: true,
          },
        ];
      } else if (availabilities.length === 0) {
        continue;
      }

      const baseInterval = shop.config?.slotInterval ?? 30;
      const slotInterval = Math.min(baseInterval, service.duration);
      const slotMode = shop.config?.slotMode ?? "FIXED";

      let allSlots = availabilities.flatMap((availability) =>
        generateTimeSlots(
          availability.startTime,
          availability.endTime,
          slotInterval,
          service.duration,
          availability.breakStart,
          availability.breakEnd,
        ),
      );

      allSlots = [...new Set(allSlots)].sort();

      const dayBookings = bookings.filter((b) => {
        const bookingData = new Date(b.startAt);
        return (
          bookingData.getFullYear() === year &&
          bookingData.getMonth() === month - 1 &&
          bookingData.getDate() === day
        );
      });

      const dayBlocked = blockedSlots.filter((b) => {
        const start = new Date(b.startAt);
        const end = new Date(b.endAt);
        return start <= date && end >= date;
      });

      allSlots = allSlots.filter((slot) => {
        const [slotHour, slotMin] = slot.split(":").map(Number);
        const slotStart = new Date(
          year,
          month - 1,
          day,
          slotHour,
          slotMin,
          0,
          0,
        );
        const slotEnd = new Date(
          slotStart.getTime() + service.duration * 60000,
        );

        const isBooked = dayBookings.some((b) => {
          const bStart = new Date(b.startAt);
          const bEnd = new Date(b.endAt);
          return slotStart < bEnd && slotEnd > bStart;
        });

        const isBlocked = dayBlocked.some((b) => {
          const bStart = new Date(b.startAt);
          const bEnd = new Date(b.endAt);
          return slotStart < bEnd && slotEnd > bStart;
        });

        return !isBooked && !isBlocked;
      });

      if (slotMode === "DYNAMIC" && dayBookings.length > 0) {
        const sortedBookings = [...dayBookings].sort(
          (a, b) =>
            new Date(a.startAt).getTime() - new Date(b.startAt).getTime(),
        );

        const dynamicSlots: string[] = [];
        for (const booking of sortedBookings) {
          const endAt = new Date(booking.endAt);
          const endHour = endAt.getHours();
          const endMin = endAt.getMinutes();
          const endSlot = `${endHour.toString().padStart(2, "0")}:${endMin.toString().padStart(2, "0")}`;

          if (!allSlots.includes(endSlot)) {
            const [endSlotHour, endSlotMin] = endSlot.split(":").map(Number);
            const slotStart = new Date(
              year,
              month - 1,
              day,
              endSlotHour,
              endSlotMin,
              0,
              0,
            );
            const slotEnd = new Date(
              slotStart.getTime() + service.duration * 60000,
            );

            const fitsInAvailability = availabilities.some((av) => {
              const [availEndHour, availEndMin] = av.endTime
                .split(":")
                .map(Number);
              const availEnd = new Date(
                year,
                month - 1,
                day,
                availEndHour,
                availEndMin,
                0,
                0,
              );
              return slotEnd <= availEnd;
            });

            if (fitsInAvailability) dynamicSlots.push(endSlot);
          }
        }

        allSlots = [...new Set([...allSlots, ...dynamicSlots])].sort();
      }

      const dateKey = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

      // NON AGGIUNGERE FREE SE GIÀ OCCUPATO
      const bookedTimes = new Set(
        dayBookings.map((b) => {
          const bookingDate = new Date(b.startAt);
          return `${bookingDate.getHours().toString().padStart(2, "0")}:${bookingDate.getMinutes().toString().padStart(2, "0")}`;
        }),
      );

      const freeSlots = allSlots
        .filter((time) => !bookedTimes.has(time))
        .map((time) => ({ time, status: "free" as const }));

      const bookedSlots = dayBookings.map((b) => {
        const bookingDate = new Date(b.startAt);
        const hour = bookingDate.getHours().toString().padStart(2, "0");
        const min = bookingDate.getMinutes().toString().padStart(2, "0");
        return {
          time: `${hour}:${min}`,
          status:
            b.status === "PENDING"
              ? ("pending" as const)
              : ("confirmed" as const),
        };
      });

      const allWithStatus = [...freeSlots, ...bookedSlots].sort((a, b) =>
        a.time.localeCompare(b.time),
      );

      if (allWithStatus.length > 0) result[dateKey] = allWithStatus;
    }

    return result;
  },
  // =========================================

  // =========================================
  //          TIMELINE GIORNALIERA
  // =========================================
  async getDayTimeline(shopId: string, date: string) {
    const [year, month, day] = date.split("-").map(Number);

    const shop = await shopRepository.findById(shopId);
    if (!shop) throw new Error("SHOP_NOT_FOUND");

    const bookings = await bookingRepository.findBookingsByShopAndDate(
      shopId,
      date,
    );
    const dateExceptions = await bookingRepository.findDateExceptionsByMonth(
      shopId,
      year,
      month,
    );

    const dayOfWeek = new Date(year, month - 1, day).getDay();
    const exception = dateExceptions.find((e) => {
      const exDate = new Date(e.date);
      return (
        exDate.getFullYear() === year &&
        exDate.getMonth() === month - 1 &&
        exDate.getDate() === day
      );
    });

    let availabilities = shop.availability.filter(
      (a) => a.dayOfWeek === dayOfWeek && a.isActive,
    );

    if (exception && !exception.isOpen) {
      availabilities = [];
    } else if (exception && exception.isOpen) {
      availabilities = [
        {
          id: "exception",
          shopId,
          dayOfWeek,
          startTime: exception.startTime ?? "09:00",
          endTime: exception.endTime ?? "18:00",
          breakStart: exception.breakStart ?? null,
          breakEnd: exception.breakEnd ?? null,
          isActive: true,
        },
      ];
    }

    const slotInterval = shop.config?.slotInterval ?? 30;

    const allSlots = [
      ...new Set(
        availabilities.flatMap((av) =>
          generateTimeSlots(
            av.startTime,
            av.endTime,
            slotInterval,
            slotInterval,
            av.breakStart,
            av.breakEnd,
          ),
        ),
      ),
    ].sort();

    type TimelineSlot = {
      time: string;
      endTime: string;
      status: "free" | "pending" | "confirmed" | "noshow";
      booking?: {
        id: string;
        customerName: string;
        serviceName: string;
        duration: number;
        price: number | null;
      };
    };

    const timeline: TimelineSlot[] = [];
    const addedBookingIds = new Set<string>();

    for (const slot of allSlots) {
      const [h, m] = slot.split(":").map(Number);
      const slotStart = new Date(year, month - 1, day, h, m, 0, 0);

      // SALTA SE COPERTO DA PRENOTAZIONE GIÀ AGGIUNTA
      const isCoveredByAdded = [...addedBookingIds].some((id) => {
        const bk = bookings.find((b) => b.id === id);
        if (!bk) return false;
        const bStart = new Date(bk.startAt);
        const bEnd = new Date(bk.endAt);
        return slotStart >= bStart && slotStart < bEnd;
      });

      if (isCoveredByAdded) continue;

      // CERCA PRENOTAZIONE CHE COPRE QUESTO SLOT
      const booking = bookings.find((b) => {
        const bStart = new Date(b.startAt);
        const bEnd = new Date(b.endAt);
        return slotStart >= bStart && slotStart < bEnd;
      });

      if (booking) {
        if (addedBookingIds.has(booking.id)) continue;
        addedBookingIds.add(booking.id);

        const endDate = new Date(booking.endAt);
        const endH = endDate.getHours().toString().padStart(2, "0");
        const endM = endDate.getMinutes().toString().padStart(2, "0");

        timeline.push({
          time: slot,
          endTime: `${endH}:${endM}`,
          status:
            booking.status === "PENDING"
              ? "pending"
              : booking.status === "NO_SHOW"
                ? "noshow"
                : "confirmed",
          booking: {
            id: booking.id,
            customerName: `${booking.customer.firstName} ${booking.customer.lastName}`,
            serviceName: booking.service.name,
            duration: booking.service.duration,
            price: booking.service.price,
          },
        });
      } else {
        const endMin = h * 60 + m + slotInterval;
        const endH = Math.floor(endMin / 60)
          .toString()
          .padStart(2, "0");
        const endM = (endMin % 60).toString().padStart(2, "0");

        timeline.push({
          time: slot,
          endTime: `${endH}:${endM}`,
          status: "free",
        });
      }
    }

    return timeline;
  },
  // =========================================

  // =========================================
  //                LOCK SLOT
  // =========================================
  async lockSlot(input: LockSlotInput) {
    const startAt = new Date(input.startAt);

    if (input.customer.email) {
      const existing = await bookingRepository.findActiveBookingByEmail(
        input.customer.email,
        input.shopId,
      );
      if (existing) {
        const existingDate = new Date(existing.startAt);
        const newDate = new Date(input.startAt);
        const sameDay =
          existingDate.getFullYear() === newDate.getFullYear() &&
          existingDate.getMonth() === newDate.getMonth() &&
          existingDate.getDate() === newDate.getDate();
        if (sameDay) throw new Error("CUSTOMER_ALREADY_HAS_BOOKING");
      }
    }

    if (input.customer.phone) {
      const existing = await bookingRepository.findActiveBookingByPhone(
        input.customer.phone,
        input.shopId,
      );
      if (existing) {
        const existingDate = new Date(existing.startAt);
        const newDate = new Date(input.startAt);
        const sameDay =
          existingDate.getFullYear() === newDate.getFullYear() &&
          existingDate.getMonth() === newDate.getMonth() &&
          existingDate.getDate() === newDate.getDate();
        if (sameDay) throw new Error("CUSTOMER_ALREADY_HAS_BOOKING");
      }
    }

    const service = await shopRepository.findServicesById(input.serviceId);
    const shop = await shopRepository.findById(input.shopId);
    const shopName = shop?.name ?? "ScissorFlow";
    if (!service) throw new Error("SERVICE_NOT_FOUND");

    const endAt = new Date(startAt.getTime() + service.duration * 60000);

    const customer = await bookingRepository.findOrCreateCustomer(
      input.customer,
    );

    const otpCode = generateOTP();
    const hashedOtp = await bcrypt.hash(otpCode, 10);
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    const lockedAt = new Date();
    const lockedUntil = otpExpiresAt;

    let recurrenceGroupId: string | undefined;

    if (input.recurrence) {
      const group = await bookingRepository.createRecurrenceGroup();
      recurrenceGroupId = group.id;

      for (let i = 0; i < input.recurrence.repeat; i++) {
        const recurrentStartAt =
          i === 0
            ? startAt
            : getNextRecurrenceDate(startAt, input.recurrence.type, i);
        const recurrentEndAt = new Date(
          recurrentStartAt.getTime() + service.duration * 60000,
        );

        await bookingRepository.createBooking({
          shopId: input.shopId,
          customerId: customer.id,
          serviceId: input.serviceId,
          startAt: recurrentStartAt,
          endAt: recurrentEndAt,
          otpCode: hashedOtp,
          otpExpiresAt,
          lockedAt,
          lockedUntil,
          recurrenceGroupId,
        });
      }
    } else {
      await bookingRepository.createBooking({
        shopId: input.shopId,
        customerId: customer.id,
        serviceId: input.serviceId,
        startAt,
        endAt,
        otpCode: hashedOtp,
        otpExpiresAt,
        lockedAt,
        lockedUntil,
      });
    }

    if (input.customer.email) {
      await notificationService.sendOtp({
        to: input.customer.email,
        firstName: input.customer.firstName,
        otpCode,
        expiresInMinutes: 5,
        shopName,
      });
    }

    io.to(input.shopId).emit("slot:locked", {
      shopId: input.shopId,
      startAt: startAt.toISOString(),
      endAt: endAt.toISOString(),
    });

    const booking = await bookingRepository.findPendingByCustomerAndShop(
      customer.id,
      input.shopId,
    );

    return {
      bookingId: booking!.id,
      otpCode,
      expiresAt: otpExpiresAt.toISOString(),
      customer: {
        firstName: customer.firstName,
        email: customer.email,
        phone: customer.phone,
      },
    };
  },
  // =========================================

  // =========================================
  //                CONFERMA OTP
  // =========================================
  async confirmOtp(input: ConfirmOtpInput) {
    const booking = await bookingRepository.findById(input.bookingId);

    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    if (booking.status !== "PENDING") throw new Error("BOOKING_NOT_PENDING");

    if (!booking.otpExpiresAt || booking.otpExpiresAt < new Date()) {
      throw new Error("OTP_EXPIRED");
    }

    if (!booking.otpCode) throw new Error("OTP_NOT_FOUND");
    const isValid = await bcrypt.compare(input.otpCode, booking.otpCode);
    if (!isValid) throw new Error("OTP_INVALID");

    const confirmed = await bookingRepository.confirmBooking(input.bookingId);

    const cancelUrl = `${env.CLIENT_URL}/cancel/${booking.id}`;

    if (booking.customer.email) {
      await notificationService.sendBookingConfirmedToCustomer({
        to: booking.customer.email,
        firstName: booking.customer.firstName,
        shopName: booking.shop.name,
        serviceName: booking.service.name,
        startAt: booking.startAt,
        cancelUrl,
      });
    }

    io.to(booking.shopId).emit("slot:confirmed", {
      shopId: booking.shopId,
      startAt: booking.startAt.toISOString(),
      endAt: booking.endAt.toISOString(),
    });

    return confirmed;
  },
  // =========================================

  // =========================================
  //         CONFERMA SENZA OTP ADMIN
  // =========================================
  async confirmBookingAdmin(bookingId: string) {
    const booking = await bookingRepository.findById(bookingId);
    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    await bookingRepository.confirmBooking(bookingId);

    io.to(booking.shopId).emit("slot:confirmed", {
      shopId: booking.shopId,
      startAt: booking.startAt.toISOString(),
      endAt: booking.endAt.toISOString(),
    });
  },

  // =========================================
  //           CANCELLA PRENOTAZIONE
  // =========================================
  async cancelBooking(bookingId: string) {
    const booking = await bookingRepository.findById(bookingId);
    if (!booking) throw new Error("BOOKING_NOT_FOUND");

    const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
    if (booking.startAt < twoHoursFromNow) {
      throw new Error("CANCELLATION_NOT_ALLOWED");
    }

    await bookingRepository.updateStatus(bookingId, "CANCELLED");

    io.to(booking.shopId).emit("slot:cancelled", {
      shopId: booking.shopId,
      startAt: booking.startAt.toISOString(),
      endAt: booking.endAt.toISOString(),
    });
  },
  // =========================================

  // =========================================
  //              NO-SHOW
  // =========================================
  async markNoShow(bookingId: string) {
    const booking = await bookingRepository.findById(bookingId);
    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    await bookingRepository.updateStatus(bookingId, "NO_SHOW");

    io.to(booking.shopId).emit("slot:cancelled", {
      shopId: booking.shopId,
      startAt: booking.startAt.toISOString(),
      endAt: booking.endAt.toISOString(),
    });
  },

  async undoNoShow(bookingId: string) {
    const booking = await bookingRepository.findById(bookingId);
    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    if (booking.status !== "NO_SHOW") throw new Error("BOOKING_NOT_NO_SHOW");
    await bookingRepository.updateStatus(bookingId, "CONFIRMED");

    io.to(booking.shopId).emit("slot:confirmed", {
      shopId: booking.shopId,
      startAt: booking.startAt.toISOString(),
      endAt: booking.endAt.toISOString(),
    });
  },
  // =========================================

  // =========================================
  //           PRENOTAZIONI GIORNO/MESE
  // =========================================
  async getDayBookings(shopId: string, date: string) {
    return bookingRepository.findBookingsByShopAndDate(shopId, date);
  },

  async getMonthBookings(shopId: string, year: number, month: number) {
    return bookingRepository.findBookingsByShopAndMonth(shopId, year, month);
  },
  // =========================================

  // =========================================
  //          DETTAGLI PRENOTAZIONE
  // =========================================
  async getPublicBooking(bookingId: string) {
    const booking = await bookingRepository.findPublicById(bookingId);
    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    return booking;
  },
  // =========================================
};

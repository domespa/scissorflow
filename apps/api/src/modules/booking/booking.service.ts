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

// =========================================
//              GENERAZIONE OTP
// =========================================
const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
// =========================================

// =========================================
//             GENERAZIONE SLOTS
// =========================================
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

  // CONVERTI PAUSA IN MINUTI
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

    // SALTA SE LO SLOT INIZIA O FINISCE NELLA PAUSA
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
// =========================================

// =========================================
//          CALCOLA DATA RICORRENZA
// =========================================
const getNextRecurrenceDate = (
  date: Date,
  type: "WEEKLY" | "MONTHLY",
  iteration: number,
): Date => {
  const next = new Date(date);

  if (type === "WEEKLY") {
    next.setDate(next.getDate() + 7 * iteration);
  } else {
    // MENSILE STESSO GIORNO DEL MESE
    const targetDay = date.getDate();
    next.setMonth(next.getMonth() + iteration);

    // GESTIONE GIORNI MESI DIFFERENTE
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
// =========================================

export const bookingService = {
  // =========================================
  //          SLOT MENSILI DISPONIBILI
  // =========================================
  async getMonthSlots(input: GetMonthSlotsInput) {
    const [year, month] = input.month.split("-").map(Number);

    // NON MOSTRARE MESI PASSATI
    const now = new Date();
    const requestedMonth = new Date(year, month - 1, 1);
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    if (requestedMonth < currentMonth) {
      return {};
    }

    // CARICA SHOP CON CONFIG E SLOT DLIBERI
    const shop = await shopRepository.findById(input.shopId);
    if (!shop) throw new Error("SHOP_NOT_FOUND");

    // SE NO CARICA
    const service = await shopRepository.findServicesById(input.serviceId);
    if (!service) throw new Error("SERVICE_NOT_FOUND");

    // CARICA PRENOTAZIONI E SLOT BLOCCATI DEL MESE
    const [bookings, blockedSlots, dateExceptions] = await Promise.all([
      bookingRepository.findActiveBookingsByMonth(input.shopId, year, month),
      bookingRepository.findBlockedSlotsByMonth(input.shopId, year, month),
      bookingRepository.findDateExceptionsByMonth(input.shopId, year, month),
    ]);

    // GENERAZIONE SLOT PER OGNI GIORNO DEL MESE
    const result: Record<
      string,
      { time: string; status: "free" | "pending" | "confirmed" }[]
    > = {};
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);

      // SALTA GIORNI PASSATI
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date < today) continue;

      // CHECK SE IL BARBIERE LAVORA QUEL GIORNO - CHIUISURA FERIE MALATTIA
      const dayOfWeek = date.getDay();
      const dateStr = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

      // CONTROLLA SE ESISTE UN'ECCEZIONE PER QUESTA DATA
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

      // SE ECCEZIONE CHIUSO SALTA IL GIORNO
      if (exception && !exception.isOpen) continue;

      // SE ECCEZIONE APERTO
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

      // OTTIENI CONFIG SLOT
      const slotInterval = shop.config?.slotInterval ?? 30;
      const slotMode = shop.config?.slotMode ?? "FIXED";

      // GENERALI
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

      // RIMUOVI DUPLICATI E ORDINA
      allSlots = [...new Set(allSlots)].sort();

      // FLITRA SLOT OCCUPATI
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

      // RM SLOT OCCUPATI
      allSlots = allSlots.filter((slot) => {
        const [slotHour, slotMin] = slot.split(":").map(Number);
        const slotStart = new Date(
          Date.UTC(year, month - 1, day, slotHour, slotMin),
        );
        const slotEnd = new Date(
          slotStart.getTime() + service.duration * 60000,
        );

        // CONTROLLA SOVRAPPOSIZIONE CON PRENOTAZIONI
        const isBooked = dayBookings.some((b) => {
          const bStart = new Date(b.startAt);
          const bEnd = new Date(b.endAt);

          return slotStart < bEnd && slotEnd > bStart;
        });

        // CONTROLLA SOVRAPPOSIZIONE CON SLOT BLOCCATI
        const isBlocked = dayBlocked.some((b) => {
          const bStart = new Date(b.startAt);
          const bEnd = new Date(b.endAt);
          return slotStart < bEnd && slotEnd > bStart;
        });

        return !isBooked && !isBlocked;
      });

      // MODALITà DYNAMIC RICALCOLA SLOT DOPO PRENOTAZIONE
      if (slotMode === "DYNAMIC" && dayBookings.length > 0) {
        // ORDINA PRENOTAZIONI PER ORARIO
        const sortedBookings = [...dayBookings].sort(
          (a, b) =>
            new Date(a.startAt).getTime() - new Date(b.startAt).getTime(),
        );

        // AGGIUNGI SLOT DOPO OGNI PRENOTAZIONE
        const dynamicSlots: string[] = [];
        for (const booking of sortedBookings) {
          const endAt = new Date(booking.endAt);
          const endHour = endAt.getHours();
          const endMin = endAt.getMinutes();
          const endSlot = `${endHour.toString().padStart(2, "0")}:${endMin.toString().padStart(2, "0")}`;

          // CONTROLLA SE QUESTO SLOT È GIÀ NELLA LISTA
          if (!allSlots.includes(endSlot)) {
            // VERIFICA CHE CI SIA SPAZIO PER IL SERVIZIO
            const [endSlotHour, endSlotMin] = endSlot.split(":").map(Number);
            const slotStart = new Date(
              Date.UTC(year, month - 1, day, endSlotHour, endSlotMin),
            );

            const slotEnd = new Date(
              slotStart.getTime() + service.duration * 60000,
            );
            // CONTROLLA SE LO SLOT DINAMICO RIENTRA IN ALMENO UNA FASCIA ORARIA
            const fitsInAvailability = availabilities.some((av) => {
              const [availEndHour, availEndMin] = av.endTime
                .split(":")
                .map(Number);
              const availEnd = new Date(
                Date.UTC(year, month - 1, day, availEndHour, availEndMin),
              );

              return slotEnd <= availEnd;
            });

            if (fitsInAvailability) {
              dynamicSlots.push(endSlot);
            }
          }
        }

        allSlots = [...new Set([...allSlots, ...dynamicSlots])].sort();
      }

      const dateKey = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

      const freeSlots = allSlots.map((time) => ({
        time,
        status: "free" as const,
      }));

      const bookedSlots = dayBookings.map((b) => {
        const bookingDate = new Date(b.startAt);
        const hour = bookingDate.getUTCHours().toString().padStart(2, "0");
        const min = bookingDate.getUTCMinutes().toString().padStart(2, "0");
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

      if (allWithStatus.length > 0) {
        result[dateKey] = allWithStatus;
      }
    }

    return result;
  },
  // =========================================

  // =========================================
  //                LOCK SLOT
  // =========================================
  async lockSlot(input: LockSlotInput) {
    const startAt = new Date(input.startAt);

    // CONTROLLA SE EMAIL HA GIA' PRENOTAZIONE ATTIVA
    if (input.customer.email) {
      const existing = await bookingRepository.findActiveBookingByEmail(
        input.customer.email,
        input.shopId,
      );
      if (existing) throw new Error("CUSTOMER_ALREADY_HAS_BOOKING");
    }

    // CONTROLLA SE TELEFONO HA GIA' PRENOTAZIONE ATTIVA
    if (input.customer.phone) {
      const existing = await bookingRepository.findActiveBookingByPhone(
        input.customer.phone,
        input.shopId,
      );
      if (existing) throw new Error("CUSTOMER_ALREADY_HAS_BOOKING");
    }

    // CARICA SERVIZIO
    const service = await shopRepository.findServicesById(input.serviceId);
    if (!service) throw new Error("SERVICE_NOT_FOUND");

    const endAt = new Date(startAt.getTime() + service.duration * 60000);

    // CREA O TROVA CUSTOMER
    const customer = await bookingRepository.findOrCreateCustomer(
      input.customer,
    );

    // GENERA OTP
    const otpCode = generateOTP();
    const hashedOtp = await bcrypt.hash(otpCode, 10);
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    const lockedAt = new Date();
    const lockedUntil = otpExpiresAt;

    // GESTIONE RICORRENZA
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

    // MANDA OTP VIA EMAIL
    if (input.customer.email) {
      await notificationService.sendOtp({
        to: input.customer.email,
        firstName: input.customer.firstName,
        otpCode,
        expiresInMinutes: 5,
      });
    }

    // WEBSOCKET
    io.to(input.shopId).emit("slot:locked", {
      shopId: input.shopId,
      startAt: startAt.toISOString(),
      endAt: endAt.toISOString(),
    });

    // TROVA PRENOTAZIONE APPENA CREATA
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
  //                COFNERMA OTP
  // =========================================
  async confirmOtp(input: ConfirmOtpInput) {
    const booking = await bookingRepository.findById(input.bookingId);

    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    if (booking.status !== "PENDING") throw new Error("BOOKING_NOT_PENDING");

    // CONTROLLA SCADENZA OTP
    if (!booking.otpExpiresAt || booking.otpExpiresAt < new Date()) {
      throw new Error("OTP_EXPIRED");
    }

    // VERIFICA OTP
    if (!booking.otpCode) throw new Error("OTP_NOT_FOUND");
    const isValid = await bcrypt.compare(input.otpCode, booking.otpCode);
    if (!isValid) throw new Error("OTP_INVALID");

    // CONFERMA PRENOTAZIONE
    const confirmed = await bookingRepository.confirmBooking(input.bookingId);

    // GENERA CANCEL URL
    const cancelUrl = `${env.CLIENT_URL}/cancel/${booking.id}`;

    // NOTIFICA CLIENTE SE HA EMAIL
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

    // NOTIFICA BARBIERE
    console.log("📧 Nuova prenotazione confermata:", {
      customer: `${booking.customer.firstName} ${booking.customer.lastName}`,
      service: booking.service.name,
      startAt: booking.startAt.toLocaleString("it-IT", {
        timeZone: "Europe/Rome",
      }),
    });

    // EMETTE EVENTO WEBSOCKET
    io.to(booking.shopId).emit("slot:confirmed", {
      shopId: booking.shopId,
      startAt: booking.startAt.toISOString(),
      endAt: booking.endAt.toISOString(),
    });

    return confirmed;
  },
  // =========================================

  // =========================================
  //           CANCELLA PRENOTAZIONE
  // =========================================
  async cancelBooking(bookingId: string) {
    const booking = await bookingRepository.findById(bookingId);

    if (!booking) throw new Error("BOOKING_NOT_FOUND");

    // CONTROLLA SE LA CANCELLAZIONE È CONSENTITA  2 ORE PRIMA
    const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
    if (booking.startAt < twoHoursFromNow) {
      throw new Error("CANCELLATION_NOT_ALLOWED");
    }

    await bookingRepository.updateStatus(bookingId, "CANCELLED");

    // EMETTE EVENTO WEBSOCKET
    io.to(booking.shopId).emit("slot:cancelled", {
      shopId: booking.shopId,
      startAt: booking.startAt.toISOString(),
      endAt: booking.endAt.toISOString(),
    });
  },
  // =========================================
};

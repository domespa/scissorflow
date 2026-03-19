import bcrypt from "bcryptjs";
import { bookingRepository } from "./booking.repository";
import { shopRepository } from "../shop/shop.repository";
import type {
  LockSlotInput,
  ConfirmOtpInput,
  GetMonthSlotsInput,
} from "./booking.schema";
import { io } from "@/server";

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
): string[] => {
  const slots: string[] = [];
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);

  // CONVERTIAMO IN MINUTI
  let current = startHour * 60 + startMin;
  const end = endHour * 60 + endMin;

  // GENERIAMO GL ISLOT
  while (current + duration <= end) {
    const hours = Math.floor(current / 60);
    const mins = current % 60;
    slots.push(
      `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`,
    );
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
    const [bookings, blockedSlots] = await Promise.all([
      bookingRepository.findActiveBookingsByMonth(input.shopId, year, month),
      bookingRepository.findBlockedSlotsByMonth(input.shopId, year, month),
    ]);

    // GENERAZIONE SLOT PER OGNI GIORNO DEL MESE
    const result: Record<string, string[]> = {};
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);

      // SALTA GIORNI PASSATI
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date < today) continue;

      // CHECK SE IL BARBIERE LAVORA QUEL GIORNO - CHIUISURA FERIE MALATTIA
      const dayOfWeek = date.getDay();
      const availabilities = shop.availability.filter(
        (a) => a.dayOfWeek === dayOfWeek && a.isActive,
      );

      if (availabilities.length === 0) continue;

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
        const slotStart = new Date(year, month - 1, day, slotHour, slotMin);
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
              year,
              month - 1,
              day,
              endSlotHour,
              endSlotMin,
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
                year,
                month - 1,
                day,
                availEndHour,
                availEndMin,
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

      if (allSlots.length > 0) {
        result[
          `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
        ] = allSlots;
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

    // CONTROLLA SE EMAIL O TELEFONO HANNO GIA' PRENOTAZIONE ATTIVA
    if (input.customer.email) {
      const existing = await bookingRepository.findActiveBookingByEmail(
        input.customer.email,
        input.shopId,
      );
      if (existing) throw new Error("CUSTOMER_ALREADY_HAS_BOOKING");
    }

    if (input.customer.phone) {
      const existing = await bookingRepository.findActiveBookingByPhone(
        input.customer.phone,
        input.shopId,
      );
      if (existing) throw new Error("CUSTOMER_ALREADY_HAS_BOOKING");
    }

    // CARICA SERVIZIO PER CALCOLARE endAt
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

      // CREA TUTTE LE PRENOTAZIONI RICORRENTI
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
      // PRENOTAZIONE SINGOLA
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

    // EMETTE EVENTO WEBSOCKET  CON AGGIORNAMENTO CALENDARIO IN REALTIME
    io.to(input.shopId).emit("slot:locked", {
      shopId: input.shopId,
      startAt: startAt.toISOString(),
      endAt: endAt.toISOString(),
    });

    return {
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

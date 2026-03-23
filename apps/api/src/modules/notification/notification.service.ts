import { Resend } from "resend";
import { env } from "@/config/env";

const resend = new Resend(env.RESEND_API_KEY);

export const notificationService = {
  // =========================================
  //            OTP AL CLIENTE
  // =========================================
  async sendOtp(data: {
    to: string;
    firstName: string;
    otpCode: string;
    expiresInMinutes: number;
  }) {
    await resend.emails.send({
      from: env.EMAIL_FROM,
      to: data.to,
      subject: "Il tuo codice di conferma - ScissorFlow",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Ciao ${data.firstName}!</h2>
          <p>Hai quasi finito. Inserisci questo codice per confermare la tua prenotazione:</p>
          <div style="background: #f5f5f5; border-radius: 8px; padding: 24px; text-align: center; margin: 24px 0;">
            <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #1a1a1a;">
              ${data.otpCode}
            </span>
          </div>
          <p style="color: #666; font-size: 14px;">
            Il codice scade tra <strong>${data.expiresInMinutes} minuti</strong>.
            Se non hai richiesto questa prenotazione, ignora questa email.
          </p>
        </div>
      `,
    });
  },
  // =========================================

  // =========================================
  //      CONFERMA PRENOTAZIONE AL CLIENTE
  // =========================================
  async sendBookingConfirmedToCustomer(data: {
    to: string;
    firstName: string;
    shopName: string;
    serviceName: string;
    startAt: Date;
    cancelUrl: string;
  }) {
    const date = data.startAt.toLocaleDateString("it-IT", {
      timeZone: "Europe/Rome",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = data.startAt.toLocaleTimeString("it-IT", {
      timeZone: "Europe/Rome",
      hour: "2-digit",
      minute: "2-digit",
    });

    await resend.emails.send({
      from: env.EMAIL_FROM,
      to: data.to,
      subject: `Prenotazione confermata - ${data.shopName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Prenotazione confermata! ✅</h2>
          <p>Ciao <strong>${data.firstName}</strong>, la tua prenotazione è confermata.</p>

          <div style="background: #f5f5f5; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px;"><strong>📍 Dove:</strong> ${data.shopName}</p>
            <p style="margin: 0 0 8px;"><strong>✂️ Servizio:</strong> ${data.serviceName}</p>
            <p style="margin: 0 0 8px;"><strong>📅 Quando:</strong> ${date}</p>
            <p style="margin: 0;"><strong>🕐 Ora:</strong> ${time}</p>
          </div>

          <p style="font-size: 14px; color: #666;">
            Hai bisogno di cancellare?
            <a href="${data.cancelUrl}" style="color: #1a1a1a;">Clicca qui</a>
            (almeno 2 ore prima dell'appuntamento).
          </p>
        </div>
      `,
    });
  },
  // =========================================

  // =========================================
  //      NUOVA PRENOTAZIONE AL BARBIERE
  // =========================================
  async sendNewBookingToBarbier(data: {
    to: string;
    customerName: string;
    serviceName: string;
    startAt: Date;
  }) {
    const date = data.startAt.toLocaleDateString("it-IT", {
      timeZone: "Europe/Rome",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = data.startAt.toLocaleTimeString("it-IT", {
      timeZone: "Europe/Rome",
      hour: "2-digit",
      minute: "2-digit",
    });

    await resend.emails.send({
      from: env.EMAIL_FROM,
      to: data.to,
      subject: `Nuova prenotazione - ${data.customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Nuova prenotazione! 🎉</h2>

          <div style="background: #f5f5f5; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px;"><strong>👤 Cliente:</strong> ${data.customerName}</p>
            <p style="margin: 0 0 8px;"><strong>✂️ Servizio:</strong> ${data.serviceName}</p>
            <p style="margin: 0 0 8px;"><strong>📅 Data:</strong> ${date}</p>
            <p style="margin: 0;"><strong>🕐 Ora:</strong> ${time}</p>
          </div>
        </div>
      `,
    });
  },
  // =========================================

  // =========================================
  //        REMINDER AL CLIENTE
  // =========================================
  async sendReminder(data: {
    to: string;
    firstName: string;
    shopName: string;
    serviceName: string;
    startAt: Date;
    cancelUrl: string;
    hoursUntil: number;
  }) {
    const time = data.startAt.toLocaleTimeString("it-IT", {
      timeZone: "Europe/Rome",
      hour: "2-digit",
      minute: "2-digit",
    });

    await resend.emails.send({
      from: env.EMAIL_FROM,
      to: data.to,
      subject: `Promemoria - ${data.hoursUntil === 24 ? "domani" : "tra 2 ore"} hai un appuntamento`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">
            ${data.hoursUntil === 24 ? "📅 Domani hai un appuntamento!" : "⏰ Tra 2 ore hai un appuntamento!"}
          </h2>
          <p>Ciao <strong>${data.firstName}</strong>, ti ricordiamo il tuo appuntamento:</p>

          <div style="background: #f5f5f5; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px;"><strong>📍 Dove:</strong> ${data.shopName}</p>
            <p style="margin: 0 0 8px;"><strong>✂️ Servizio:</strong> ${data.serviceName}</p>
            <p style="margin: 0;"><strong>🕐 Ora:</strong> ${time}</p>
          </div>

          ${
            data.hoursUntil === 24
              ? `
          <p style="font-size: 14px; color: #666;">
            Non puoi venire?
            <a href="${data.cancelUrl}" style="color: #1a1a1a;">Cancella qui</a>
            (almeno 2 ore prima).
          </p>
          `
              : ""
          }
        </div>
      `,
    });
  },
  // =========================================

  // =========================================
  //      RIEPILOGO MATTUTINO AL BARBIERE
  // =========================================
  async sendDailySummary(data: {
    to: string;
    shopName: string;
    date: Date;
    bookings: Array<{
      customerName: string;
      serviceName: string;
      time: string;
    }>;
  }) {
    const dateStr = data.date.toLocaleDateString("it-IT", {
      timeZone: "Europe/Rome",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const bookingsList = data.bookings
      .map(
        (b) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${b.time}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${b.customerName}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${b.serviceName}</td>
        </tr>
      `,
      )
      .join("");

    await resend.emails.send({
      from: env.EMAIL_FROM,
      to: data.to,
      subject: `📋 Appuntamenti di oggi - ${dateStr}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Buongiorno! ☀️</h2>
          <p>Ecco i tuoi appuntamenti di oggi per <strong>${data.shopName}</strong>:</p>

          ${
            data.bookings.length === 0
              ? `
            <p style="color: #666;">Nessun appuntamento per oggi.</p>
          `
              : `
            <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
              <thead>
                <tr style="background: #f5f5f5;">
                  <th style="padding: 8px; text-align: left;">Ora</th>
                  <th style="padding: 8px; text-align: left;">Cliente</th>
                  <th style="padding: 8px; text-align: left;">Servizio</th>
                </tr>
              </thead>
              <tbody>
                ${bookingsList}
              </tbody>
            </table>
            <p style="color: #666; font-size: 14px;">
              Totale appuntamenti: <strong>${data.bookings.length}</strong>
            </p>
          `
          }
        </div>
      `,
    });
  },
  // =========================================
};

import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app";
import { env } from "./config/env";
import { expireBookingsJob } from "./jobs/expireBookings.job";
import { completeBookingsJob } from "./jobs/completeBookings.job";
import { sendRemindersJob } from "./jobs/sendReminders.job";
import { dailySummaryJob } from "./jobs/dailySummary.job";

// CREAZIONE SERVER
const httpServer = createServer(app);

// INIZZIALIZZO SOCKER.IO
const io = new Server(httpServer, {
  cors: {
    origin: env.CLIENT_URL,
    credentials: true,
  },
});

// GESTIONE CONNESSIONI WEBSOCKET
io.on("connection", (socket) => {
  console.log(`🌍 Client connesso: ${socket.id}`);

  // CLIENTE ENTRA NELLA STANZA
  socket.on("join:shop", (shopId: string) => {
    socket.join(shopId);
    console.log(`👤 Cliente ${socket.id} entrato in shop: ${shopId}`);
  });

  // QUANDO SI DISCONNETTE
  socket.on("diconnect", () => {
    console.log(`🔴 Client disconnesso: ${socket.id}`);
  });
});

// AVVIO SCHELUDE
expireBookingsJob.start();
completeBookingsJob.start();
sendRemindersJob.start();
dailySummaryJob.start();

// AVVIO SERVER
httpServer.listen(env.PORT, () => {
  console.log(`👂 Server in ascolto sulla porta ${env.PORT}`);
  console.log(`🏠 Ambiente: ${env.NODE_ENV}`);
  console.log(`🌍 Frontend a: ${env.CLIENT_URL}`);
});

export { io };

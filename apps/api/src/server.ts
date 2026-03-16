import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app";
import { env } from "./config/env";

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

  // QUANDO SI DISCONNETTE
  socket.on("diconnect", () => {
    console.log(`🔴 Client disconnesso: ${socket.id}`);
  });
});

// AVVIO SERVER
httpServer.listen(env.PORT, () => {
  console.log(`👂 Server in ascolto sulla porta ${env.PORT}`);
  console.log(`🏠 Ambiente: ${env.NODE_ENV}`);
  console.log(`🌍 Frontend a: ${env.CLIENT_URL}`);
});

export { io };

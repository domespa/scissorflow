import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") ?? "http://localhost:3000";

// ISTANZA SOCKET.IO PER CONNESSIONE AL BE
export const socket = io(SOCKET_URL, {
  autoConnect: false, // DA CONNETTERE MANUALMENTE
});

// CONNETTI QUANDO IL BARBIERE ENTRA NELLA STANZA DELLO SHOP
export const joinShop = (shopId: string) => {
  if (!socket.connected) {
    socket.connect();
  }
  socket.emit("join:shop", shopId);
};

// DISCONNETTI
export const leaveShop = () => {
  socket.disconnect();
};

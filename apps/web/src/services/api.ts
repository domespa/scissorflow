import axios from "axios";
import { useAuthStore } from "@/store/auth.store";

// ISTANZA AXIOS CON BASE URL
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// INTERCEPTOR REQUEST PER AGGIUNGERE IL TOKEN AD OGNI CHIAMTA
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// INTERCEPTOR RESPONS
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // SE 401 TOKEN SCADUTO
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

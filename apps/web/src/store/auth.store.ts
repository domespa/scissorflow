import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserDTO } from "@scissorflow/shared";

interface AuthState {
  user: UserDTO | null;
  token: string | null;
  isAuthenticated: boolean;

  // AZIONI
  setAuth: (user: UserDTO, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  // PERSIST SALA LO STATO NEL LOCALSTORAGE QUINDI QUANDO IL BARBIERE RICARICA LA PAGINA RESTA LOGGATO
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "scissorflow-auth", // LA CHIAVE NELLO STORAGE
    },
  ),
);

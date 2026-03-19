import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDark: boolean;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      isDark: false,

      toggle: () => {
        const newIsDark = !get().isDark;

        // APPLICA LA CLASSE DARK ALL'ELEMENTO HTML
        if (newIsDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        set({ isDark: newIsDark });
      },
    }),
    {
      name: "scissorflow-theme",
      // RIPRISTINA IL TEMA AL CARICAMENTO
      onRehydrateStorage: () => (state) => {
        if (state?.isDark) {
          document.documentElement.classList.add("dark");
        }
      },
    },
  ),
);

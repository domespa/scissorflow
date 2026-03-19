import { useThemeStore } from "@/store/theme.store";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

export const ThemeToggle = () => {
  const { isDark, toggle } = useThemeStore();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
      title={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
    >
      {isDark ? (
        <SunIcon size={20} weight="bold" />
      ) : (
        <MoonIcon size={20} weight="bold" />
      )}
    </button>
  );
};

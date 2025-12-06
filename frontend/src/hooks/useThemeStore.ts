type Theme = "light" | "dark" | "system";
interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Omit<Theme, "system">;
  init: () => void;
}
import { create } from "zustand";

const useThemeStore = create<ThemeStore>((set) => ({
  theme: (localStorage.getItem("orphacare-theme") as Theme) || "system",
  resolvedTheme: "light",
  setTheme: (theme: Theme) => {
    localStorage.setItem("orphacare-theme", theme);
    set({ theme });
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const active = theme === "system" ? (systemDark ? "dark" : "light") : theme;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(active);

    set({ resolvedTheme: active });
  },
  init: () => {
    const theme =
      (localStorage.getItem("orphacare-theme") as Theme) || "system";
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const active = theme === "system" ? (systemDark ? "dark" : "light") : theme;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(active);

    set({
      theme,
      resolvedTheme: active,
    });
  },
}));

export default useThemeStore;

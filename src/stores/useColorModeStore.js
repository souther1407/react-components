import { create } from "zustand";

export const useColorModeStore = create((set, get) => ({
  mode: "light",
  toggleMode() {
    const currentMode = get().mode;
    set({ mode: currentMode === "light" ? "dark" : "light" });
  },
}));

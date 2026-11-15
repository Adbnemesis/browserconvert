"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Accent = "aurora" | "solardusk";

export interface ThemeOption {
  id: Accent;
  name: string;
  tagline: string;
  colorHex: string;
  bgHex: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  { id: "aurora", name: "Northern Lights", tagline: "Arctic Pine · Aurora Mint", colorHex: "#2dd4bf", bgHex: "#051518" },
  { id: "solardusk", name: "Solar Dusk", tagline: "Smoked Obsidian · Molten Tangerine", colorHex: "#ff6b00", bgHex: "#100d0c" },
];

interface ThemeContextType {
  theme: Theme;
  accent: Accent;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setAccent: (accent: Accent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [accent, setAccentState] = useState<Accent>("aurora");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "light") {
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    } else {
      setThemeState("dark");
      document.documentElement.classList.add("dark");
    }

    const storedAccent = localStorage.getItem("accent") as Accent | null;
    const active: Accent = storedAccent === "solardusk" ? "solardusk" : "aurora";
    setAccentState(active);
    document.documentElement.setAttribute("data-theme", active);
    document.documentElement.setAttribute("data-accent", active);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  const setAccent = (newAccent: Accent) => {
    setAccentState(newAccent);
    localStorage.setItem("accent", newAccent);
    document.documentElement.setAttribute("data-theme", newAccent);
    document.documentElement.setAttribute("data-accent", newAccent);
  };

  return (
    <ThemeContext.Provider value={{ theme, accent, toggleTheme, setTheme, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

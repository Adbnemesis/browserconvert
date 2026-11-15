"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Accent = "green" | "red";

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
  const [accent, setAccentState] = useState<Accent>("green");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Theme (default to dark if not set, for ultra-sleek high-tech look)
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "light") {
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    } else {
      setThemeState("dark");
      document.documentElement.classList.add("dark");
    }

    // 2. Accent color (default to green light / emerald)
    const storedAccent = localStorage.getItem("accent") as Accent | null;
    if (storedAccent === "red") {
      setAccentState("red");
      document.documentElement.setAttribute("data-accent", "red");
    } else {
      setAccentState("green");
      document.documentElement.setAttribute("data-accent", "green");
    }
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

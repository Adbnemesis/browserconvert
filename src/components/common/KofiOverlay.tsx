"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (id: string, config: Record<string, string>) => void;
    };
  }
}

export function KofiOverlay() {
  const { accent, theme } = useTheme();
  const buttonBg = accent === "solardusk" ? "#ea580c" : "#00bfa5";

  useEffect(() => {
    function initKofi() {
      if (typeof window === "undefined" || !window.kofiWidgetOverlay) return;

      // Prevent duplicate overlays
      if (document.querySelector(".floatingchat-container-wrap")) {
        updateButtonColors(buttonBg);
        return;
      }

      window.kofiWidgetOverlay.draw("nemistory", {
        type: "floating-chat",
        "floating-chat.donateButton.text": "Support me",
        "floating-chat.donateButton.background-color": buttonBg,
        "floating-chat.donateButton.text-color": "#fff",
      });

      // Apply initial styling once rendered
      setTimeout(() => updateButtonColors(buttonBg), 500);
      setTimeout(() => updateButtonColors(buttonBg), 1500);
    }

    const existingScript = document.getElementById("kofi-overlay-script") as HTMLScriptElement | null;
    if (existingScript) {
      if (window.kofiWidgetOverlay) {
        initKofi();
      } else {
        existingScript.addEventListener("load", initKofi);
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "kofi-overlay-script";
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = initKofi;
    document.body.appendChild(script);
  }, []);

  // Dynamically update the Ko-fi button background to match Aurora / Solar Dusk theme & light/dark mode
  useEffect(() => {
    updateButtonColors(buttonBg);
    const interval = setInterval(() => updateButtonColors(buttonBg), 300);
    const timeout = setTimeout(() => clearInterval(interval), 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [accent, theme, buttonBg]);

  return null;
}

function updateButtonColors(bgColor: string) {
  if (typeof document === "undefined") return;

  const iframes = document.querySelectorAll<HTMLIFrameElement>(
    ".floatingchat-container, .floatingchat-container-mobi"
  );

  iframes.forEach((iframe) => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      const btn = doc?.querySelector<HTMLElement>(
        ".floatingchat-donate-button, [id*='donate-button']"
      );
      if (btn) {
        btn.style.backgroundColor = bgColor;
        btn.style.transition = "background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease";
      }
    } catch {
      // In case cross-origin sandbox restrictions occur
    }
  });
}

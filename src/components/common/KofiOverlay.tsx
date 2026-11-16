"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme/ThemeProvider";
import { getLocaleFromPathname, getTranslations } from "@/i18n";

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (id: string, config: Record<string, string>) => void;
    };
  }
}

export function KofiOverlay() {
  const { accent, theme } = useTheme();
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const t = getTranslations(currentLocale);

  const buttonBg = accent === "solardusk" ? "#ea580c" : "#00bfa5";
  const buttonText = t.kofi.overlayButton || "Support me";

  useEffect(() => {
    function initKofi() {
      if (typeof window === "undefined" || !window.kofiWidgetOverlay) return;

      // If already drawn, just update text and color
      if (document.querySelector(".floatingchat-container-wrap")) {
        updateButton(buttonBg, buttonText);
        return;
      }

      window.kofiWidgetOverlay.draw("nemistory", {
        type: "floating-chat",
        "floating-chat.donateButton.text": buttonText,
        "floating-chat.donateButton.background-color": buttonBg,
        "floating-chat.donateButton.text-color": "#fff",
      });

      // Apply initial styling once rendered
      setTimeout(() => updateButton(buttonBg, buttonText), 500);
      setTimeout(() => updateButton(buttonBg, buttonText), 1500);
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

  // Dynamically update the Ko-fi button background & text on theme/locale change
  useEffect(() => {
    updateButton(buttonBg, buttonText);
    const interval = setInterval(() => updateButton(buttonBg, buttonText), 400);
    const timeout = setTimeout(() => clearInterval(interval), 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [accent, theme, buttonBg, buttonText]);

  return null;
}

function updateButton(bgColor: string, text: string) {
  if (typeof document === "undefined") return;

  const iframes = document.querySelectorAll<HTMLIFrameElement>(
    ".floatingchat-container, .floatingchat-container-mobi"
  );

  iframes.forEach((iframe) => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;

      const btn = doc.querySelector<HTMLElement>(
        ".floatingchat-donate-button, [id*='donate-button']"
      );
      if (btn) {
        btn.style.backgroundColor = bgColor;
        btn.style.transition = "background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease";

        // Find the text node or span inside the donate button
        const textElem = btn.querySelector<HTMLElement>(
          ".floatingchat-donate-button-text, .kofi-text, span, div[class*='text']"
        );
        if (textElem && textElem.textContent !== text) {
          textElem.textContent = text;
        } else if (!textElem) {
          // Check child nodes
          for (let i = 0; i < btn.childNodes.length; i++) {
            const node = btn.childNodes[i];
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue && node.nodeValue.trim().length > 0) {
              node.nodeValue = ` ${text} `;
              break;
            }
          }
        }
      }
    } catch {
      // In case cross-origin sandbox restrictions occur
    }
  });
}

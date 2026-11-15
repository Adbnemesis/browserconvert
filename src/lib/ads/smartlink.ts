"use client";

export const ADSTERRA_SMARTLINK_URL =
  "https://araplhn.org/4/629b4b300aa93e11ca0ad71700354341";

/**
 * Triggers the Adsterra Smartlink in a new tab synchronously when the user clicks Download.
 * Because this is invoked directly inside a trusted user click gesture, browsers allow
 * the new tab to open seamlessly alongside the file download.
 */
export function triggerSmartlink() {
  if (typeof window === "undefined") return;

  try {
    window.open(ADSTERRA_SMARTLINK_URL, "_blank", "noopener,noreferrer");
  } catch (err) {
    console.error("[Smartlink] Failed to open link:", err);
  }
}

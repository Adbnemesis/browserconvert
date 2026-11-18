import { siteConfig } from "@/lib/config/site";

export const LOCALES = ["en", "es", "pt", "fr", "de", "it"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  htmlLang: string;
  region: string;
}

export const LOCALE_CONFIG: Record<Locale, LocaleInfo> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    htmlLang: "en-US",
    region: "US",
  },
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    htmlLang: "es-ES",
    region: "ES",
  },
  pt: {
    code: "pt",
    name: "Portuguese (Brazil)",
    nativeName: "Português",
    flag: "🇧🇷",
    htmlLang: "pt-BR",
    region: "BR",
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    htmlLang: "de-DE",
    region: "DE",
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    htmlLang: "fr-FR",
    region: "FR",
  },
  it: {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    htmlLang: "it-IT",
    region: "IT",
  },
};

const NON_DEFAULT_LOCALES = ["es", "pt", "fr", "de", "it"] as const;

/**
 * Returns the locale extracted from a pathname (e.g. "/es/mp4-to-mp3" -> "es")
 */
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && (NON_DEFAULT_LOCALES as readonly string[]).includes(segments[0])) {
    return segments[0] as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Strips the locale prefix from a pathname (e.g. "/es/mp4-to-mp3" -> "/mp4-to-mp3")
 */
export function getCanonicalPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && (NON_DEFAULT_LOCALES as readonly string[]).includes(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "";
  }
  return pathname === "/" ? "" : pathname;
}

export const VALID_CANONICAL_ROUTES = new Set([
  "",
  "/",
  "/audio-converter",
  "/mp4-to-mp3",
  "/wav-to-mp3",
  "/m4a-to-mp3",
  "/flac-to-mp3",
  "/mov-to-mp3",
  "/mp3-to-wav",
  "/ogg-to-mp3",
  "/opus-to-mp3",
  "/aac-to-mp3",
  "/audio-cutter",
  "/audio-compressor",
  "/audio-merger",
  "/audio-volume-adjuster",
  "/audio-speed-changer",
  "/audio-bitrate-changer",
  "/format-guide",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
]);

/**
 * Constructs a localized path for a given locale and canonical path.
 * If the path is not a recognized canonical route, falls back to the locale homepage.
 */
export function getLocalizedPath(locale: Locale, canonicalPath: string): string {
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : canonicalPath ? `/${canonicalPath}` : "";
  const pathToCheck = cleanPath || "/";
  if (!VALID_CANONICAL_ROUTES.has(pathToCheck) && !VALID_CANONICAL_ROUTES.has(cleanPath)) {
    return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
  }
  if (locale === DEFAULT_LOCALE) {
    return cleanPath || "/";
  }
  return `/${locale}${cleanPath}`;
}

/**
 * Generates the Next.js metadata alternates.languages dictionary
 * for bi-directional hreflang annotations.
 */
export function getHreflangAlternates(canonicalPath: string): Record<string, string> {
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : canonicalPath ? `/${canonicalPath}` : "";
  return {
    "x-default": `${siteConfig.url}${cleanPath || "/"}`,
    en: `${siteConfig.url}${cleanPath || "/"}`,
    es: `${siteConfig.url}/es${cleanPath}`,
    pt: `${siteConfig.url}/pt${cleanPath}`,
    fr: `${siteConfig.url}/fr${cleanPath}`,
    de: `${siteConfig.url}/de${cleanPath}`,
    it: `${siteConfig.url}/it${cleanPath}`,
  };
}

import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { LOCALES, DEFAULT_LOCALE, getLocalizedPath } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  // Routes available across all 6 supported locales
  const localizedRoutes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/audio-converter", changeFrequency: "daily" as const, priority: 0.95 },
    { path: "/mp4-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/wav-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/m4a-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/audio-cutter", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-compressor", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-merger", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-volume-adjuster", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-speed-changer", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-bitrate-changer", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/format-guide", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  // English-only long-tail routes
  const englishOnlyRoutes = [
    { path: "/mov-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/mp3-to-wav", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/flac-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/ogg-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/opus-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/aac-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  const releaseDate = new Date("2026-11-16T00:00:00.000Z");

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate multilingual sitemap entries for localized routes
  for (const route of localizedRoutes) {
    // Generate alternate languages dictionary
    const languages: Record<string, string> = {
      "x-default": `${siteConfig.url}${route.path || "/"}`,
      en: `${siteConfig.url}${route.path || "/"}`,
      es: `${siteConfig.url}/es${route.path}`,
      pt: `${siteConfig.url}/pt${route.path}`,
      de: `${siteConfig.url}/de${route.path}`,
      fr: `${siteConfig.url}/fr${route.path}`,
      it: `${siteConfig.url}/it${route.path}`,
    };

    // Push entries for each supported locale
    for (const locale of LOCALES) {
      const localeUrl = getLocalizedPath(locale, route.path);
      sitemapEntries.push({
        url: `${siteConfig.url}${localeUrl}`,
        lastModified: releaseDate,
        changeFrequency: route.changeFrequency,
        priority: locale === DEFAULT_LOCALE ? route.priority : Number((route.priority * 0.95).toFixed(2)),
        alternates: { languages },
      });
    }
  }

  // English-only routes
  for (const route of englishOnlyRoutes) {
    sitemapEntries.push({
      url: `${siteConfig.url}${route.path}`,
      lastModified: releaseDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  return sitemapEntries;
}

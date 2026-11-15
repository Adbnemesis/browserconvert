import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/audio-converter", changeFrequency: "daily" as const, priority: 0.95 },
    { path: "/mp4-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/wav-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/m4a-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/mov-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/mp3-to-wav", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/flac-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/ogg-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/opus-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/aac-to-mp3", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/audio-cutter", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-merger", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-compressor", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-bitrate-changer", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-speed-changer", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/audio-volume-adjuster", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/format-guide", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  // Deterministic last modified date to preserve caching and crawl reliability
  const releaseDate = new Date("2026-11-15T00:00:00.000Z");

  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: releaseDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

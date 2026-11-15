import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/audio-converter",
    "/mp4-to-mp3",
    "/wav-to-mp3",
    "/m4a-to-mp3",
    "/mov-to-mp3",
    "/mp3-to-wav",
    "/flac-to-mp3",
    "/ogg-to-mp3",
    "/opus-to-mp3",
    "/aac-to-mp3",
    "/audio-cutter",
    "/audio-merger",
    "/audio-compressor",
    "/audio-bitrate-changer",
    "/audio-speed-changer",
    "/audio-volume-adjuster",
    "/format-guide",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("-to-") ? 0.9 : 0.8,
  }));
}

import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { HomeView } from "@/components/views/HomeView";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Free Online Audio Converter & Video to Audio Extractor",
  description:
    "Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser processing. No uploads, no limits.",
  alternates: {
    canonical: siteConfig.url,
    languages: getHreflangAlternates(""),
  },
  openGraph: {
    title: "Free Online Audio Converter & Video to Audio Extractor",
    description:
      "Convert audio files and extract audio from MP4, MOV, and MKV videos online for free. 100% private in-browser processing.",
    url: siteConfig.url,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrowserConvert - Free Online Audio Converter & Video to Audio",
    description:
      "Convert audio files and extract audio from videos directly in your browser. 100% private, free, and fast.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function HomePage() {
  return <HomeView locale="en" />;
}

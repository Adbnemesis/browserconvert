import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { FormatGuideView } from "@/components/views/FormatGuideView";

export const metadata: Metadata = {
  title: "Audio Format Guide - Compare MP3, WAV, M4A, FLAC, OGG, OPUS",
  description:
    "Comprehensive audio format comparison guide. Learn the differences between MP3, WAV, FLAC, M4A, AAC, OGG, and OPUS for music, podcasts, and sound production.",
  alternates: {
    canonical: `${siteConfig.url}/format-guide`,
  },
  openGraph: {
    title: "Audio Format Guide - Compare MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Learn the differences between MP3, WAV, FLAC, M4A, AAC, OGG, and OPUS for audio quality, file size, and compatibility.",
    url: `${siteConfig.url}/format-guide`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Format Guide - Compare MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Technical codec and container comparison guide for audio producers, podcasters, and listeners.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FormatGuidePage() {
  return <FormatGuideView locale="en" />;
}

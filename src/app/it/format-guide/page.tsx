import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { FormatGuideView } from "@/components/views/FormatGuideView";

export const metadata: Metadata = {
  title: "Guida ai formati audio - Confronto tra MP3, WAV, M4A, FLAC, OGG e OPUS",
  description: "Guida tecnica completa ai formati audio. Scopri le differenze tra MP3, WAV, FLAC, M4A, AAC, OGG e OPUS.",
  alternates: {
    canonical: `${siteConfig.url}/it/format-guide`,
  },
  openGraph: {
    title: "Guida ai formati audio - Confronto tra MP3, WAV, M4A, FLAC, OGG e OPUS",
    description: "Guida tecnica completa ai formati audio. Scopri le differenze tra MP3, WAV, FLAC, M4A, AAC, OGG e OPUS.",
    url: `${siteConfig.url}/it/format-guide`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guida ai formati audio - Confronto tra MP3, WAV, M4A, FLAC, OGG e OPUS",
    description: "Guida tecnica completa ai formati audio. Scopri le differenze tra MP3, WAV, FLAC, M4A, AAC, OGG e OPUS.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FormatGuidePage() {
  return <FormatGuideView locale="it" />;
}

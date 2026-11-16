import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { FormatGuideView } from "@/components/views/FormatGuideView";

export const metadata: Metadata = {
  title: "Guide des formats audio - Comparatif MP3, WAV, M4A, FLAC, OGG, OPUS",
  description: "Guide comparatif des formats audio. Découvrez les différences entre MP3, WAV, FLAC, M4A, AAC, OGG et OPUS.",
  alternates: {
    canonical: `${siteConfig.url}/fr/format-guide`,
  },
  openGraph: {
    title: "Guide des formats audio - Comparatif MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Guide comparatif des formats audio. Découvrez les différences entre MP3, WAV, FLAC, M4A, AAC, OGG et OPUS.",
    url: `${siteConfig.url}/fr/format-guide`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide des formats audio - Comparatif MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Guide comparatif des formats audio. Découvrez les différences entre MP3, WAV, FLAC, M4A, AAC, OGG et OPUS.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FormatGuidePage() {
  return <FormatGuideView locale="fr" />;
}

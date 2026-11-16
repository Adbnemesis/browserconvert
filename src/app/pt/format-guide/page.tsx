import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { FormatGuideView } from "@/components/views/FormatGuideView";

export const metadata: Metadata = {
  title: "Guia de formatos de áudio - Compare MP3, WAV, M4A, FLAC, OGG e OPUS",
  description: "Guia completo de formatos de áudio. Compare MP3, WAV, FLAC, M4A, AAC, OGG e OPUS.",
  alternates: {
    canonical: `${siteConfig.url}/pt/format-guide`,
  },
  openGraph: {
    title: "Guia de formatos de áudio - Compare MP3, WAV, M4A, FLAC, OGG e OPUS",
    description: "Guia completo de formatos de áudio. Compare MP3, WAV, FLAC, M4A, AAC, OGG e OPUS.",
    url: `${siteConfig.url}/pt/format-guide`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia de formatos de áudio - Compare MP3, WAV, M4A, FLAC, OGG e OPUS",
    description: "Guia completo de formatos de áudio. Compare MP3, WAV, FLAC, M4A, AAC, OGG e OPUS.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FormatGuidePage() {
  return <FormatGuideView locale="pt" />;
}

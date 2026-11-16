import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { FormatGuideView } from "@/components/views/FormatGuideView";

export const metadata: Metadata = {
  title: "Guía de formatos de audio - Comparativa de MP3, WAV, M4A, FLAC, OGG, OPUS",
  description: "Guía completa de formatos de audio. Conoce las diferencias entre MP3, WAV, FLAC, M4A, AAC, OGG y OPUS.",
  alternates: {
    canonical: `${siteConfig.url}/es/format-guide`,
  },
  openGraph: {
    title: "Guía de formatos de audio - Comparativa de MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Guía completa de formatos de audio. Conoce las diferencias entre MP3, WAV, FLAC, M4A, AAC, OGG y OPUS.",
    url: `${siteConfig.url}/es/format-guide`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guía de formatos de audio - Comparativa de MP3, WAV, M4A, FLAC, OGG, OPUS",
    description: "Guía completa de formatos de audio. Conoce las diferencias entre MP3, WAV, FLAC, M4A, AAC, OGG y OPUS.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FormatGuidePage() {
  return <FormatGuideView locale="es" />;
}

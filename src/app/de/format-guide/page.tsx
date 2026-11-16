import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { FormatGuideView } from "@/components/views/FormatGuideView";

export const metadata: Metadata = {
  title: "Audioformat-Leitfaden - MP3, WAV, M4A, FLAC, OGG, OPUS im Vergleich",
  description: "Umfassender Vergleich gängiger Audioformate. Erfahren Sie die Unterschiede zwischen MP3, WAV, FLAC, M4A, AAC, OGG und OPUS.",
  alternates: {
    canonical: `${siteConfig.url}/de/format-guide`,
  },
  openGraph: {
    title: "Audioformat-Leitfaden - MP3, WAV, M4A, FLAC, OGG, OPUS im Vergleich",
    description: "Umfassender Vergleich gängiger Audioformate. Erfahren Sie die Unterschiede zwischen MP3, WAV, FLAC, M4A, AAC, OGG und OPUS.",
    url: `${siteConfig.url}/de/format-guide`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audioformat-Leitfaden - MP3, WAV, M4A, FLAC, OGG, OPUS im Vergleich",
    description: "Umfassender Vergleich gängiger Audioformate. Erfahren Sie die Unterschiede zwischen MP3, WAV, FLAC, M4A, AAC, OGG und OPUS.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FormatGuidePage() {
  return <FormatGuideView locale="de" />;
}

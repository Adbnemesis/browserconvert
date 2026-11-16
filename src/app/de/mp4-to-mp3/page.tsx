import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { Film, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "MP4 in MP3 umwandeln - Video zu Audio Konverter kostenlos",
  description:
    "MP4 in MP3 kostenlos online umwandeln. Extrahieren Sie Audio aus MP4-Videos direkt in Ihrem Browser mit bis zu 320 kbps. 100% Datenschutz, kein Server-Upload.",
  alternates: {
    canonical: `${siteConfig.url}/de/mp4-to-mp3`,
    languages: getHreflangAlternates("/mp4-to-mp3"),
  },
  openGraph: {
    title: "MP4 in MP3 umwandeln - Video zu Audio Konverter kostenlos",
    description: "Extrahieren Sie hochwertige MP3-Tonspuren aus MP4-Videos direkt im Browser.",
    url: `${siteConfig.url}/de/mp4-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4 in MP3 umwandeln - BrowserConvert",
    description: "Extrahieren Sie Audio aus MP4-Videos direkt im Browser mit 100% lokaler Privatsphäre.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanMp4ToMp3Page() {
  const faqs = [
    {
      q: "Verschlechtert die Umwandlung von MP4 in MP3 die Tonqualität?",
      a: "BrowserConvert extrahiert die Audiospur und kodiert sie mit libmp3lame. Bei 192 oder 320 kbps entspricht die Audioqualität praktisch dem Originalton des Videos.",
    },
    {
      q: "Wird mein MP4-Video auf einen Server hochgeladen?",
      a: "Nein. Der gesamte Vorgang läuft lokal in Ihrem Browser via WebAssembly. Ihre Videodatei bleibt auf Ihrem Gerät und wird nie über das Internet übertragen.",
    },
    {
      q: "Kann ich Ton aus großen oder 4K-Videos extrahieren?",
      a: "Ja. Da nur die Audiospur verarbeitet und die Videobilder übersprungen werden, erfolgt die Umwandlung auch bei hochauflösenden Dateien extrem schnell.",
    },
    {
      q: "Funktioniert das auch auf Smartphones?",
      a: "Ja. Sie können mit dem Smartphone aufgenommene MP4-Videos direkt in Safari auf dem iPhone oder Chrome auf Android in MP3 umwandeln.",
    },
  ];

  const comparisonRows = [
    { feature: "Inhaltstyp", sourceValue: "Video + Audio (Multimediadatei)", targetValue: "Reines Audio (Komprimierte Tonspur)" },
    { feature: "Typische Dateigröße (5 Min.)", sourceValue: "50 MB – 200 MB (je nach Auflösung)", targetValue: "5 MB – 12 MB (~90% Speicherersparnis)" },
    { feature: "Kompatibilität", sourceValue: "Videoplayer, Browser, Fernseher", targetValue: "Universell (100% aller Audiogeräte)" },
    { feature: "Idealer Verwendungszweck", sourceValue: "Filme, Videoclips ansehen", targetValue: "Musik, Podcasts, Sprachnotizen hören" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="MP4 in MP3 umwandeln kostenlos"
        description="Extrahieren Sie Audio aus MP4-Videos im Browser mit bis zu 320 kbps und 100% lokaler Verarbeitung."
        url="/de/mp4-to-mp3"
        breadcrumbs={[{ label: "Konverter", href: "/de" }, { label: "MP4 in MP3", href: "/de/mp4-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "So wandeln Sie MP4 in MP3 um",
          description: "Extrahieren Sie Audio aus jedem MP4-Video in drei Schritten.",
          steps: [
            { name: "MP4-Video auswählen", text: "Ziehen Sie Ihr MP4-Video in den Konverter. Die Datei bleibt auf Ihrem Gerät." },
            { name: "Qualität wählen", text: "Wählen Sie 128, 192 oder 320 kbps als Bitrate." },
            { name: "MP3 herunterladen", text: "Klicken Sie auf Konvertieren und laden Sie Ihre MP3-Datei herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "MP4 in MP3", href: "/de/mp4-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Film className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Video zu Audio Extraktion</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          MP4 in MP3 umwandeln kostenlos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extrahieren Sie Tonspuren aus MP4-Videos in hoher Qualität (bis zu 320 kbps). 100% Datenschutz in Ihrem Browser.
        </p>
      </div>

      <DirectAnswer
        title="Audio aus MP4 extrahieren ohne Upload ins Internet"
        lead="BrowserConvert trennt die Tonspur von Ihrem MP4-Video direkt in Ihrem Browser."
        body="Mithilfe von WebAssembly wird der Audiostream extrahiert, ohne dass Sie Gigabytes an Videodaten hochladen müssen. Sie sparen Zeit, Datenvolumen und wahren die Privatsphäre Ihrer Aufnahmen."
        icon="film"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "video/mp4": [".mp4"], "video/*": [".mov", ".mkv", ".webm"] }}
        dropzoneHeadline="MP4-Videos hier ablegen"
        dropzoneSubheadline="oder klicken, um Videos vom Gerät auszuwählen"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="MP4 (Video)"
        targetFormat="MP3 (Audio)"
        rows={comparisonRows}
      />

      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Häufig gestellte Fragen (FAQ)</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121215] p-5 shadow-xs">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{faq.q}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

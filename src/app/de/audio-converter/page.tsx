import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FileAudio, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Kostenloser Online Audio Konverter - MP3, WAV, M4A, FLAC",
  description:
    "Kostenloser Online-Audio-Konverter. Konvertieren Sie zwischen MP3, WAV, M4A, FLAC, AAC, OGG und OPUS mit anpassbaren Bitraten. 100% Datenschutz in Ihrem Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/audio-converter`,
    languages: getHreflangAlternates("/audio-converter"),
  },
  openGraph: {
    title: "Kostenloser Online Audio Konverter - MP3, WAV, M4A, FLAC",
    description: "Konvertieren Sie alle gängigen Audioformate direkt in Ihrem Browser mit maximalem Datenschutz.",
    url: `${siteConfig.url}/de/audio-converter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Konverter Online ",
    description: "Audiodateien direkt im Browser umwandeln ohne Server-Upload.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanAudioConverterPage() {
  const faqs = [
    {
      q: "Welche Audioformate kann ich umwandeln?",
      a: "BrowserConvert unterstützt Konvertierungen zwischen MP3, WAV, M4A, AAC, FLAC, OGG und OPUS. Zudem können AIFF, WMA und viele weitere Formate importiert werden.",
    },
    {
      q: "Wie wähle ich das beste Audioformat aus?",
      a: "Wählen Sie MP3 für universelle Kompatibilität mit allen Geräten, WAV für unkomprimierte Musikproduktion, M4A für Apple-Geräte und FLAC für verlustfreie Archivierung bei geringerer Dateigröße.",
    },
    {
      q: "Geht bei der Konvertierung Audioqualität verloren?",
      a: "Die Konvertierung von verlustfreien Formaten (wie WAV oder FLAC) in eine hochwertige MP3 (320 kbps) bewahrt eine Klangqualität, die vom Original kaum zu unterscheiden ist.",
    },
    {
      q: "Kann ich mehrere Dateien gleichzeitig konvertieren?",
      a: "Ja. Sie können beliebig viele Dateien hinzufügen. Der Konverter verarbeitet sie nacheinander und ermöglicht den Download einzeln oder gebündelt als ZIP-Datei.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="de"
        title="Kostenloser Online Audio Konverter"
        description="Konvertieren Sie zwischen MP3, WAV, M4A, FLAC, AAC und OGG mit 100% lokaler Verarbeitung."
        url="/de/audio-converter"
        breadcrumbs={[{ label: "Startseite", href: "/de" }, { label: "Audio Konverter", href: "/de/audio-converter" }]}
        faqs={faqs}
        howTo={{
          name: "So konvertieren Sie Audiodateien online",
          description: "Konvertieren Sie jede Audiodatei in drei einfachen Schritten.",
          steps: [
            { name: "Audiodateien auswählen", text: "Ziehen Sie Ihre Musik oder Audiodateien in den Konverter." },
            { name: "Format wählen", text: "Wählen Sie MP3, WAV, M4A, FLAC, AAC oder OGG als Zielformat." },
            { name: "Herunterladen", text: "Klicken Sie auf Konvertieren und laden Sie das Ergebnis herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Audio Konverter", href: "/de/audio-converter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Universelle Audiokonvertierung</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Kostenloser Online Audio Konverter
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Konvertieren Sie MP3, WAV, M4A, FLAC, AAC, OGG und OPUS direkt im Browser. 100% vertraulich, schnell und ohne Registrierung.
        </p>
      </div>

      <DirectAnswer
        title="100% vertrauliche Audiokonvertierung in Ihrem Browser"
        lead="BrowserConvert verarbeitet alle Audiospuren lokal im Arbeitsspeicher Ihres Geräts."
        body="Im Gegensatz zu klassischen Cloud-Diensten, die Ihre Musik oder Sprachaufnahmen auf Server hochladen, garantiert unsere WebAssembly-Engine, dass keine Daten Ihr Gerät verlassen."
        icon="shield"
      />

      <Converter
        dropzoneHeadline="Audiodateien hier ablegen"
        dropzoneSubheadline="oder klicken, um Dateien vom Gerät auszuwählen"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
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

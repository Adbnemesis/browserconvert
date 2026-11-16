import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { FileAudio, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "WAV in MP3 umwandeln - Kostenlos Audio komprimieren",
  description:
    "WAV in MP3 kostenlos online umwandeln. Komprimieren Sie unkomprimierte WAV-Audiodateien in hochwertige 320 kbps MP3s. 100% Datenschutz im Browser, kein Server-Upload.",
  alternates: {
    canonical: `${siteConfig.url}/de/wav-to-mp3`,
    languages: getHreflangAlternates("/wav-to-mp3"),
  },
  openGraph: {
    title: "WAV in MP3 umwandeln - Kostenlos Audio komprimieren",
    description: "Komprimieren Sie WAV-Audiodateien direkt im Browser in 320 kbps MP3s.",
    url: `${siteConfig.url}/de/wav-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV in MP3 Konverter - BrowserConvert",
    description: "WAV-Dateien zu MP3 komprimieren mit 100% lokaler Privatsphäre.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanWavToMp3Page() {
  const faqs = [
    {
      q: "Wie viel Speicherplatz spare ich bei der Konvertierung von WAV in MP3?",
      a: "Eine WAV-Datei belegt ca. 10 MB pro Minute. Bei der Konvertierung in MP3 mit 192 oder 320 kbps sinkt die Dateigröße um 85% bis 90% auf etwa 1,4 bis 2,4 MB pro Minute.",
    },
    {
      q: "Hört man einen Unterschied zwischen WAV und MP3 bei 320 kbps?",
      a: "In Blindtests mit normalen Kopfhörern oder Lautsprechern können selbst erfahrene Hörer eine 320 kbps MP3 kaum von unkomprimiertem 16-Bit WAV unterscheiden.",
    },
    {
      q: "Welche Bitrate ist am besten für die WAV-zu-MP3-Konvertierung?",
      a: "Für den privaten Musikgenuss ist 192 oder 256 kbps optimal. Für professionelle Audioprojekte empfiehlt sich die maximale Bitrate von 320 kbps.",
    },
    {
      q: "Funktioniert die Umwandlung auch ohne Internetverbindung?",
      a: "Sobald die Webseite einmal geladen ist, läuft die Konvertierung dank WebAssembly vollständig lokal auf Ihrem Rechner – ganz ohne Datenaustausch mit externen Servern.",
    },
  ];

  const comparisonRows = [
    { feature: "Kompressionstyp", sourceValue: "Unkomprimiertes lineares PCM (Reines Studio-Audio)", targetValue: "Psychoakustische verlustbehaftete Kompression" },
    { feature: "Bitrate", sourceValue: "1.411 kbps (16 Bit / 44,1 kHz Stereo)", targetValue: "128 kbps bis 320 kbps (Frei einstellbar)" },
    { feature: "Dateigröße (4 Min. Track)", sourceValue: "Ca. 40 MB – 50 MB", targetValue: "Ca. 4 MB – 9 MB (~85% bis 90% Ersparnis)" },
    { feature: "Empfohlener Einsatz", sourceValue: "Studioaufnahmen, Mastering, DAWs", targetValue: "Smartphones, Streaming, MP3-Player" },
    { feature: "Kompatibilität", sourceValue: "Sehr gut auf PC/Mac; teils eingeschränkt auf mobilen Geräten", targetValue: "Universell (100% aller Wiedergabegeräte)" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="WAV in MP3 umwandeln kostenlos"
        description="Komprimieren Sie WAV-Audiodateien in MP3 mit bis zu 320 kbps und 100% lokaler Verarbeitung."
        url="/de/wav-to-mp3"
        breadcrumbs={[{ label: "Konverter", href: "/de" }, { label: "WAV in MP3", href: "/de/wav-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "So wandeln Sie WAV in MP3 um",
          description: "Konvertieren Sie WAV-Audiodateien in drei einfachen Schritten in MP3.",
          steps: [
            { name: "WAV-Dateien auswählen", text: "Ziehen Sie Ihre WAV-Aufnahmen in den Konverter." },
            { name: "Bitrate einstellen", text: "Wählen Sie 192 oder 320 kbps für maximale Klangtreue." },
            { name: "MP3 herunterladen", text: "Klicken Sie auf Konvertieren und laden Sie Ihre MP3-Dateien herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "WAV in MP3", href: "/de/wav-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>WAV zu MP3 Audiokompression</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          WAV in MP3 umwandeln kostenlos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Komprimieren Sie WAV-Aufnahmen in MP3 mit bis zu 320 kbps. 100% Datenschutz in Ihrem Browser, ohne Limits oder Anmeldung.
        </p>
      </div>

      <DirectAnswer
        title="WAV in MP3 konvertieren im Browser ohne Upload"
        lead="BrowserConvert komprimiert WAV-Dateien direkt im Arbeitsspeicher Ihres Geräts."
        body="Durch den Einsatz von WebAssembly und libmp3lame erfolgt die Umwandlung mit voller Prozessorgeschwindigkeit lokal auf Ihrem Computer. Ihre Tonaufnahmen und Musikspuren bleiben zu jedem Zeitpunkt privat."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/wav": [".wav"], "audio/x-wav": [".wav"] }}
        dropzoneHeadline="WAV-Aufnahmen hier ablegen"
        dropzoneSubheadline="oder klicken, um WAV-Dateien vom Gerät auszuwählen"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="WAV (Unkomprimiert)"
        targetFormat="MP3 (Komprimiert)"
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

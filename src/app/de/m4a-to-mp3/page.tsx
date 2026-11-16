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
  title: "M4A in MP3 umwandeln - iPhone Sprachmemos in MP3 konvertieren",
  description:
    "M4A in MP3 kostenlos online umwandeln. Wandeln Sie Apple iPhone Sprachmemos und iTunes M4A-Audiodateien in universelles MP3 um. 100% Datenschutz im Browser, kein Server-Upload.",
  alternates: {
    canonical: `${siteConfig.url}/de/m4a-to-mp3`,
    languages: getHreflangAlternates("/m4a-to-mp3"),
  },
  openGraph: {
    title: "M4A in MP3 umwandeln - iPhone Sprachmemos in MP3 konvertieren",
    description: "Wandeln Sie Apple Sprachmemos und M4A-Dateien direkt im Browser in universelles MP3 um.",
    url: `${siteConfig.url}/de/m4a-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A in MP3 Konverter - BrowserConvert",
    description: "iPhone Sprachmemos in MP3 umwandeln mit 100% lokaler Privatsphäre.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanM4aToMp3Page() {
  const faqs = [
    {
      q: "Warum speichert das iPhone Sprachmemos im M4A-Format?",
      a: "Apple nutzt den M4A-Container mit AAC-Kompression, da er bei geringen Bitraten eine hervorragende Sprachverständlichkeit bietet. Viele ältere Audioplayer und Windows-Programme verlangen jedoch MP3.",
    },
    {
      q: "Geht bei der Umwandlung von M4A in MP3 Sprachqualität verloren?",
      a: "Wenn Sie eine Bitrate von 192 oder 320 kbps wählen, bleibt die Tonqualität für das menschliche Gehör absolut glasklar und detailgetreu.",
    },
    {
      q: "Werden meine vertraulichen Sprachmemos auf einen Server hochgeladen?",
      a: "Nein. Die Konvertierung läuft zu 100% lokal im Browser mit WebAssembly. Ihre privaten Sprachaufnahmen und Meetings verlassen niemals Ihr Gerät.",
    },
    {
      q: "Kann ich mehrere Sprachmemos gleichzeitig umwandeln?",
      a: "Ja. Sie können beliebig viele M4A-Aufnahmen gleichzeitig in den Konverter ziehen und alle zusammen als ZIP-Datei herunterladen.",
    },
  ];

  const comparisonRows = [
    { feature: "Standard-Codec", sourceValue: "AAC (Advanced Audio Coding)", targetValue: "MPEG-1 Audio Layer III (MP3)" },
    { feature: "Ökosystem", sourceValue: "Optimiert für Apple iOS, macOS, iTunes", targetValue: "Universell auf allen Geräten und Betriebssystemen" },
    { feature: "Kompatibilität", sourceValue: "Moderne Geräte, Apple Hardware", targetValue: "100% aller Autoradios, PCs, TVs und Player" },
    { feature: "Sprachqualität", sourceValue: "Sehr hohe Effizienz bei kleinen Dateien", targetValue: "Hervorragende Qualität bei 192k–320 kbps" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="M4A in MP3 umwandeln kostenlos"
        description="Wandeln Sie iPhone Sprachmemos und Apple M4A-Audiodateien direkt im Browser in universelles MP3 um."
        url="/de/m4a-to-mp3"
        breadcrumbs={[{ label: "Konverter", href: "/de" }, { label: "M4A in MP3", href: "/de/m4a-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "So wandeln Sie M4A in MP3 um",
          description: "Konvertieren Sie Apple M4A Sprachmemos in drei einfachen Schritten.",
          steps: [
            { name: "M4A-Dateien auswählen", text: "Ziehen Sie Ihre M4A-Dateien in den Konverter." },
            { name: "Bitrate einstellen", text: "Wählen Sie 192 oder 320 kbps für optimale Sprachqualität." },
            { name: "MP3 herunterladen", text: "Klicken Sie auf Konvertieren und laden Sie Ihre MP3-Dateien herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "M4A in MP3", href: "/de/m4a-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>M4A zu MP3 Audiokonvertierung</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          M4A in MP3 umwandeln kostenlos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Wandeln Sie iPhone Sprachmemos und iTunes M4A-Dateien in MP3 um. 100% Datenschutz in Ihrem Browser ohne Server-Upload.
        </p>
      </div>

      <DirectAnswer
        title="Apple Sprachmemos in MP3 umwandeln ohne Cloud-Upload"
        lead="BrowserConvert wandelt vertrauliche M4A-Sprachnotizen direkt im Arbeitsspeicher Ihres Geräts um."
        body="Weil die Konvertierung mit WebAssembly lokal auf Ihrem Gerät erfolgt, gelangen Ihre persönlichen Sprachnotizen und geschäftlichen Memos niemals auf fremde Server. Schnell, diskret und sicher."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/x-m4a": [".m4a"], "audio/m4a": [".m4a"], "audio/aac": [".aac"] }}
        dropzoneHeadline="M4A Sprachmemos hier ablegen"
        dropzoneSubheadline="oder klicken, um M4A-Dateien vom Gerät auszuwählen"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="M4A (Apple Audio)"
        targetFormat="MP3 (Universell)"
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

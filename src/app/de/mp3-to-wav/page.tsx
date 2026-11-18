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
  title: "MP3 in WAV umwandeln - Kostenlos MP3 in unkomprimiertes WAV konvertieren",
  description: "MP3 in WAV kostenlos online umwandeln. Dekomprimieren Sie MP3-Audiodateien in 16-Bit PCM WAV für DAWs und Schnittprogramme. 100% lokal im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/mp3-to-wav`,
    languages: getHreflangAlternates("/mp3-to-wav"),
  },
  openGraph: {
    title: "MP3 in WAV umwandeln - Kostenlos MP3 in unkomprimiertes WAV konvertieren",
    description: "MP3 in WAV kostenlos online umwandeln. Dekomprimieren Sie MP3-Audiodateien in 16-Bit PCM WAV für DAWs und Schnittprogramme. 100% lokal im Browser.",
    url: `${siteConfig.url}/de/mp3-to-wav`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 in WAV umwandeln - Kostenlos MP3 in unkomprimiertes WAV konvertieren",
    description: "MP3 in WAV kostenlos online umwandeln. Dekomprimieren Sie MP3-Audiodateien in 16-Bit PCM WAV für DAWs und Schnittprogramme. 100% lokal im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function DE_mp3_to_wav_Page() {
  const faqs = [
    {
        "q": "Verbessert die Umwandlung von MP3 in WAV die Tonqualität?",
        "a": "Nein, verloren gegangene Frequenzen der MP3 können nicht wiederhergestellt werden. WAV bietet jedoch die ideale Arbeitsgrundlage für DAWs und Schnittsoftware."
    },
    {
        "q": "Welche Spezifikationen hat die erzeugte WAV-Datei?",
        "a": "BrowserConvert erzeugt standardmäßige 16-Bit PCM WAV-Audiodateien mit 44.1 kHz Samplerate."
    },
    {
        "q": "Verlassen meine Audiodateien das Gerät?",
        "a": "Nein. Alles wird zu 100% lokal im Webbrowser dekodiert."
    }
];

  const comparisonRows = [
    {
        "feature": "Audiokomprimierung",
        "sourceValue": "Verlustbehaftet (MPEG-1 Layer III)",
        "targetValue": "Unkomprimiertes Linear PCM"
    },
    {
        "feature": "Einsatzgebiet",
        "sourceValue": "Wiedergabe auf Handys und Web",
        "targetValue": "DAWs, Sampler, Schnittprogramme"
    },
    {
        "feature": "CPU-Last beim Schnitt",
        "sourceValue": "Muss ständig dekodiert werden",
        "targetValue": "Sofortige Wellenformanzeige"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="de"
        title="MP3 in WAV umwandeln - Kostenlos MP3 in unkomprimiertes WAV konvertieren"
        description="MP3 in WAV kostenlos online umwandeln. Dekomprimieren Sie MP3-Audiodateien in 16-Bit PCM WAV für DAWs und Schnittprogramme. 100% lokal im Browser."
        url="/de/mp3-to-wav"
        breadcrumbs={[
          { label: "Konverter", href: "/de" },
          { label: "MP3 in WAV", href: "/de/mp3-to-wav" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Konverter", href: "/de" },
          { label: "MP3 in WAV", href: "/de/mp3-to-wav" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Dekomprimierung für DAWs</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          MP3 in WAV kostenlos online umwandeln
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Dekomprimieren Sie MP3-Dateien in unkomprimiertes 16-Bit PCM WAV. Perfekt für Audio-Editoren, Musikproduktion und DJ-Equipment.
        </p>
      </div>

      <DirectAnswer
        question="Warum sollte man MP3 in WAV umwandeln?"
        answer="DAWs, DJ-Pulte und Videoschnittprogramme verarbeiten unkomprimiertes WAV ohne CPU-Dekodierlast. Die Umwandlung in WAV verhindert zudem wiederholte Qualitätsverluste bei mehrmaligem Bearbeiten."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="wav"
          acceptTypes="audio/mpeg,audio/mp3,.mp3"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="MP3 (Komprimiert)"
        targetName="WAV (Unkomprimiert)"
        rows={comparisonRows}
      />

      <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2 className="text-lg sm:text-xl font-medium text-slate-900 dark:text-zinc-100">
            FAQ
          </h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0">
              <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-200">
                {faq.q}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

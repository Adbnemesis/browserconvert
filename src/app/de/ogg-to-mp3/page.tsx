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
  title: "OGG in MP3 umwandeln - Kostenlos Vorbis OGG in MP3 konvertieren",
  description: "OGG in MP3 kostenlos online umwandeln. Wandeln Sie OGG Vorbis Audiodateien in universelles MP3 für iPhone und Autoradios um. 100% lokal im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/ogg-to-mp3`,
    languages: getHreflangAlternates("/ogg-to-mp3"),
  },
  openGraph: {
    title: "OGG in MP3 umwandeln - Kostenlos Vorbis OGG in MP3 konvertieren",
    description: "OGG in MP3 kostenlos online umwandeln. Wandeln Sie OGG Vorbis Audiodateien in universelles MP3 für iPhone und Autoradios um. 100% lokal im Browser.",
    url: `${siteConfig.url}/de/ogg-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG in MP3 umwandeln - Kostenlos Vorbis OGG in MP3 konvertieren",
    description: "OGG in MP3 kostenlos online umwandeln. Wandeln Sie OGG Vorbis Audiodateien in universelles MP3 für iPhone und Autoradios um. 100% lokal im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function DE_ogg_to_mp3_Page() {
  const faqs = [
    {
        "q": "Warum werden OGG-Dateien auf dem iPhone nicht abgespielt?",
        "a": "Apple unterstützt OGG Vorbis nicht im Standard-Player. Die Umwandlung in MP3 löst das Problem dauerhaft."
    },
    {
        "q": "Geht bei der Umwandlung Qualität verloren?",
        "a": "Bei 192 oder 320 kbps MP3 bleibt der Ton für das menschliche Ohr absolut klar und originalgetreu."
    },
    {
        "q": "Werden OGG-Dateien auf Server übertragen?",
        "a": "Nein, alles läuft lokal im Webbrowser."
    }
];

  const comparisonRows = [
    {
        "feature": "Kompatibilität",
        "sourceValue": "Eingeschränkt auf Linux/Games",
        "targetValue": "100% auf allen Geräten und Betriebssystemen"
    },
    {
        "feature": "Apple-Unterstützung",
        "sourceValue": "Wird von iOS Music abgelehnt",
        "targetValue": "Vollständig nativ unterstützt"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="de"
        title="OGG in MP3 umwandeln - Kostenlos Vorbis OGG in MP3 konvertieren"
        description="OGG in MP3 kostenlos online umwandeln. Wandeln Sie OGG Vorbis Audiodateien in universelles MP3 für iPhone und Autoradios um. 100% lokal im Browser."
        url="/de/ogg-to-mp3"
        breadcrumbs={[
          { label: "Konverter", href: "/de" },
          { label: "OGG in MP3", href: "/de/ogg-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Konverter", href: "/de" },
          { label: "OGG in MP3", href: "/de/ogg-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Vorbis zu MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          OGG in MP3 kostenlos online umwandeln
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Konvertieren Sie OGG Vorbis-Spieleaudios und Sprachaufnahmen in universelles MP3. Funktioniert auf allen Geräten ohne Zusatz-Player.
        </p>
      </div>

      <DirectAnswer
        question="Wie spielt man OGG-Dateien auf iPhone und im Auto ab?"
        answer="Wandeln Sie OGG auf BrowserConvert in MP3 um. Da iOS und Autoradios OGG nicht nativ unterstützen, sorgt MP3 für sofortige Kompatibilität bei 100% lokalem Datenschutz."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/ogg,audio/vorbis,.ogg"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="OGG Vorbis"
        targetName="MP3 Universal"
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

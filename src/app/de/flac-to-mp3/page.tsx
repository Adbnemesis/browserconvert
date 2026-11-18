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
  title: "FLAC in MP3 umwandeln - Kostenlos Hi-Res Audio in 320kbps MP3",
  description: "FLAC in MP3 kostenlos online umwandeln. Wandeln Sie verlustfreie FLAC-Audiodateien in hochwertige 320 kbps MP3s um. 100% lokal im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/flac-to-mp3`,
    languages: getHreflangAlternates("/flac-to-mp3"),
  },
  openGraph: {
    title: "FLAC in MP3 umwandeln - Kostenlos Hi-Res Audio in 320kbps MP3",
    description: "FLAC in MP3 kostenlos online umwandeln. Wandeln Sie verlustfreie FLAC-Audiodateien in hochwertige 320 kbps MP3s um. 100% lokal im Browser.",
    url: `${siteConfig.url}/de/flac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC in MP3 umwandeln - Kostenlos Hi-Res Audio in 320kbps MP3",
    description: "FLAC in MP3 kostenlos online umwandeln. Wandeln Sie verlustfreie FLAC-Audiodateien in hochwertige 320 kbps MP3s um. 100% lokal im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function DE_flac_to_mp3_Page() {
  const faqs = [
    {
        "q": "Warum sollte man FLAC in MP3 konvertieren?",
        "a": "FLAC-Dateien sind mit 30–50 MB pro Titel sehr groß und werden von vielen Autoradios und Apple Music nicht nativ abgespielt. 320 kbps MP3 spart 75% Speicherplatz bei brillanter Klangqualität."
    },
    {
        "q": "Welche Bitrate ist für FLAC zu MP3 optimal?",
        "a": "Wir empfehlen 320 kbps oder 256 kbps, um den Dynamikumfang der verlustfreien Originalaufnahme optimal zu bewahren."
    },
    {
        "q": "Werden meine Musikdateien auf einen Server hochgeladen?",
        "a": "Nein. Die Umwandlung läuft vollständig lokal im Browser über WebAssembly. Ihre Musik verlässt niemals Ihr Gerät."
    }
];

  const comparisonRows = [
    {
        "feature": "Kompression",
        "sourceValue": "Verlustfrei (Bit-perfekt)",
        "targetValue": "Verlustbehaftet (Psychoakustisch)"
    },
    {
        "feature": "Typische Bitrate",
        "sourceValue": "800–1411 kbps",
        "targetValue": "320 kbps oder 192 kbps"
    },
    {
        "feature": "Speicherplatz pro Album",
        "sourceValue": "350–600 MB",
        "targetValue": "80–120 MB (~75% Ersparnis)"
    },
    {
        "feature": "Kompatibilität",
        "sourceValue": "Eingeschränkt auf Apple/Auto",
        "targetValue": "100% auf allen Geräten"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="de"
        title="FLAC in MP3 umwandeln - Kostenlos Hi-Res Audio in 320kbps MP3"
        description="FLAC in MP3 kostenlos online umwandeln. Wandeln Sie verlustfreie FLAC-Audiodateien in hochwertige 320 kbps MP3s um. 100% lokal im Browser."
        url="/de/flac-to-mp3"
        breadcrumbs={[
          { label: "Konverter", href: "/de" },
          { label: "FLAC in MP3", href: "/de/flac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Konverter", href: "/de" },
          { label: "FLAC in MP3", href: "/de/flac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Verlustfreies Audio zu MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          FLAC in MP3 kostenlos online umwandeln
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Wandeln Sie verlustfreie FLAC-Musik in universelle 320 kbps MP3-Dateien um. Ideal für Smartphones, Autoradios und Apple Music.
        </p>
      </div>

      <DirectAnswer
        question="Wie wandelt man FLAC in MP3 ohne hörbaren Qualitätsverlust um?"
        answer="Wählen Sie beim Konvertieren auf BrowserConvert eine Bitrate von 320 kbps mit dem LAME-Encoder. Dadurch bleiben über 95% der akustischen Details erhalten, während die Dateigröße um ca. 75% schrumpft."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/flac,.flac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="FLAC (Verlustfrei)"
        targetName="MP3 (Universal 320k)"
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

import React from "react";
import type { Metadata } from "next";
import { AudioCompressorTool } from "@/components/tools/AudioCompressorTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Minimize2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Audio komprimieren online - Dateigröße kostenlos verringern",
  description:
    "Audiodateien kostenlos online komprimieren. Reduzieren Sie die Dateigröße von MP3, WAV, FLAC und M4A um bis zu 85% bei klarer Tonqualität. 100% Datenschutz im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/audio-compressor`,
    languages: getHreflangAlternates("/audio-compressor"),
  },
  openGraph: {
    title: "Audio komprimieren online - Dateigröße kostenlos verringern",
    description: "Verkleinern Sie MP3-, WAV- und FLAC-Dateien direkt im Browser bei hervorragendem Klang.",
    url: `${siteConfig.url}/de/audio-compressor`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Kompressor Online - BrowserConvert",
    description: "Dateigröße von Audiodateien verringern direkt im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanAudioCompressorPage() {
  const faqs = [
    {
      q: "Um wie viel Prozent kann eine Audiodatei verkleinert werden?",
      a: "Unkomprimierte WAV- oder AIFF-Dateien können um bis zu 85%-90% komprimiert werden. Eine MP3 kann durch Anpassung von 320 kbps auf 128 kbps um über 50% verkleinert werden.",
    },
    {
      q: "Hört man Qualitätsverluste nach der Komprimierung?",
      a: "Bei Bitraten ab 192 kbps bleibt die Klangtreue für den Alltagseinsatz mit Kopfhörern und im Auto praktisch unverändert hoch.",
    },
    {
      q: "Werden meine Dateien auf einen Server übertragen?",
      a: "Nein. Die Komprimierung läuft vollständig lokal mit WebAssembly in Ihrem Browser. Ihre Dateien verlassen Ihren Rechner zu keinem Zeitpunkt.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Audio komprimieren online kostenlos"
        description="Reduzieren Sie die Dateigröße von MP3, WAV und FLAC bei maximaler Klangtreue und 100% lokalem Datenschutz."
        url="/de/audio-compressor"
        breadcrumbs={[{ label: "Tools", href: "/de" }, { label: "Audio Komprimieren", href: "/de/audio-compressor" }]}
        faqs={faqs}
        howTo={{
          name: "So komprimieren Sie Audiodateien online",
          description: "Verkleinern Sie jede Audiodatei in drei einfachen Schritten.",
          steps: [
            { name: "Audiodatei auswählen", text: "Ziehen Sie Ihre MP3-, WAV- oder FLAC-Datei in den Kompressor." },
            { name: "Zielqualität wählen", text: "Wählen Sie 128 kbps (kleine Datei) oder 192 kbps (hohe Qualität)." },
            { name: "Komprimieren & Herunterladen", text: "Klicken Sie auf Komprimieren und laden Sie die verkleinerte Datei herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Audio Komprimieren", href: "/de/audio-compressor" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Minimize2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Audiogröße verringern</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Audio komprimieren online kostenlos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Reduzieren Sie die Dateigröße von MP3, WAV, FLAC und M4A bei klarer Tonqualität. 100% Datenschutz im Browser.
        </p>
      </div>

      <DirectAnswer
        title="Audiodateien online verkleinern ohne Qualitätsverlust"
        lead="BrowserConvert optimiert Audiospuren mit hochentwickelten Encodern direkt in Ihrem Browser."
        body="Sparen Sie kostbaren Speicherplatz auf Ihrem Smartphone oder bereiten Sie Audiodateien für den E-Mail-Versand vor, ohne Ihre privaten Aufnahmen an Drittanbieter-Server senden zu müssen."
        icon="sliders"
      />

      <AudioCompressorTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
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

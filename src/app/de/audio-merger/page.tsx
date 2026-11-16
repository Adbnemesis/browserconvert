import React from "react";
import type { Metadata } from "next";
import { AudioMergerTool } from "@/components/tools/AudioMergerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Combine, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Audio zusammenfügen online - Lieder kostenlos verbinden",
  description:
    "Audiodateien kostenlos online zusammenfügen. Verbinden Sie mehrere MP3-, WAV- und M4A-Titel zu einem einzigen nahtlosen Audiofile. 100% Datenschutz im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/audio-merger`,
    languages: getHreflangAlternates("/audio-merger"),
  },
  openGraph: {
    title: "Audio zusammenfügen online - Lieder kostenlos verbinden",
    description: "Mehrere Audiospuren zu einer nahtlosen Datei kombinieren direkt im Browser ohne Server-Upload.",
    url: `${siteConfig.url}/de/audio-merger`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Merger Online ",
    description: "Audiodateien kostenlos zusammenfügen direkt im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanAudioMergerPage() {
  const faqs = [
    {
      q: "Wie viele Dateien kann ich zusammenfügen?",
      a: "Es gibt kein künstliches Limit. Sie können 2, 5 oder mehr Audiospuren nahtlos zu einem einzigen Musikstück oder Podcast verbinden.",
    },
    {
      q: "Können Spuren mit unterschiedlichen Formaten kombiniert werden?",
      a: "Ja. Sie können beispielsweise eine MP3- und eine WAV-Datei zusammenfügen. Unser Tool konvertiert alles in ein einheitliches Zielformat.",
    },
    {
      q: "Werden meine privaten Aufnahmen hochgeladen?",
      a: "Nein. Alle Dateien werden direkt im Arbeitsspeicher Ihres Browsers verarbeitet. Kein Server erhält Einblick in Ihre Daten.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="de"
        title="Audio zusammenfügen online kostenlos"
        description="Verbinden Sie mehrere MP3- und WAV-Titel nahtlos direkt in Ihrem Browser."
        url="/de/audio-merger"
        breadcrumbs={[{ label: "Tools", href: "/de" }, { label: "Audio Zusammenfügen", href: "/de/audio-merger" }]}
        faqs={faqs}
        howTo={{
          name: "So verbinden Sie Audiodateien online",
          description: "Kombinieren Sie mehrere Audiospuren in drei einfachen Schritten.",
          steps: [
            { name: "Dateien hinzufügen", text: "Fügen Sie zwei oder mehr Audiodateien per Drag & Drop hinzu." },
            { name: "Reihenfolge anordnen", text: "Ordnen Sie die Spuren in der gewünschten Abspielreihenfolge an." },
            { name: "Zusammenfügen & Download", text: "Klicken Sie auf Spuren verbinden und laden Sie die fertige Datei herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Audio Zusammenfügen", href: "/de/audio-merger" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Combine className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Audiospuren verbinden</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Audio zusammenfügen online kostenlos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Kombinieren Sie mehrere MP3-, WAV- und M4A-Audiospuren zu einer einzigen Datei. 100% Datenschutz im Browser.
        </p>
      </div>

      <DirectAnswer
        title="Audiodateien online verbinden ohne Upload"
        lead="BrowserConvert fügt Musikspuren lokal mithilfe von WebAssembly zusammen."
        body="Erstellen Sie Non-Stop-Playlists, Podcasts oder verbinden Sie Sprachaufnahmen direkt auf Ihrem Computer oder Smartphone ohne Qualitätsverlust."
        icon="sliders"
      />

      <AudioMergerTool />

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

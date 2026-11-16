import React from "react";
import type { Metadata } from "next";
import { AudioSpeedTool } from "@/components/tools/AudioSpeedTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { FastForward, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Audio Geschwindigkeit ändern - Musik beschleunigen & verlangsamen",
  description:
    "Audiodateien kostenlos online schneller oder langsamer abspielen. Ändern Sie das Tempo von MP3s ohne Tonhöhenverzerrung. 100% Datenschutz im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/audio-speed-changer`,
    languages: getHreflangAlternates("/audio-speed-changer"),
  },
  openGraph: {
    title: "Audio Geschwindigkeit ändern - Musik beschleunigen & verlangsamen",
    description: "Ändern Sie die Abspielgeschwindigkeit von Audiodateien direkt im Browser.",
    url: `${siteConfig.url}/de/audio-speed-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Geschwindigkeit ändern - BrowserConvert",
    description: "Audiodateien beschleunigen oder verlangsamen ohne Server-Upload.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanAudioSpeedChangerPage() {
  const faqs = [
    {
      q: "Verändert sich die Tonhöhe (Pitch) beim Beschleunigen?",
      a: "Nein. Unser Algorithmus passt die Abspielgeschwindigkeit an, ohne die Tonhöhe zu verzerren (kein Micky-Maus-Effekt).",
    },
    {
      q: "Werden meine Dateien auf einen Server hochgeladen?",
      a: "Nein. Alle Berechnungen erfolgen lokal im Arbeitsspeicher Ihres Browsers.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Audio Geschwindigkeit ändern online"
        description="Beschleunigen oder verlangsamen Sie MP3-Audiodateien direkt im Browser bei 100% lokalem Datenschutz."
        url="/de/audio-speed-changer"
        breadcrumbs={[{ label: "Tools", href: "/de" }, { label: "Geschwindigkeit Ändern", href: "/de/audio-speed-changer" }]}
        faqs={faqs}
        howTo={{
          name: "So ändern Sie die Audiogeschwindigkeit online",
          description: "Passen Sie das Tempo in drei einfachen Schritten an.",
          steps: [
            { name: "Audiodatei auswählen", text: "Ziehen Sie Ihre Audiodatei in das Tool." },
            { name: "Tempo wählen", text: "Stellen Sie die Geschwindigkeit ein (z.B. 0.8x oder 1.25x)." },
            { name: "Herunterladen", text: "Klicken Sie auf Anwenden und laden Sie das Ergebnis herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Geschwindigkeit Ändern", href: "/de/audio-speed-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FastForward className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Abspieltempo anpassen</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Audio Geschwindigkeit ändern online
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Audio beschleunigen oder verlangsamen ohne Tonhöhenverzerrung. 100% Datenschutz im Browser.
        </p>
      </div>

      <DirectAnswer
        title="Audiotempo online anpassen ohne Server-Upload"
        lead="BrowserConvert ändert die Geschwindigkeit direkt im Arbeitsspeicher Ihres Endgeräts."
        body="Ideal zum Beschleunigen von Sprachmemos, Vorlesungen oder zum Verlangsamen von Musik zum Heraushören von Instrumenten."
        icon="sliders"
      />

      <AudioSpeedTool />

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

import React from "react";
import type { Metadata } from "next";
import { AudioBitrateChangerTool } from "@/components/tools/AudioBitrateChangerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Sliders, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Audio Bitrate ändern - MP3 kbps kostenlos anpassen",
  description:
    "Audio-Bitrate kostenlos online ändern. Konvertieren Sie Audiodateien in 128k, 192k, 256k oder 320 kbps. 100% Datenschutz im Browser, kein Server-Upload.",
  alternates: {
    canonical: `${siteConfig.url}/de/audio-bitrate-changer`,
    languages: getHreflangAlternates("/audio-bitrate-changer"),
  },
  openGraph: {
    title: "Audio Bitrate ändern - MP3 kbps kostenlos anpassen",
    description: "Re-encodieren Sie Audiodateien in Standard-Bitraten direkt im Browser.",
    url: `${siteConfig.url}/de/audio-bitrate-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Bitrate ändern ",
    description: "MP3 Bitrate in kbps anpassen direkt im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanAudioBitrateChangerPage() {
  const faqs = [
    {
      q: "Welche Bitrate sollte ich für meine MP3-Dateien wählen?",
      a: "192 kbps bietet das beste Verhältnis aus geringer Dateigröße und hoher Audioqualität. Für anspruchsvolle Musik empfehlen wir 320 kbps.",
    },
    {
      q: "Werden meine Dateien auf einen Server hochgeladen?",
      a: "Nein. Alle Dateien werden lokal mit WebAssembly in Ihrem Browser neu enkodiert.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="de"
        title="Audio Bitrate ändern online"
        description="Passen Sie die Bitrate von MP3-Dateien in 128k, 192k oder 320 kbps direkt im Browser an."
        url="/de/audio-bitrate-changer"
        breadcrumbs={[{ label: "Tools", href: "/de" }, { label: "Bitrate Ändern", href: "/de/audio-bitrate-changer" }]}
        faqs={faqs}
        howTo={{
          name: "So ändern Sie die Audio-Bitrate online",
          description: "Passen Sie die Bitrate in drei einfachen Schritten an.",
          steps: [
            { name: "Datei auswählen", text: "Ziehen Sie Ihre Audiodatei in das Tool." },
            { name: "Ziel-Bitrate wählen", text: "Wählen Sie 128k, 192k, 256k oder 320 kbps." },
            { name: "Herunterladen", text: "Klicken Sie auf Ändern und laden Sie die Datei herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Bitrate Ändern", href: "/de/audio-bitrate-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Sliders className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Bitrate (kbps) anpassen</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Audio Bitrate ändern online
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Re-encodieren Sie Audiodateien in Standard-Bitraten (128k, 192k, 256k, 320k). 100% Datenschutz im Browser.
        </p>
      </div>

      <DirectAnswer
        title="Audio-Bitrate im Browser anpassen ohne Upload"
        lead="BrowserConvert encodiert Tonspuren lokal im Arbeitsspeicher Ihres Endgeräts."
        body="Reduzieren Sie die Dateigröße für schnelles Versenden oder heben Sie die Bitrate für professionelle Abspielgeräte an."
        icon="sliders"
      />

      <AudioBitrateChangerTool />

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

import React from "react";
import type { Metadata } from "next";
import { AudioVolumeTool } from "@/components/tools/AudioVolumeTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Volume2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Audio Lautstärke anpassen - MP3 lauter machen online",
  description:
    "Audiodateien kostenlos online lauter oder leiser machen. Verstärken Sie leise Sprachaufnahmen oder normalisieren Sie Musikspuren. 100% Datenschutz im Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/audio-volume-adjuster`,
    languages: getHreflangAlternates("/audio-volume-adjuster"),
  },
  openGraph: {
    title: "Audio Lautstärke anpassen - MP3 lauter machen online",
    description: "Verstärken Sie Audioaufnahmen direkt im Browser ohne Server-Upload.",
    url: `${siteConfig.url}/de/audio-volume-adjuster`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Lautstärke anpassen - BrowserConvert",
    description: "MP3 und Audio lauter machen direkt im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanAudioVolumeAdjusterPage() {
  const faqs = [
    {
      q: "Wie mache ich eine leise Audiodatei lauter?",
      a: "Wählen Sie Ihre Audiodatei aus und stellen Sie den Schieberegler auf über 100% (z.B. 150% oder 200%). Unser Tool verstärkt das Audiosignal sauber und verzerrungsfrei.",
    },
    {
      q: "Wird die Datei auf einen Server hochgeladen?",
      a: "Nein. Die Lautstärkeregelung wird vollständig im Browser über WebAssembly durchgeführt. Ihre privaten Sprachnotizen bleiben geschützt.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Audio Lautstärke anpassen online"
        description="Verstärken Sie leise Audiodateien direkt im Browser bei 100% lokalem Datenschutz."
        url="/de/audio-volume-adjuster"
        breadcrumbs={[{ label: "Tools", href: "/de" }, { label: "Lautstärke Anpassen", href: "/de/audio-volume-adjuster" }]}
        faqs={faqs}
        howTo={{
          name: "So passen Sie die Audiolautstärke online an",
          description: "Machen Sie Audiodateien in drei einfachen Schritten lauter oder leiser.",
          steps: [
            { name: "Datei auswählen", text: "Ziehen Sie Ihre Audiodatei in das Tool." },
            { name: "Lautstärke regeln", text: "Wählen Sie den gewünschten Prozentsatz der Verstärkung." },
            { name: "Speichern", text: "Klicken Sie auf Anwenden und laden Sie die optimierte Datei herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Lautstärke Anpassen", href: "/de/audio-volume-adjuster" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Volume2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Audiolautstärke optimieren</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Audio Lautstärke anpassen online
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Verstärken Sie leise MP3s oder dämpfen Sie zu laute Tonspuren. 100% Datenschutz in Ihrem Browser.
        </p>
      </div>

      <DirectAnswer
        title="Audiodateien lauter machen ohne Qualitätsverlust"
        lead="BrowserConvert normalisiert Audiosignale lokal im Arbeitsspeicher Ihres Endgeräts."
        body="Retten Sie leise Sprachnotizen, Telefonmitschnitte oder Unterrichtsaufnahmen mit einem Klick, ohne vertrauliche Inhalte an fremde Server übermitteln zu müssen."
        icon="sliders"
      />

      <AudioVolumeTool />

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

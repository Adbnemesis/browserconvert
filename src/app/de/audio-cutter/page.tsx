import React from "react";
import type { Metadata } from "next";
import { AudioCutterTool } from "@/components/tools/AudioCutterTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Scissors, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Audio schneiden online - Kostenloser MP3 & Musik Trimmer",
  description:
    "Kostenloser Online-Audio-Cutter. Schneiden und kürzen Sie MP3-, WAV-, M4A- und FLAC-Audiodateien auf die Millisekunde genau. 100% Datenschutz in Ihrem Browser.",
  alternates: {
    canonical: `${siteConfig.url}/de/audio-cutter`,
    languages: getHreflangAlternates("/audio-cutter"),
  },
  openGraph: {
    title: "Audio schneiden online - Kostenloser MP3 & Musik Trimmer",
    description: "Schneiden Sie Audiodateien mit Wellenform-Vorschau direkt im Browser ohne Server-Upload.",
    url: `${siteConfig.url}/de/audio-cutter`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio schneiden online ",
    description: "Audiodateien auf die Millisekunde genau zuschneiden direkt im Browser.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function GermanAudioCutterPage() {
  const faqs = [
    {
      q: "Wie schneidet dieser Audio-Cutter Dateien ohne Server-Upload?",
      a: "BrowserConvert verarbeitet Audio direkt im Arbeitsspeicher Ihres Browsers. Beim Laden einer Datei decodiert der Browser das Signal und schneidet die exakten Zeitpunkte lokal ab, ohne Daten in die Cloud zu senden.",
    },
    {
      q: "Kann ich Audiodateien auch auf dem Smartphone zuschneiden?",
      a: "Ja. Das Werkzeug ist vollständig für Touchscreens optimiert und funktioniert auf iPhone, iPad und Android-Geräten.",
    },
    {
      q: "Welche Audioformate können geschnitten werden?",
      a: "Sie können alle gängigen Formate wie MP3, WAV, M4A, FLAC, OGG und AAC zuschneiden.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="de"
        title="Audio schneiden online kostenlos"
        description="Schneiden Sie MP3-, WAV- und M4A-Audiodateien mit 100% Datenschutz im Browser."
        url="/de/audio-cutter"
        breadcrumbs={[{ label: "Tools", href: "/de" }, { label: "Audio Schneiden", href: "/de/audio-cutter" }]}
        faqs={faqs}
        howTo={{
          name: "So schneiden Sie Audio online kostenlos",
          description: "Schneiden Sie jede Audiodatei in drei einfachen Schritten.",
          steps: [
            { name: "Datei auswählen", text: "Wählen Sie eine MP3-, WAV- oder M4A-Datei von Ihrem Gerät aus." },
            { name: "Start- und Endzeit festlegen", text: "Nutzen Sie die Schieberegler oder tippen Sie die genaue Sekundenzahl ein." },
            { name: "Schneiden & Herunterladen", text: "Klicken Sie auf Schneiden und laden Sie den fertigen Clip herunter." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Audio Schneiden", href: "/de/audio-cutter" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Scissors className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Audiobearbeitung im Browser</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Audio schneiden online kostenlos
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Schneiden Sie MP3-, WAV-, M4A- und FLAC-Audiodateien auf die Millisekunde genau. 100% Datenschutz auf Ihrem Gerät.
        </p>
      </div>

      <DirectAnswer
        title="Audiodateien direkt im Browser schneiden ohne Upload"
        lead="BrowserConvert schneidet Audiodateien lokal mithilfe nativer Audio-APIs in Ihrem Browser."
        body="Im Gegensatz zu herkömmlichen Webeditoren, bei denen Dateien langwierig hochgeladen werden müssen, arbeitet dieses Tool vollständig im RAM Ihres Computers. Ihre privaten Aufnahmen bleiben zu 100% geschützt."
        icon="sliders"
      />

      <AudioCutterTool />

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

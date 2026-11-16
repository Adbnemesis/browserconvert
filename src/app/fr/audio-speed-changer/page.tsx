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
  title: "Changer la Vitesse Audio - Accélérer ou Ralentir la Musique en Ligne",
  description:
    "Modifier la vitesse de lecture audio en ligne gratuitement. Accélérez ou ralentissez des pistes MP3 sans modifier la hauteur tonale. 100% privé dans le navigateur.",
  alternates: {
    canonical: `${siteConfig.url}/fr/audio-speed-changer`,
    languages: getHreflangAlternates("/audio-speed-changer"),
  },
  openGraph: {
    title: "Changer la Vitesse Audio - Accélérer ou Ralentir la Musique en Ligne",
    description: "Modifiez la vitesse de lecture de fichiers audio directement dans votre navigateur.",
    url: `${siteConfig.url}/fr/audio-speed-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changer la Vitesse Audio - BrowserConvert",
    description: "Accélérez ou ralentissez vos fichiers audio sans serveur distant.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchAudioSpeedChangerPage() {
  const faqs = [
    {
      q: "La tonalité change-t-elle lorsque j'accélère le morceau ?",
      a: "Non. Notre algorithme modifie le tempo tout en conservant la hauteur tonale exacte (évitant tout effet de voix aiguë artificielle).",
    },
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. Tous les calculs s'effectuent localement dans la mémoire vive de votre navigateur.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        title="Changer la Vitesse Audio en Ligne"
        description="Accélérez ou ralentissez des fichiers audio MP3 directement dans votre navigateur avec traitement local."
        url="/fr/audio-speed-changer"
        breadcrumbs={[{ label: "Outils", href: "/fr" }, { label: "Changer la Vitesse", href: "/fr/audio-speed-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Comment modifier la vitesse audio en ligne",
          description: "Ajustez le tempo en trois étapes simples.",
          steps: [
            { name: "Sélectionnez le fichier", text: "Déposez votre fichier audio dans l'outil." },
            { name: "Réglez la vitesse", text: "Définissez la vitesse de lecture (ex. 0.8x ou 1.25x)." },
            { name: "Téléchargez", text: "Cliquez sur Appliquer et téléchargez votre extrait adapté." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Changer la Vitesse", href: "/fr/audio-speed-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FastForward className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Régler le tempo audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Changer la Vitesse Audio en Ligne
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Accélérez ou ralentissez la musique sans déformer la tonalité. 100% privé dans votre navigateur.
        </p>
      </div>

      <DirectAnswer
        title="Modifier la cadence audio en ligne sans téléversement"
        lead="BrowserConvert adapte le tempo audio directement dans la mémoire de votre appareil."
        body="Idéal pour accélérer l'écoute de cours magistraux, mémos ou ralentir un solo de musique pour en transcrire les notes."
        icon="sliders"
      />

      <AudioSpeedTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Foire Aux Questions (FAQ)</h2>
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

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
  title: "Ajuster le Volume Audio - Augmenter le Volume MP3 en Ligne",
  description:
    "Augmenter ou baisser le volume de fichiers audio en ligne gratuitement. Amplifiez les enregistrements trop faibles ou normalisez vos morceaux. 100% privé dans le navigateur.",
  alternates: {
    canonical: `${siteConfig.url}/fr/audio-volume-adjuster`,
    languages: getHreflangAlternates("/audio-volume-adjuster"),
  },
  openGraph: {
    title: "Ajuster le Volume Audio - Augmenter le Volume MP3 en Ligne",
    description: "Amplifiez le son de vos fichiers audio directement dans votre navigateur sans téléversement.",
    url: `${siteConfig.url}/fr/audio-volume-adjuster`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajuster le Volume Audio ",
    description: "Augmentez le volume MP3 directement dans votre navigateur.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchAudioVolumeAdjusterPage() {
  const faqs = [
    {
      q: "Comment rendre un fichier audio plus fort ?",
      a: "Sélectionnez votre fichier et réglez le curseur de volume au-dessus de 100% (ex. 150% ou 200%). Notre outil amplifie le signal de façon propre et sans saturation excessive.",
    },
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. L'ajustement du volume s'effectue intégralement dans votre navigateur via WebAssembly.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="fr"
        title="Ajuster le Volume Audio en Ligne"
        description="Amplifiez le son de vos fichiers audio directement dans votre navigateur en toute confidentialité."
        url="/fr/audio-volume-adjuster"
        breadcrumbs={[{ label: "Outils", href: "/fr" }, { label: "Ajuster le Volume", href: "/fr/audio-volume-adjuster" }]}
        faqs={faqs}
        howTo={{
          name: "Comment ajuster le volume audio en ligne",
          description: "Augmentez ou baissez le son en trois étapes simples.",
          steps: [
            { name: "Sélectionnez le fichier", text: "Déposez votre fichier audio dans l'outil." },
            { name: "Réglez le volume", text: "Choisissez le niveau d'amplification souhaité." },
            { name: "Sauvegardez", text: "Cliquez sur Appliquer et téléchargez votre fichier amplifié." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Ajuster le Volume", href: "/fr/audio-volume-adjuster" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Volume2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Optimisation du volume</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Ajuster le Volume Audio en Ligne
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Amplifiez les enregistrements faibles ou atténuez les pistes trop fortes. 100% privé dans votre navigateur.
        </p>
      </div>

      <DirectAnswer
        title="Augmenter le volume audio en ligne sans perte de clarté"
        lead="BrowserConvert normalise le signal audio localement dans la mémoire de votre appareil."
        body="Rendez intelligibles des cours enregistrés, des réunions ou des messages vocaux trop faibles sans téléverser vos fichiers vers des tiers."
        icon="sliders"
      />

      <AudioVolumeTool />

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

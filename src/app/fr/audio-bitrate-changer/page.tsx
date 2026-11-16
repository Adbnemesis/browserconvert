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
  title: "Modifier le Débit Audio - Régler les kbps MP3 Gratuit",
  description:
    "Changer le débit binaire d'un fichier audio en ligne gratuitement. Réencodez vos pistes audio en 128k, 192k, 256k ou 320 kbps. 100% privé dans le navigateur.",
  alternates: {
    canonical: `${siteConfig.url}/fr/audio-bitrate-changer`,
    languages: getHreflangAlternates("/audio-bitrate-changer"),
  },
  openGraph: {
    title: "Modifier le Débit Audio - Régler les kbps MP3 Gratuit",
    description: "Réencodez vos fichiers audio aux débits standards directement dans votre navigateur.",
    url: `${siteConfig.url}/fr/audio-bitrate-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modifier le Débit Audio ",
    description: "Réglez le débit binaire (kbps) de vos fichiers audio dans votre navigateur.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchAudioBitrateChangerPage() {
  const faqs = [
    {
      q: "Quel débit binaire dois-je choisir pour mes fichiers MP3 ?",
      a: "192 kbps offre le compromis optimal entre faible poids et haute qualité. Pour les morceaux exigeants, préférez 320 kbps.",
    },
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. Le réencodage s'effectue intégralement en local avec WebAssembly dans votre navigateur.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="fr"
        title="Modifier le Débit Audio en Ligne"
        description="Ajustez le débit binaire de fichiers audio en 128k, 192k ou 320 kbps directement dans votre navigateur."
        url="/fr/audio-bitrate-changer"
        breadcrumbs={[{ label: "Outils", href: "/fr" }, { label: "Modifier le Débit", href: "/fr/audio-bitrate-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Comment modifier le débit audio en ligne",
          description: "Réglez le débit en trois étapes simples.",
          steps: [
            { name: "Sélectionnez le fichier", text: "Déposez votre fichier audio dans l'outil." },
            { name: "Choisissez le débit", text: "Sélectionnez 128k, 192k, 256k ou 320 kbps." },
            { name: "Téléchargez", text: "Cliquez sur Modifier et téléchargez votre fichier réencodé." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Modifier le Débit", href: "/fr/audio-bitrate-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Sliders className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Ajuster le débit (kbps)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Modifier le Débit Audio en Ligne
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Réencodez vos fichiers audio aux débits standards (128k, 192k, 256k, 320k). 100% privé dans le navigateur.
        </p>
      </div>

      <DirectAnswer
        title="Régler le débit audio dans le navigateur sans téléversement"
        lead="BrowserConvert réencode les fichiers audio localement dans la mémoire vive de votre appareil."
        body="Allégez vos fichiers pour les partager facilement ou maximisez la fidélité pour une restitution sonore sur chaîne hi-fi."
        icon="sliders"
      />

      <AudioBitrateChangerTool />

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

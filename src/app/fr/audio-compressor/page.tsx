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
  title: "Compresser Audio en Ligne - Réduire la Taille d'un Fichier Audio",
  description:
    "Compresser des fichiers audio en ligne gratuitement. Réduisez la taille de MP3, WAV, FLAC et M4A jusqu'à 85% tout en préservant la clarté sonore. 100% privé dans le navigateur.",
  alternates: {
    canonical: `${siteConfig.url}/fr/audio-compressor`,
    languages: getHreflangAlternates("/audio-compressor"),
  },
  openGraph: {
    title: "Compresser Audio en Ligne - Réduire la Taille d'un Fichier Audio",
    description: "Réduisez la taille de vos fichiers MP3, WAV et FLAC directement dans votre navigateur.",
    url: `${siteConfig.url}/fr/audio-compressor`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compresseur Audio en Ligne ",
    description: "Réduisez la taille de vos fichiers audio directement dans votre navigateur.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchAudioCompressorPage() {
  const faqs = [
    {
      q: "De combien peut-on réduire la taille d'un fichier audio ?",
      a: "Les fichiers non compressés comme le WAV ou l'AIFF peuvent être réduits de 85% à 90%. Un fichier MP3 compressé à 320 kbps peut être allégé de plus de 50% en passant à 128 kbps.",
    },
    {
      q: "Y a-t-il une dégradation audible de la qualité ?",
      a: "À partir de 192 kbps, la qualité sonore reste excellente pour une écoute sur écouteurs ou dans la voiture.",
    },
    {
      q: "Mes fichiers sont-ils envoyés sur un serveur ?",
      a: "Non. Toute la compression s'effectue localement avec WebAssembly directement dans votre navigateur.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SeoSchema
        locale="fr"
        title="Compresser Audio en Ligne Gratuit"
        description="Réduisez la taille de fichiers MP3, WAV et FLAC tout en conservant une excellente fidélité sonore."
        url="/fr/audio-compressor"
        breadcrumbs={[{ label: "Outils", href: "/fr" }, { label: "Compresser Audio", href: "/fr/audio-compressor" }]}
        faqs={faqs}
        howTo={{
          name: "Comment compresser un fichier audio en ligne",
          description: "Allégez n'importe quel fichier audio en trois étapes simples.",
          steps: [
            { name: "Sélectionnez le fichier", text: "Déposez votre piste MP3, WAV ou FLAC dans le compresseur." },
            { name: "Choisissez la qualité", text: "Sélectionnez 128 kbps (fichier léger) ou 192 kbps (haute qualité)." },
            { name: "Compressez & Téléchargez", text: "Cliquez sur Compresser et téléchargez le fichier allégé." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Compresser Audio", href: "/fr/audio-compressor" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Minimize2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Réduire la taille audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Compresser Audio en Ligne Gratuit
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Réduisez la taille de vos fichiers MP3, WAV, FLAC et M4A avec une excellente clarté. 100% privé dans le navigateur.
        </p>
      </div>

      <DirectAnswer
        title="Réduire la taille des fichiers audio en ligne sans perte perceptible"
        lead="BrowserConvert optimise vos fichiers audio directement dans la mémoire de votre appareil."
        body="Gagnez un espace précieux sur votre smartphone ou préparez vos fichiers pour l'envoi par e-mail sans jamais partager vos pistes avec des serveurs tiers."
        icon="sliders"
      />

      <AudioCompressorTool />

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

import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { FileAudio, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertir M4A en MP3 Gratuit en Ligne - Mémos Vocaux iPhone en MP3",
  description:
    "Convertir M4A en MP3 en ligne gratuitement. Transformez les mémos vocaux Apple et fichiers iTunes M4A en MP3 universel. 100% privé dans votre navigateur, sans téléversement.",
  alternates: {
    canonical: `${siteConfig.url}/fr/m4a-to-mp3`,
    languages: getHreflangAlternates("/m4a-to-mp3"),
  },
  openGraph: {
    title: "Convertir M4A en MP3 Gratuit en Ligne - Mémos Vocaux iPhone en MP3",
    description: "Convertissez les mémos vocaux iPhone et fichiers M4A en MP3 universel directement dans votre navigateur.",
    url: `${siteConfig.url}/fr/m4a-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertisseur M4A en MP3 - BrowserConvert",
    description: "Convertissez les mémos vocaux Apple en MP3 avec une confidentialité absolue.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function FrenchM4aToMp3Page() {
  const faqs = [
    {
      q: "Pourquoi l'iPhone enregistre-t-il les mémos vocaux en M4A ?",
      a: "Apple utilise le format M4A avec compression AAC car il offre une meilleure clarté vocale à faible débit. Cependant, de nombreux appareils multimédia ou autoradios ne lisent que le MP3.",
    },
    {
      q: "Y a-t-il une perte de qualité sonore lors de la conversion M4A en MP3 ?",
      a: "En choisissant 192 ou 320 kbps, la différence est imperceptible pour l'oreille humaine. Vos enregistrements vocaux restent parfaitement clairs.",
    },
    {
      q: "Mes enregistrements vocaux confidentiels sont-ils envoyés sur un serveur ?",
      a: "Non. Le traitement s'effectue à 100% dans la mémoire locale de votre navigateur grâce à WebAssembly. Vos mémos vocaux privés ne quittent jamais votre appareil.",
    },
    {
      q: "Puis-je convertir plusieurs mémos vocaux simultanément ?",
      a: "Oui. Vous pouvez ajouter autant de fichiers M4A que vous le souhaitez et les télécharger tous ensemble sous forme d'archive ZIP.",
    },
  ];

  const comparisonRows = [
    { feature: "Codec audio", sourceValue: "AAC (Advanced Audio Coding)", targetValue: "MPEG-1 Audio Layer III (MP3)" },
    { feature: "Écosystème natif", sourceValue: "Optimisé pour Apple iOS, macOS, iTunes", targetValue: "Universel (Windows, Android, Linux, autoradios)" },
    { feature: "Compatibilité", sourceValue: "Appareils modernes et univers Apple", targetValue: "100% de tous les appareils et lecteurs audio" },
    { feature: "Clarté vocale", sourceValue: "Très efficace pour les petites tailles", targetValue: "Excellente fidélité à 192k–320 kbps" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Convertir M4A en MP3 Gratuit en Ligne"
        description="Transformez vos mémos vocaux Apple iPhone et fichiers M4A en MP3 universel directement dans votre navigateur."
        url="/fr/m4a-to-mp3"
        breadcrumbs={[{ label: "Convertisseur", href: "/fr" }, { label: "M4A en MP3", href: "/fr/m4a-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Comment convertir M4A en MP3 en ligne",
          description: "Convertissez vos mémos vocaux Apple en trois étapes simples.",
          steps: [
            { name: "Sélectionnez le fichier M4A", text: "Déposez vos enregistrements M4A dans le convertisseur." },
            { name: "Réglez le débit", text: "Choisissez 192 ou 320 kbps pour la clarté audio." },
            { name: "Téléchargez le MP3", text: "Cliquez sur Tout Convertir et téléchargez vos fichiers MP3." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "M4A en MP3", href: "/fr/m4a-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Conversion M4A vers MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir M4A en MP3 Gratuit en Ligne
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Transformez vos mémos vocaux Apple et fichiers M4A en MP3. 100% privé, sans téléversement et sans inscription.
        </p>
      </div>

      <DirectAnswer
        title="Convertir les mémos vocaux iPhone en MP3 sans passer par le cloud"
        lead="BrowserConvert transforme vos enregistrements M4A directement dans la mémoire de votre appareil."
        body="L'exécution locale avec WebAssembly garantit que vos notes vocales personnelles et réunions professionnelles ne transitent jamais sur des serveurs distants. C'est rapide, discret et sûr."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/x-m4a": [".m4a"], "audio/m4a": [".m4a"], "audio/aac": [".aac"] }}
        dropzoneHeadline="Déposez vos mémos vocaux M4A ici"
        dropzoneSubheadline="ou cliquez pour sélectionner des fichiers M4A depuis votre appareil"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="M4A (Apple Audio)"
        targetFormat="MP3 (Universel)"
        rows={comparisonRows}
      />

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

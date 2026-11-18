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
  title: "Convertir AAC a MP3 Online Gratis - Audio AAC a MP3 Universal",
  description: "Convierte AAC a MP3 online gratis. Transforma archivos de audio AAC en MP3 universal para estéreos de auto y reproductores. 100% local.",
  alternates: {
    canonical: `${siteConfig.url}/es/aac-to-mp3`,
    languages: getHreflangAlternates("/aac-to-mp3"),
  },
  openGraph: {
    title: "Convertir AAC a MP3 Online Gratis - Audio AAC a MP3 Universal",
    description: "Convierte AAC a MP3 online gratis. Transforma archivos de audio AAC en MP3 universal para estéreos de auto y reproductores. 100% local.",
    url: `${siteConfig.url}/es/aac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir AAC a MP3 Online Gratis - Audio AAC a MP3 Universal",
    description: "Convierte AAC a MP3 online gratis. Transforma archivos de audio AAC en MP3 universal para estéreos de auto y reproductores. 100% local.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ES_aac_to_mp3_Page() {
  const faqs = [
    {
        "q": "¿Qué diferencia hay entre AAC y MP3?",
        "a": "AAC ofrece mejor compresión por bit, pero MP3 es el formato estándar con compatibilidad garantizada en todo el mundo."
    },
    {
        "q": "¿Qué tasa de bits debo elegir?",
        "a": "Recomendamos 192 kbps o 320 kbps para preservar la riqueza tonal."
    },
    {
        "q": "¿Se envían mis archivos a algún servidor?",
        "a": "No, la conversión se realiza 100% en tu dispositivo."
    }
];

  const comparisonRows = [
    {
        "feature": "Eficiencia",
        "sourceValue": "Alta eficiencia por bit",
        "targetValue": "Excelente fidelidad a 192k–320k"
    },
    {
        "feature": "Compatibilidad de hardware",
        "sourceValue": "Dispositivos recientes",
        "targetValue": "100% de reproductores y autos"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir AAC a MP3 Online Gratis - Audio AAC a MP3 Universal"
        description="Convierte AAC a MP3 online gratis. Transforma archivos de audio AAC en MP3 universal para estéreos de auto y reproductores. 100% local."
        url="/es/aac-to-mp3"
        breadcrumbs={[
          { label: "Convertidor", href: "/es" },
          { label: "AAC a MP3", href: "/es/aac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertidor", href: "/es" },
          { label: "AAC a MP3", href: "/es/aac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>AAC a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir AAC a MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convierte pistas de audio AAC en archivos MP3 universales. Asegura la reproducción en cualquier estéreo de auto, celular o reproductor portátil.
        </p>
      </div>

      <DirectAnswer
        question="¿Por qué convertir un archivo AAC a formato MP3?"
        answer="Muchos estéreos antiguos y dispositivos USB no leen archivos .aac. Convertir a MP3 garantiza que tu música suene en cualquier equipo con total privacidad en el navegador."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/aac,audio/x-aac,.aac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Audio AAC"
        targetName="MP3 Universal"
        rows={comparisonRows}
      />

      <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2 className="text-lg sm:text-xl font-medium text-slate-900 dark:text-zinc-100">
            FAQ
          </h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0">
              <h3 className="text-sm font-medium text-slate-900 dark:text-zinc-200">
                {faq.q}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

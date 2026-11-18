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
  title: "Convertir OGG a MP3 Online Gratis - Vorbis OGG a MP3 Universal",
  description: "Convierte OGG a MP3 online gratis. Transforma audios OGG Vorbis en archivos MP3 compatibles con iPhone y estéreos de auto. 100% local.",
  alternates: {
    canonical: `${siteConfig.url}/es/ogg-to-mp3`,
    languages: getHreflangAlternates("/ogg-to-mp3"),
  },
  openGraph: {
    title: "Convertir OGG a MP3 Online Gratis - Vorbis OGG a MP3 Universal",
    description: "Convierte OGG a MP3 online gratis. Transforma audios OGG Vorbis en archivos MP3 compatibles con iPhone y estéreos de auto. 100% local.",
    url: `${siteConfig.url}/es/ogg-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir OGG a MP3 Online Gratis - Vorbis OGG a MP3 Universal",
    description: "Convierte OGG a MP3 online gratis. Transforma audios OGG Vorbis en archivos MP3 compatibles con iPhone y estéreos de auto. 100% local.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ES_ogg_to_mp3_Page() {
  const faqs = [
    {
        "q": "¿Por qué el iPhone no reproduce archivos OGG?",
        "a": "iOS no incluye compatibilidad nativa con OGG Vorbis en su app Música. Convertir a MP3 permite escuchar sin problemas."
    },
    {
        "q": "¿Qué calidad se obtiene?",
        "a": "Al elegir 192 kbps o 320 kbps, el resultado conserva plenamente la nitidez de la pista original."
    },
    {
        "q": "¿Se suben mis archivos a internet?",
        "a": "No, todo se convierte de manera local en tu navegador."
    }
];

  const comparisonRows = [
    {
        "feature": "Compatibilidad",
        "sourceValue": "Limitada en sistemas comerciales",
        "targetValue": "100% en todos los celulares y autos"
    },
    {
        "feature": "Compatibilidad Apple",
        "sourceValue": "No compatible nativamente en iOS",
        "targetValue": "Totalmente nativo"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir OGG a MP3 Online Gratis - Vorbis OGG a MP3 Universal"
        description="Convierte OGG a MP3 online gratis. Transforma audios OGG Vorbis en archivos MP3 compatibles con iPhone y estéreos de auto. 100% local."
        url="/es/ogg-to-mp3"
        breadcrumbs={[
          { label: "Convertidor", href: "/es" },
          { label: "OGG a MP3", href: "/es/ogg-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertidor", href: "/es" },
          { label: "OGG a MP3", href: "/es/ogg-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Vorbis a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir OGG a MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convierte audios OGG Vorbis en formato MP3 universal. Reproduce tus grabaciones en cualquier celular o reproductor sin instalar aplicaciones.
        </p>
      </div>

      <DirectAnswer
        question="¿Cómo reproducir archivos OGG en iPhone o en el estéreo del auto?"
        answer="Convierte tus audios OGG a MP3 en BrowserConvert. Dado que Apple y muchos estéreos no leen OGG, MP3 garantiza reproducción inmediata con total privacidad local."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/ogg,audio/vorbis,.ogg"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="OGG Vorbis"
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

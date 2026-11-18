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
  title: "Convertir FLAC a MP3 Online Gratis - Audio Alta Fidelidad a 320kbps",
  description: "Convierte FLAC a MP3 online gratis. Transforma álbumes FLAC sin pérdidas en archivos MP3 a 320kbps de máxima fidelidad. 100% privado en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/flac-to-mp3`,
    languages: getHreflangAlternates("/flac-to-mp3"),
  },
  openGraph: {
    title: "Convertir FLAC a MP3 Online Gratis - Audio Alta Fidelidad a 320kbps",
    description: "Convierte FLAC a MP3 online gratis. Transforma álbumes FLAC sin pérdidas en archivos MP3 a 320kbps de máxima fidelidad. 100% privado en tu navegador.",
    url: `${siteConfig.url}/es/flac-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir FLAC a MP3 Online Gratis - Audio Alta Fidelidad a 320kbps",
    description: "Convierte FLAC a MP3 online gratis. Transforma álbumes FLAC sin pérdidas en archivos MP3 a 320kbps de máxima fidelidad. 100% privado en tu navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ES_flac_to_mp3_Page() {
  const faqs = [
    {
        "q": "¿Por qué convertir de FLAC a MP3?",
        "a": "Los archivos FLAC ocupan mucho espacio (30-50 MB por canción) y no son compatibles con reproductores de auto antiguos o Apple Music nativo. MP3 a 320 kbps ahorra un 75% de espacio."
    },
    {
        "q": "¿Qué tasa de bits (bitrate) debo elegir?",
        "a": "Recomendamos 320 kbps para mantener el rango dinámico y la fidelidad del archivo original."
    },
    {
        "q": "¿Se suben mis archivos de música a algún servidor?",
        "a": "No. El proceso se ejecuta 100% local en tu navegador con WebAssembly. Tus archivos nunca salen de tu equipo."
    }
];

  const comparisonRows = [
    {
        "feature": "Tipo de compresión",
        "sourceValue": "Sin pérdidas (Bit-perfect)",
        "targetValue": "Compresión psicoacústica"
    },
    {
        "feature": "Bitrate típico",
        "sourceValue": "800–1411 kbps",
        "targetValue": "320 kbps o 192 kbps"
    },
    {
        "feature": "Tamaño de álbum",
        "sourceValue": "350–600 MB",
        "targetValue": "80–120 MB (~75% ahorro)"
    },
    {
        "feature": "Compatibilidad",
        "sourceValue": "Limitada en reproductores viejos",
        "targetValue": "Universal en el 100% de equipos"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir FLAC a MP3 Online Gratis - Audio Alta Fidelidad a 320kbps"
        description="Convierte FLAC a MP3 online gratis. Transforma álbumes FLAC sin pérdidas en archivos MP3 a 320kbps de máxima fidelidad. 100% privado en tu navegador."
        url="/es/flac-to-mp3"
        breadcrumbs={[
          { label: "Convertidor", href: "/es" },
          { label: "FLAC a MP3", href: "/es/flac-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertidor", href: "/es" },
          { label: "FLAC a MP3", href: "/es/flac-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Audio sin pérdidas a MP3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir FLAC a MP3 Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Convierte pistas FLAC con calidad de estudio a MP3 a 320 kbps. Perfecto para escuchar tu música en iPhone, Android y el auto.
        </p>
      </div>

      <DirectAnswer
        question="¿Cómo convertir FLAC a MP3 sin pérdida notable de calidad?"
        answer="Para convertir FLAC a MP3 con la máxima calidad, selecciona 320 kbps en BrowserConvert. FLAC ofrece sonido de estudio; transcodificar a 320 kbps conserva más del 95% del detalle sonoro y reduce el tamaño un 75%."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="audio/flac,.flac"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="FLAC (Sin pérdidas)"
        targetName="MP3 (Estándar 320k)"
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

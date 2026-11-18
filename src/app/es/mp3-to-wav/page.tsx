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
  title: "Convertir MP3 a WAV Online Gratis - Descomprimir Audio MP3 para DAWs",
  description: "Convierte MP3 a WAV online gratis. Descomprime archivos MP3 a WAV PCM de 16 bits sin compresión para edición musical. 100% local en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/mp3-to-wav`,
    languages: getHreflangAlternates("/mp3-to-wav"),
  },
  openGraph: {
    title: "Convertir MP3 a WAV Online Gratis - Descomprimir Audio MP3 para DAWs",
    description: "Convierte MP3 a WAV online gratis. Descomprime archivos MP3 a WAV PCM de 16 bits sin compresión para edición musical. 100% local en tu navegador.",
    url: `${siteConfig.url}/es/mp3-to-wav`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertir MP3 a WAV Online Gratis - Descomprimir Audio MP3 para DAWs",
    description: "Convierte MP3 a WAV online gratis. Descomprime archivos MP3 a WAV PCM de 16 bits sin compresión para edición musical. 100% local en tu navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ES_mp3_to_wav_Page() {
  const faqs = [
    {
        "q": "¿Se recupera la calidad original al pasar de MP3 a WAV?",
        "a": "No se recuperan datos eliminados por la compresión original, pero se evita la pérdida acumulada de calidad al volver a editar y guardar."
    },
    {
        "q": "¿Qué formato de WAV se genera?",
        "a": "BrowserConvert genera archivos WAV PCM de 16 bits y 44.1 kHz estéreo compatibles con todo software de edición."
    },
    {
        "q": "¿Mis archivos se suben a la red?",
        "a": "No. La descompresión ocurre de forma 100% local en tu navegador con WebAssembly."
    }
];

  const comparisonRows = [
    {
        "feature": "Tipo de archivo",
        "sourceValue": "Comprimido psicoacústico",
        "targetValue": "PCM lineal sin compresión"
    },
    {
        "feature": "Uso recomendado",
        "sourceValue": "Escucha en celulares y streaming",
        "targetValue": "Producción musical, DAWs y edición"
    },
    {
        "feature": "Edición en software",
        "sourceValue": "Carga decodificando constantemente",
        "targetValue": "Edición instantánea sin latencia"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir MP3 a WAV Online Gratis - Descomprimir Audio MP3 para DAWs"
        description="Convierte MP3 a WAV online gratis. Descomprime archivos MP3 a WAV PCM de 16 bits sin compresión para edición musical. 100% local en tu navegador."
        url="/es/mp3-to-wav"
        breadcrumbs={[
          { label: "Convertidor", href: "/es" },
          { label: "MP3 a WAV", href: "/es/mp3-to-wav" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Convertidor", href: "/es" },
          { label: "MP3 a WAV", href: "/es/mp3-to-wav" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Descompresión para DAWs</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir MP3 a WAV Online Gratis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Descomprime archivos MP3 en formato WAV PCM de 16 bits sin compresión. Diseñado para DAWs, edición de video y controladores DJ.
        </p>
      </div>

      <DirectAnswer
        question="¿Por qué convertir MP3 a WAV y qué ventajas tiene?"
        answer="Descomprimir MP3 a WAV genera un archivo PCM estándar que no requiere decodificación continua por la CPU en software de edición como Ableton, FL Studio o Premiere, evitando retrasos."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="wav"
          acceptTypes="audio/mpeg,audio/mp3,.mp3"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="MP3 (Comprimido)"
        targetName="WAV (Sin compresión)"
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

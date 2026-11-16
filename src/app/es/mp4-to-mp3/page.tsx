import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { Film, FileAudio, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Convertir MP4 a MP3 Online Gratis - Extraer Audio de Video",
  description:
    "Convierte MP4 a MP3 online gratis. Extrae el audio de tus videos MP4 directamente en tu navegador a 320kbps. 100% privado, sin subir archivos a servidores.",
  alternates: {
    canonical: `${siteConfig.url}/es/mp4-to-mp3`,
    languages: getHreflangAlternates("/mp4-to-mp3"),
  },
  openGraph: {
    title: "Convertir MP4 a MP3 Online Gratis - Extraer Audio de Video",
    description: "Convierte videos MP4 a MP3 de alta calidad directamente en tu navegador con total privacidad.",
    url: `${siteConfig.url}/es/mp4-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertidor MP4 a MP3 ",
    description: "Extrae audio MP3 de videos MP4 directamente en tu navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishMp4ToMp3Page() {
  const faqs = [
    {
      q: "¿La conversión de MP4 a MP3 reduce la calidad del sonido?",
      a: "BrowserConvert extrae la pista de audio y la codifica con libmp3lame de alto rendimiento. Al elegir 192 kbps o 320 kbps, el sonido es prácticamente idéntico al audio original del video.",
    },
    {
      q: "¿Se sube mi video MP4 a algún servidor?",
      a: "No. Todo el proceso ocurre en tu navegador mediante WebAssembly. El archivo de video permanece en tu dispositivo y nunca viaja por internet.",
    },
    {
      q: "¿Puedo extraer audio de videos MP4 grandes o en 4K?",
      a: "Sí. Debido a que las pistas de video se omiten y solo se procesa el audio, incluso videos en alta resolución se convierten velozmente.",
    },
    {
      q: "¿Funciona en teléfonos móviles?",
      a: "Sí. Puedes convertir videos MP4 grabados con tu celular directamente en Safari en iPhone o Chrome en Android.",
    },
  ];

  const comparisonRows = [
    { feature: "Tipo de Contenido", sourceValue: "Video + Audio (Contenedor multimedia)", targetValue: "Solo Audio (Pista de audio comprimida)" },
    { feature: "Tamaño Típico (Video 5 min)", sourceValue: "50 MB – 200 MB (dependiendo de resolución)", targetValue: "5 MB – 12 MB (~90% de ahorro de espacio)" },
    { feature: "Compatibilidad", sourceValue: "Reproductores de video, navegadores, TV", targetValue: "Universal (100% de dispositivos de sonido)" },
    { feature: "Uso Ideal", sourceValue: "Ver contenido visual, películas, clips", targetValue: "Escuchar música, podcasts, notas de voz" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Convertir MP4 a MP3 Online Gratis"
        description="Extrae audio de videos MP4 en tu navegador a 320kbps con procesamiento 100% local."
        url="/es/mp4-to-mp3"
        breadcrumbs={[{ label: "Convertidor", href: "/es" }, { label: "MP4 a MP3", href: "/es/mp4-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Convertir MP4 a MP3 Online",
          description: "Extrae audio de cualquier video MP4 en tres simples pasos.",
          steps: [
            { name: "Selecciona el Video MP4", text: "Arrastra tu video MP4 al convertidor. El archivo no sale de tu dispositivo." },
            { name: "Elige la Calidad MP3", text: "Elige entre 128, 192 o 320 kbps para el archivo de salida." },
            { name: "Descarga el MP3", text: "Haz clic en Convertir y descarga tu pista de audio MP3 al instante." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "MP4 a MP3", href: "/es/mp4-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Film className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Extracción de Video a Audio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Convertir MP4 a MP3 Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extrae pistas de audio de tus videos MP4 en alta calidad (hasta 320 kbps). Procesamiento 100% privado en tu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Extraer Audio de un Video MP4 Sin Subirlo a Internet"
        lead="BrowserConvert separa la pista de audio de tu video MP4 directamente en tu navegador."
        body="Al utilizar WebAssembly, el convertidor extrae la transmisión de audio sin necesidad de subir gigabytes de video a servidores remotos. Ahorras tiempo, datos y proteges completamente tu privacidad."
        icon="film"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "video/mp4": [".mp4"], "video/*": [".mov", ".mkv", ".webm"] }}
        dropzoneHeadline="Arrastra tus videos MP4 aquí"
        dropzoneSubheadline="o haz clic para seleccionar videos desde tu dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="MP4 (Video)"
        targetFormat="MP3 (Audio)"
        rows={comparisonRows}
      />

      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Preguntas Frecuentes</h2>
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

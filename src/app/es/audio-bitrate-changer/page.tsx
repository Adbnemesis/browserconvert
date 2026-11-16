import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioBitrateChangerTool } from "@/components/tools/AudioBitrateChangerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Gauge, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Cambiar Bitrate de Audio Online - Modificar MP3 a 320kbps Gratis",
  description:
    "Cambia el bitrate de tus archivos de audio online gratis. Ajusta a 64k, 128k, 192k, 256k o 320k kbps para MP3, M4A y AAC. 100% privado en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/audio-bitrate-changer`,
    languages: getHreflangAlternates("/audio-bitrate-changer"),
  },
  openGraph: {
    title: "Cambiar Bitrate de Audio Online - Modificar MP3 a 320kbps Gratis",
    description: "Recodifica audios MP3, M4A y AAC a bitrates de hasta 320 kbps directamente en tu navegador.",
    url: `${siteConfig.url}/es/audio-bitrate-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambiador de Bitrate de Audio ",
    description: "Recodifica tus pistas de audio al bitrate deseado sin subir archivos a la nube.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishAudioBitratePage() {
  const faqs = [
    {
      q: "¿Convertir un MP3 de 128 kbps a 320 kbps mejorará su calidad?",
      a: "No. El audio ya comprimido no puede recuperar frecuencias perdidas. Sin embargo, recodificar archivos WAV o FLAC sin compresión a 320 kbps garantiza la máxima calidad posible para MP3.",
    },
    {
      q: "¿Qué bitrate es ideal para música y podcasts?",
      a: "Para música en general, 192k o 256k kbps ofrece el mejor equilibrio entre tamaño y calidad de sonido. Para podcasts o notas de voz, 128 kbps es más que suficiente.",
    },
    {
      q: "¿Se sube mi archivo a algún servidor?",
      a: "No. La recodificación se realiza 100% en la memoria de tu navegador mediante WebAssembly.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Cambiar Bitrate de Audio Online Gratis"
        description="Recodifica archivos de audio a 128k, 192k, 256k o 320k kbps con procesamiento local en el navegador."
        url="/es/audio-bitrate-changer"
        breadcrumbs={[{ label: "Herramientas", href: "/es" }, { label: "Cambiar Bitrate", href: "/es/audio-bitrate-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Cambiar el Bitrate de un Audio Online",
          description: "Recodifica cualquier archivo de audio al bitrate deseado en tres pasos.",
          steps: [
            { name: "Selecciona el Archivo", text: "Elige tu archivo de audio desde tu dispositivo." },
            { name: "Elige el Bitrate", text: "Selecciona entre 64k, 128k, 192k, 256k o 320k kbps." },
            { name: "Convierte y Descarga", text: "Haz clic en Cambiar Bitrate y descarga tu archivo recodificado." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Cambiar Bitrate", href: "/es/audio-bitrate-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Gauge className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Control de Calidad de Compresión</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Cambiar Bitrate de Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Recodifica archivos MP3, M4A y AAC a bitrates estándar de 64k a 320k kbps. 100% privado en tu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Cambiar la Tasa de Bits (Bitrate) en el Navegador"
        lead="BrowserConvert recodifica la transmisión de audio localmente usando códecs nativos de alta fidelidad."
        body="A diferencia de otros servicios en la nube, el cambio de bitrate ocurre directamente en la memoria de tu dispositivo. Máxima velocidad y privacidad garantizada."
        icon="sliders"
      />

      <AudioBitrateChangerTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
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

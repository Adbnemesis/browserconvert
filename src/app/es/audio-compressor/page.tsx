import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioCompressorTool } from "@/components/tools/AudioCompressorTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Minimize2, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Compresor de Audio Online - Reducir Tamaño de Archivo Gratis",
  description:
    "Comprime archivos de audio online gratis. Reduce el tamaño de MP3, WAV, FLAC y M4A hasta un 85% sin perder claridad. 100% privado en tu navegador.",
  alternates: {
    canonical: `${siteConfig.url}/es/audio-compressor`,
    languages: getHreflangAlternates("/audio-compressor"),
  },
  openGraph: {
    title: "Compresor de Audio Online - Reducir Tamaño de Archivo Gratis",
    description: "Comprime archivos MP3, WAV y FLAC directamente en tu navegador con total privacidad.",
    url: `${siteConfig.url}/es/audio-compressor`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compresor de Audio Online - BrowserConvert",
    description: "Reduce el tamaño de tus archivos de audio sin subir datos a servidores.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishAudioCompressorPage() {
  const faqs = [
    {
      q: "¿Cómo funciona la compresión de audio en BrowserConvert?",
      a: "El compresor recodifica archivos pesados o sin compresión a códecs eficientes como MP3 o AAC con bitrates optimizados (como 128 kbps o 96 kbps), reduciendo el peso entre 50% y 85%.",
    },
    {
      q: "¿La compresión hará que el audio suene mal o robótico?",
      a: "No. Al usar algoritmos psicoacústicos modernos, la voz y la música retienen excelente claridad eliminando únicamente frecuencias redundantes inaudibles.",
    },
    {
      q: "¿Puedo comprimir audio para enviarlo por correo o WhatsApp?",
      a: "Sí. Reducir un archivo WAV de 60 MB lo deja en apenas 4 MB o 7 MB, ideal para adjuntar en correos o enviar por mensajería.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Compresor de Audio Online Gratis"
        description="Reduce el tamaño de archivos MP3, WAV y FLAC hasta un 85% con compresión local en el navegador."
        url="/es/audio-compressor"
        breadcrumbs={[{ label: "Herramientas", href: "/es" }, { label: "Compresor de Audio", href: "/es/audio-compressor" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Comprimir Archivos de Audio Online",
          description: "Reduce el peso de cualquier audio en tres simples pasos.",
          steps: [
            { name: "Selecciona el Archivo", text: "Elige o arrastra un archivo de audio pesado." },
            { name: "Selecciona el Nivel de Compresión", text: "Elige entre calidad Alta, Media o Ligera." },
            { name: "Descarga el Audio", text: "Haz clic en Comprimir y descarga tu archivo ligero." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Compresor de Audio", href: "/es/audio-compressor" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Minimize2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Reducción de Tamaño de Archivo</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Compresor de Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Comprime archivos MP3, WAV, FLAC y M4A hasta un 85% más ligeros. 100% privado en tu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Reducir el Tamaño de Archivos de Audio Sin Perder Calidad"
        lead="BrowserConvert optimiza la tasa de bits y el muestreo directamente en tu navegador."
        body="A diferencia de otros servicios que suben archivos a la nube, nuestro compresor ejecuta libmp3lame en WebAssembly dentro de tu computadora. Máxima velocidad y privacidad garantizada."
        icon="sliders"
      />

      <AudioCompressorTool />

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

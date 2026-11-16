import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AudioMergerTool } from "@/components/tools/AudioMergerTool";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { Layers, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Unir Audio Online Gratis - Combinar Pistas de Música",
  description:
    "Une varios archivos de audio online gratis. Combina pistas de MP3, WAV y M4A en un solo archivo continuo. 100% privado en tu navegador, sin subir archivos.",
  alternates: {
    canonical: `${siteConfig.url}/es/audio-merger`,
    languages: getHreflangAlternates("/audio-merger"),
  },
  openGraph: {
    title: "Unir Audio Online Gratis - Combinar Pistas de Música",
    description: "Combina varios archivos de audio en una sola pista sin interrupciones. 100% privado en el navegador.",
    url: `${siteConfig.url}/es/audio-merger`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unir Audio Online ",
    description: "Combina múltiples pistas de audio directamente en tu navegador.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function SpanishAudioMergerPage() {
  const faqs = [
    {
      q: "¿Cómo une los audios BrowserConvert sin subirlos a internet?",
      a: "El combinador decodifica cada archivo localmente en la memoria de tu navegador y concatena las muestras de audio en un único flujo de audio exportado sin enviar ningún dato a la nube.",
    },
    {
      q: "¿Puedo cambiar el orden en que se unen las canciones?",
      a: "Sí. Puedes usar los botones de subir y bajar en cada pista para ordenar la secuencia exacta antes de exportar.",
    },
    {
      q: "¿Puedo unir archivos con formatos diferentes (por ejemplo, MP3 y WAV)?",
      a: "Sí. Nuestro motor WebAssembly normaliza automáticamente las frecuencias de muestreo y combina formatos mixtos en un archivo final limpio.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="es"
        title="Unir Audio Online Gratis"
        description="Combina múltiples pistas de audio MP3, WAV y M4A en un único archivo continuo con total privacidad."
        url="/es/audio-merger"
        breadcrumbs={[{ label: "Herramientas", href: "/es" }, { label: "Unir Audio", href: "/es/audio-merger" }]}
        faqs={faqs}
        howTo={{
          name: "Cómo Unir Archivos de Audio Online",
          description: "Combina varias canciones o audios en tres simples pasos.",
          steps: [
            { name: "Añade las Pistas", text: "Arrastra dos o más archivos de audio a la lista." },
            { name: "Organiza el Orden", text: "Reordena las pistas en la secuencia deseada." },
            { name: "Une y Descarga", text: "Haz clic en Unir Pistas y descarga el archivo resultante." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Unir Audio", href: "/es/audio-merger" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Layers className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Combinador de Audio en el Navegador</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Unir Audio Online Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Combina múltiples canciones y notas de voz en una sola pista sin pausas. Procesamiento 100% privado en tu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Cómo Unir Canciones y Pistas de Audio en el Navegador"
        lead="BrowserConvert combina pistas de audio localmente usando WebAssembly."
        body="A diferencia de los editores lentos basados en la nube, la unión de pistas se realiza directamente en la memoria de tu dispositivo. Tus canciones y grabaciones nunca se transfieren a servidores externos."
        icon="sliders"
      />

      <AudioMergerTool />

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

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
  title: "Converter MP3 para WAV Online Grátis - Descomprimir Áudio para DAWs",
  description: "Converta MP3 para WAV online grátis. Descomprima arquivos MP3 em WAV PCM de 16 bits sem compressão para produção musical. 100% privado.",
  alternates: {
    canonical: `${siteConfig.url}/pt/mp3-to-wav`,
    languages: getHreflangAlternates("/mp3-to-wav"),
  },
  openGraph: {
    title: "Converter MP3 para WAV Online Grátis - Descomprimir Áudio para DAWs",
    description: "Converta MP3 para WAV online grátis. Descomprima arquivos MP3 em WAV PCM de 16 bits sem compressão para produção musical. 100% privado.",
    url: `${siteConfig.url}/pt/mp3-to-wav`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Converter MP3 para WAV Online Grátis - Descomprimir Áudio para DAWs",
    description: "Converta MP3 para WAV online grátis. Descomprima arquivos MP3 em WAV PCM de 16 bits sem compressão para produção musical. 100% privado.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PT_mp3_to_wav_Page() {
  const faqs = [
    {
        "q": "A conversão de MP3 para WAV recupera a qualidade original?",
        "a": "Não é possível recriar frequências descartadas na compressão inicial, mas o WAV oferece a base técnica perfeita para edição profissional."
    },
    {
        "q": "Qual padrão de WAV é gerado?",
        "a": "O BrowserConvert gera arquivos WAV PCM padrão de 16 bits e 44.1 kHz compatíveis com qualquer equipamento."
    },
    {
        "q": "Meus áudios são enviados para servidores?",
        "a": "Não. O processamento acontece 100% no seu dispositivo via WebAssembly."
    }
];

  const comparisonRows = [
    {
        "feature": "Tipo de formato",
        "sourceValue": "Compressão perceptiva com perdas",
        "targetValue": "PCM linear sem compressão"
    },
    {
        "feature": "Aplicação",
        "sourceValue": "Reprodução em celulares e fones",
        "targetValue": "DAWs, mesas DJ e edição"
    },
    {
        "feature": "Desempenho em edição",
        "sourceValue": "Decodificação contínua",
        "targetValue": "Carregamento imediato da onda sonora"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Converter MP3 para WAV Online Grátis - Descomprimir Áudio para DAWs"
        description="Converta MP3 para WAV online grátis. Descomprima arquivos MP3 em WAV PCM de 16 bits sem compressão para produção musical. 100% privado."
        url="/pt/mp3-to-wav"
        breadcrumbs={[
          { label: "Conversor", href: "/pt" },
          { label: "MP3 para WAV", href: "/pt/mp3-to-wav" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Conversor", href: "/pt" },
          { label: "MP3 para WAV", href: "/pt/mp3-to-wav" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <FileAudio className="h-3.5 w-3.5" />
          <span>Descompressão para DAWs</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Converter MP3 para WAV Online Grátis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Descomprima áudios MP3 em arquivos WAV PCM de 16 bits sem compressão. Perfeito para DAWs, edição de vídeo e equipamentos para DJs.
        </p>
      </div>

      <DirectAnswer
        question="Por que descomprimir MP3 para WAV na edição musical?"
        answer="DAWs como Reaper, FL Studio ou Ableton manipulam WAV PCM instantaneamente sem sobrecarga de decodificação na CPU, evitando perdas sucessivas de qualidade."
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
        targetName="WAV (Sem compressão)"
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

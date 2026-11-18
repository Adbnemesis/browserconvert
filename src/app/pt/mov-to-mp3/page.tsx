import React from "react";
import type { Metadata } from "next";
import { Converter } from "@/components/converter/Converter";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { siteConfig } from "@/lib/config/site";
import { SeoSchema } from "@/components/seo/SeoSchema";
import { DirectAnswer } from "@/components/seo/DirectAnswer";
import { ComparisonTable } from "@/components/seo/ComparisonTable";
import { Film, HelpCircle } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Converter MOV para MP3 Online Grátis - Extrair Áudio de Vídeos MOV",
  description: "Converta QuickTime MOV para MP3 online grátis. Extraia áudio de vídeos do iPhone e gravações do Mac diretamente no navegador. 100% privado.",
  alternates: {
    canonical: `${siteConfig.url}/pt/mov-to-mp3`,
    languages: getHreflangAlternates("/mov-to-mp3"),
  },
  openGraph: {
    title: "Converter MOV para MP3 Online Grátis - Extrair Áudio de Vídeos MOV",
    description: "Converta QuickTime MOV para MP3 online grátis. Extraia áudio de vídeos do iPhone e gravações do Mac diretamente no navegador. 100% privado.",
    url: `${siteConfig.url}/pt/mov-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Converter MOV para MP3 Online Grátis - Extrair Áudio de Vídeos MOV",
    description: "Converta QuickTime MOV para MP3 online grátis. Extraia áudio de vídeos do iPhone e gravações do Mac diretamente no navegador. 100% privado.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PT_mov_to_mp3_Page() {
  const faqs = [
    {
        "q": "Posso converter vídeos pesados gravados em 4K no iPhone?",
        "a": "Sim. O BrowserConvert processa somente a faixa de áudio e desconsidera o vídeo, garantindo extração rápida mesmo em arquivos grandes."
    },
    {
        "q": "Por que converter MOV para MP3?",
        "a": "Vídeos MOV consomem gigabytes. Se você precisa apenas da voz, aula ou música, o MP3 ocupa apenas alguns megabytes."
    },
    {
        "q": "Meus vídeos confidenciais são enviados para servidores?",
        "a": "Não. O arquivo permanece no seu navegador e é processado localmente com WebAssembly."
    }
];

  const comparisonRows = [
    {
        "feature": "Conteúdo",
        "sourceValue": "Vídeo ProRes/H.264 + Áudio",
        "targetValue": "Apenas a faixa de áudio MP3"
    },
    {
        "feature": "Tamanho (5 min)",
        "sourceValue": "500 MB – 2 GB+",
        "targetValue": "5 MB – 10 MB (98% menor)"
    },
    {
        "feature": "Privacidade",
        "sourceValue": "Sem envio para internet",
        "targetValue": "Processamento local no aparelho"
    }
];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Converter MOV para MP3 Online Grátis - Extrair Áudio de Vídeos MOV"
        description="Converta QuickTime MOV para MP3 online grátis. Extraia áudio de vídeos do iPhone e gravações do Mac diretamente no navegador. 100% privado."
        url="/pt/mov-to-mp3"
        breadcrumbs={[
          { label: "Conversor", href: "/pt" },
          { label: "MOV para MP3", href: "/pt/mov-to-mp3" }
        ]}
        faqs={faqs}
      />

      <Breadcrumbs
        items={[
          { label: "Conversor", href: "/pt" },
          { label: "MOV para MP3", href: "/pt/mov-to-mp3" }
        ]}
      />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-white/10 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>Vídeo para áudio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 dark:text-zinc-100">
          Converter MOV para MP3 Online Grátis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extraia áudio MP3 de alta fidelidade dos seus vídeos MOV do iPhone. Economize 98% de espaço com privacidade absoluta.
        </p>
      </div>

      <DirectAnswer
        question="Como extrair áudio de um vídeo MOV do iPhone sem instalar programas?"
        answer="Arraste o vídeo MOV para o BrowserConvert. A ferramenta extrai a faixa de som e a codifica em MP3 a 192k ou 320 kbps localmente no seu dispositivo."
      />

      <div className="relative">
        <Converter
          defaultOutputFormat="mp3"
          acceptTypes="video/quicktime,.mov"
        />
      </div>

      <AdSlot position="headerBanner" />

      <ComparisonTable
        sourceName="Vídeo MOV QuickTime"
        targetName="Áudio MP3"
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

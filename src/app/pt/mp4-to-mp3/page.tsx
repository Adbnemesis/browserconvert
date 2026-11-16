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
  title: "Converter MP4 para MP3 Online Grátis - Extrair Áudio de Vídeo",
  description:
    "Converta MP4 para MP3 online grátis. Extraia áudio de vídeos MP4 diretamente no seu navegador com alta qualidade de até 320kbps. 100% privado, sem uploads.",
  alternates: {
    canonical: `${siteConfig.url}/pt/mp4-to-mp3`,
    languages: getHreflangAlternates("/mp4-to-mp3"),
  },
  openGraph: {
    title: "Converter MP4 para MP3 Online Grátis - Extrair Áudio de Vídeo",
    description: "Converta vídeos MP4 para MP3 em alta qualidade diretamente no seu navegador.",
    url: `${siteConfig.url}/pt/mp4-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor MP4 para MP3 - BrowserConvert",
    description: "Extraia áudio MP3 de vídeos MP4 diretamente no navegador sem enviar arquivos para a internet.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseMp4ToMp3Page() {
  const faqs = [
    {
      q: "A conversão de MP4 para MP3 diminui a qualidade do som?",
      a: "O BrowserConvert extrai o fluxo de áudio original e o codifica com o libmp3lame em até 320 kbps. O som resultante é praticamente idêntico ao áudio original contido no vídeo MP4.",
    },
    {
      q: "Meu vídeo MP4 é enviado para algum servidor?",
      a: "Não. Todo o processamento ocorre localmente no seu navegador via WebAssembly. O arquivo de vídeo nunca sai do seu aparelho.",
    },
    {
      q: "Consigo extrair áudio de vídeos 4K ou arquivos pesados?",
      a: "Sim. Como as imagens do vídeo são descartadas e apenas a trilha sonora é processada, mesmo vídeos em 4K são convertidos de forma rápida.",
    },
    {
      q: "Funciona em celulares Android e iPhone?",
      a: "Sim. Você pode converter vídeos gravados no celular diretamente pelo Safari no iOS ou Chrome no Android.",
    },
  ];

  const comparisonRows = [
    { feature: "Tipo de Conteúdo", sourceValue: "Vídeo + Áudio (Arquivo multimídia)", targetValue: "Apenas Áudio (Trilha sonora comprimida)" },
    { feature: "Tamanho Médio (Vídeo 5 min)", sourceValue: "50 MB – 200 MB (conforme resolução)", targetValue: "5 MB – 12 MB (~90% de economia de espaço)" },
    { feature: "Compatibilidade", sourceValue: "Players de vídeo, TVs, navegadores", targetValue: "Universal (100% dos aparelhos de som)" },
    { feature: "Uso Principal", sourceValue: "Assistir filmes, clipes e aulas", targetValue: "Ouvir músicas, podcasts e palestras" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Converter MP4 para MP3 Online Grátis"
        description="Extraia áudio de vídeos MP4 no seu navegador a 320kbps com processamento 100% local."
        url="/pt/mp4-to-mp3"
        breadcrumbs={[{ label: "Conversor", href: "/pt" }, { label: "MP4 para MP3", href: "/pt/mp4-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Como Converter MP4 para MP3 Online",
          description: "Extraia o áudio de qualquer vídeo MP4 em três passos fáceis.",
          steps: [
            { name: "Selecione o Vídeo MP4", text: "Arraste seu vídeo MP4 para o conversor. O arquivo não sai do seu aparelho." },
            { name: "Escolha a Qualidade MP3", text: "Escolha entre 128, 192 ou 320 kbps para o áudio de saída." },
            { name: "Baixe o MP3", text: "Clique em Converter e baixe sua faixa de áudio MP3 na hora." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "MP4 para MP3", href: "/pt/mp4-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Film className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Extração de Vídeo para Áudio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Converter MP4 para MP3 Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Extraia áudio de vídeos MP4 em alta qualidade (até 320 kbps). Processamento 100% privado no seu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Como Extrair Áudio de um Vídeo MP4 Sem Fazer Upload"
        lead="O BrowserConvert separa a faixa sonora do seu vídeo MP4 diretamente no seu navegador."
        body="Usando WebAssembly, o conversor extrai a trilha de áudio sem que você precise gastar sua internet enviando gigabytes de vídeo para servidores na nuvem. Muito mais rápido e 100% seguro."
        icon="film"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "video/mp4": [".mp4"], "video/*": [".mov", ".mkv", ".webm"] }}
        dropzoneHeadline="Arraste seus vídeos MP4 aqui"
        dropzoneSubheadline="ou clique para escolher vídeos do seu dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="MP4 (Vídeo)"
        targetFormat="MP3 (Áudio)"
        rows={comparisonRows}
      />

      <div className="max-w-3xl mx-auto space-y-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-zinc-100 font-semibold text-lg">
          <HelpCircle className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h2>Perguntas Frequentes</h2>
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

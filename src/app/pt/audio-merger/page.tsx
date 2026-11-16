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
  title: "Juntar Áudio Online Grátis - Unir Músicas e Faixas",
  description:
    "Junte vários arquivos de áudio online grátis. Combine faixas de MP3, WAV e M4A em uma única música contínua. 100% privado no navegador, sem uploads.",
  alternates: {
    canonical: `${siteConfig.url}/pt/audio-merger`,
    languages: getHreflangAlternates("/audio-merger"),
  },
  openGraph: {
    title: "Juntar Áudio Online Grátis - Unir Músicas e Faixas",
    description: "Combine vários arquivos de áudio em uma única faixa contínua diretamente no navegador.",
    url: `${siteConfig.url}/pt/audio-merger`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juntar Áudio Online - BrowserConvert",
    description: "Combine faixas de áudio sem enviar arquivos para a internet.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseAudioMergerPage() {
  const faqs = [
    {
      q: "Como o BrowserConvert junta os áudios sem enviar arquivos para a internet?",
      a: "O combinador decodifica cada arquivo diretamente na memória do seu navegador e une as amostras em uma trilha de áudio contínua sem que nenhum dado seja enviado para servidores.",
    },
    {
      q: "Posso mudar a ordem em que as músicas são juntadas?",
      a: "Sim. Use as setas de subir e descer ao lado de cada arquivo para definir a sequência exata antes de exportar.",
    },
    {
      q: "Consigo juntar formatos diferentes (por exemplo, MP3 com WAV)?",
      a: "Sim. O motor WebAssembly converte e normaliza as taxas de áudio automaticamente em uma saída limpa e contínua.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Juntar Áudio Online Grátis"
        description="Combine múltiplas faixas de áudio MP3, WAV e M4A em uma única música com total privacidade."
        url="/pt/audio-merger"
        breadcrumbs={[{ label: "Ferramentas", href: "/pt" }, { label: "Juntar Áudio", href: "/pt/audio-merger" }]}
        faqs={faqs}
        howTo={{
          name: "Como Juntar Músicas e Áudios Online",
          description: "Combine várias faixas em três passos simples.",
          steps: [
            { name: "Adicione as Faixas", text: "Arraste dois ou mais arquivos de áudio para a lista." },
            { name: "Ajuste a Ordem", text: "Reordene as faixas conforme desejar." },
            { name: "Junte e Baixe", text: "Clique em Juntar Faixas e baixe seu arquivo combinado." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "Juntar Áudio", href: "/pt/audio-merger" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Layers className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Combinador de Áudio no Navegador</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Juntar Áudio Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Combine várias músicas e áudios em um único arquivo contínuo. Processamento 100% privado no seu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Como Unir Músicas no Navegador Sem Fazer Upload"
        lead="O BrowserConvert junta suas faixas sonoras diretamente na memória do seu aparelho."
        body="Ao contrário de outros serviços lentos na nuvem, a junção de faixas é feita em tempo recorde no seu dispositivo. Suas músicas nunca são enviadas para a internet."
        icon="sliders"
      />

      <AudioMergerTool />

      <AdSlot className="max-w-3xl mx-auto" />

      
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

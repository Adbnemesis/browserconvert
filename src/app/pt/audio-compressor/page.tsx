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
  title: "Comprimir Áudio Online - Reduzir Tamanho de Arquivo Grátis",
  description:
    "Comprima arquivos de áudio online grátis. Reduza o tamanho de MP3, WAV, FLAC e M4A em até 85% sem perder qualidade. 100% privado no navegador, sem upload.",
  alternates: {
    canonical: `${siteConfig.url}/pt/audio-compressor`,
    languages: getHreflangAlternates("/audio-compressor"),
  },
  openGraph: {
    title: "Comprimir Áudio Online - Reduzir Tamanho de Arquivo Grátis",
    description: "Comprima arquivos MP3, WAV e FLAC diretamente no navegador com total privacidade.",
    url: `${siteConfig.url}/pt/audio-compressor`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprimir Áudio Online - BrowserConvert",
    description: "Reduza o tamanho de arquivos de áudio sem enviar dados para servidores.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseAudioCompressorPage() {
  const faqs = [
    {
      q: "Como funciona a compressão de áudio no BrowserConvert?",
      a: "O compressor recodifica arquivos pesados para formatos otimizados como MP3 com taxas inteligentes (128 kbps ou 96 kbps), reduzindo o tamanho em 50% a 85%.",
    },
    {
      q: "O áudio vai ficar abafado ou robotizado?",
      a: "Não. Com modelos acústicos modernos, voz e instrumentos mantêm excelente clareza, eliminando apenas frequências inaudíveis ao ouvido humano.",
    },
    {
      q: "Posso comprimir áudios para enviar por WhatsApp ou e-mail?",
      a: "Sim. Um arquivo WAV de 60 MB cai para cerca de 4 MB a 7 MB, perfeito para anexar em e-mails e mensagens.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Comprimir Áudio Online Grátis"
        description="Reduza o tamanho de arquivos MP3, WAV e FLAC em até 85% com processamento local no navegador."
        url="/pt/audio-compressor"
        breadcrumbs={[{ label: "Ferramentas", href: "/pt" }, { label: "Comprimir Áudio", href: "/pt/audio-compressor" }]}
        faqs={faqs}
        howTo={{
          name: "Como Comprimir Áudio Online",
          description: "Diminua o peso de qualquer áudio em três passos fáceis.",
          steps: [
            { name: "Selecione o Arquivo", text: "Escolha ou arraste um arquivo de áudio pesado." },
            { name: "Escolha o Nível", text: "Selecione qualidade Alta, Média ou Econômica." },
            { name: "Baixe o Arquivo", text: "Clique em Comprimir e baixe seu áudio leve." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "Comprimir Áudio", href: "/pt/audio-compressor" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Minimize2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Redução de Tamanho de Áudio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Comprimir Áudio Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Comprima arquivos MP3, WAV, FLAC e M4A em até 85%. 100% privado no seu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Como Diminuir o Tamanho de Músicas e Áudios Sem Perder Qualidade"
        lead="O BrowserConvert otimiza a taxa de bits diretamente no seu navegador."
        body="Ao contrário de outros serviços que guardam seus arquivos na nuvem, nosso compressor executa WebAssembly dentro do seu aparelho. Máxima velocidade e privacidade total."
        icon="sliders"
      />

      <AudioCompressorTool />

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

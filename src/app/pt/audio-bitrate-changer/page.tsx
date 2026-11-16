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
  title: "Alterar Bitrate de Áudio Online - Mudar MP3 para 320kbps Grátis",
  description:
    "Altere o bitrate de seus áudios online grátis. Ajuste para 64k, 128k, 192k, 256k ou 320k kbps para MP3, M4A e AAC. 100% privado no navegador, sem uploads.",
  alternates: {
    canonical: `${siteConfig.url}/pt/audio-bitrate-changer`,
    languages: getHreflangAlternates("/audio-bitrate-changer"),
  },
  openGraph: {
    title: "Alterar Bitrate de Áudio Online - Mudar MP3 para 320kbps Grátis",
    description: "Recodifique áudios para taxas de até 320 kbps diretamente no seu navegador.",
    url: `${siteConfig.url}/pt/audio-bitrate-changer`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alterar Bitrate de Áudio ",
    description: "Recodifique áudios sem enviar arquivos para a internet.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseAudioBitratePage() {
  const faqs = [
    {
      q: "Converter um MP3 de 128 kbps para 320 kbps vai melhorar a qualidade?",
      a: "Não. Frequências perdidas na compressão inicial não voltam. Contudo, recodificar faixas WAV ou FLAC master para 320 kbps garante a melhor qualidade MP3 possível.",
    },
    {
      q: "Qual taxa de bits devo escolher para músicas?",
      a: "Para músicas em geral, 192k ou 256k kbps oferece o equilíbrio perfeito entre tamanho e qualidade sonora. Para podcasts ou aulas, 128 kbps é suficiente.",
    },
    {
      q: "O arquivo é enviado para a internet?",
      a: "Não. A recodificação é processada 100% na memória RAM do seu aparelho via WebAssembly.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        locale="pt"
        title="Alterar Bitrate de Áudio Online Grátis"
        description="Recodifique arquivos de áudio para 128k, 192k, 256k ou 320k kbps com processamento local no navegador."
        url="/pt/audio-bitrate-changer"
        breadcrumbs={[{ label: "Ferramentas", href: "/pt" }, { label: "Alterar Bitrate", href: "/pt/audio-bitrate-changer" }]}
        faqs={faqs}
        howTo={{
          name: "Como Mudar o Bitrate de um Áudio Online",
          description: "Recodifique qualquer áudio para a taxa de bits desejada em três passos simples.",
          steps: [
            { name: "Selecione o Arquivo", text: "Escolha seu arquivo de áudio no seu aparelho." },
            { name: "Escolha o Bitrate", text: "Selecione 64k, 128k, 192k, 256k ou 320k kbps." },
            { name: "Converta e Baixe", text: "Clique em Alterar Bitrate e baixe seu áudio recodificado." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "Alterar Bitrate", href: "/pt/audio-bitrate-changer" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <Gauge className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Controle de Taxa de Bits de Áudio</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Alterar Bitrate de Áudio Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Recodifique arquivos MP3, M4A e AAC para taxas de 64k até 320k kbps. 100% privado no seu navegador.
        </p>
      </div>

      <DirectAnswer
        title="Como Modificar a Taxa de Bits no Navegador Sem Fazer Upload"
        lead="O BrowserConvert recodifica sua faixa de áudio localmente com codecs de alta fidelidade."
        body="Ao contrário de outros serviços na nuvem, a mudança de taxa de bits acontece diretamente na memória do seu aparelho. Máxima velocidade e privacidade total."
        icon="sliders"
      />

      <AudioBitrateChangerTool />

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

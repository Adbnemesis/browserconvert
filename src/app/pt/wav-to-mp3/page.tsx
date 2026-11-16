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
import { FileAudio, HelpCircle, CheckCircle2 } from "lucide-react";
import { getHreflangAlternates } from "@/i18n";

export const metadata: Metadata = {
  title: "Converter WAV para MP3 Online Grátis - Comprimir Áudio WAV",
  description:
    "Converta WAV para MP3 online grátis. Comprima gravações WAV sem perdas para MP3 de até 320kbps. 100% privado no seu navegador, sem upload para servidores.",
  alternates: {
    canonical: `${siteConfig.url}/pt/wav-to-mp3`,
    languages: getHreflangAlternates("/wav-to-mp3"),
  },
  openGraph: {
    title: "Converter WAV para MP3 Online Grátis - Comprimir Áudio WAV",
    description: "Comprima gravações WAV para MP3 a 320kbps diretamente no seu navegador.",
    url: `${siteConfig.url}/pt/wav-to-mp3`,
    images: [`${siteConfig.url}/og-image.png`],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor WAV para MP3 - BrowserConvert",
    description: "Converta gravações de áudio WAV para MP3 com total privacidade.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PortugueseWavToMp3Page() {
  const faqs = [
    {
      q: "Quanto espaço eu economizo convertendo WAV para MP3?",
      a: "Um arquivo WAV consome cerca de 10 MB por minuto. Convertendo para MP3 a 192 ou 320 kbps, você economiza entre 85% e 90% do espaço, reduzindo para cerca de 1.4 MB por minuto.",
    },
    {
      q: "Dá para perceber a diferença entre WAV e MP3 a 320 kbps?",
      a: "Em fones de ouvido comuns e caixas de som residenciais, o ouvido humano comum não percebe diferença perceptível entre WAV de 16 bits e MP3 a 320 kbps.",
    },
    {
      q: "Qual bitrate devo escolher para converter WAV em MP3?",
      a: "Para ouvir no celular ou carro, 192 ou 256 kbps é ideal. Para portfólio musical ou apresentações profissionais, escolha 320 kbps.",
    },
  ];

  const comparisonRows = [
    { feature: "Tipo de Compressão", sourceValue: "PCM Linear Sem Compressão (Áudio puro)", targetValue: "Compressão Psicoacústica Inteligente" },
    { feature: "Taxa de Bits (Bitrate)", sourceValue: "1.411 kbps (16 bits / 44.1 kHz estéreo)", targetValue: "128 kbps a 320 kbps (Configurável)" },
    { feature: "Tamanho (Faixa 4 min)", sourceValue: "Cerca de 40 MB – 50 MB", targetValue: "Cerca de 4 MB – 9 MB (~85% a 90% de economia)" },
    { feature: "Uso Recomendado", sourceValue: "Gravações em estúdio, edição em DAWs", targetValue: "Celulares, som de carro, compartilhamento" },
    { feature: "Compatibilidade", sourceValue: "Alta em PCs/Macs; limitada em aparelhos antigos", targetValue: "Universal (100% dos aparelhos digitais)" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SeoSchema
        title="Converter WAV para MP3 Online Grátis"
        description="Comprima faixas WAV para MP3 a 320kbps com processamento local no seu navegador."
        url="/pt/wav-to-mp3"
        breadcrumbs={[{ label: "Conversor", href: "/pt" }, { label: "WAV para MP3", href: "/pt/wav-to-mp3" }]}
        faqs={faqs}
        howTo={{
          name: "Como Converter WAV para MP3 Online",
          description: "Converta arquivos WAV para MP3 em três passos fáceis.",
          steps: [
            { name: "Selecione o Arquivo WAV", text: "Arraste seus áudios WAV para o conversor." },
            { name: "Escolha a Qualidade", text: "Selecione 192 ou 320 kbps para máxima fidelidade." },
            { name: "Baixe o MP3", text: "Clique em Converter e baixe seu áudio MP3 na hora." },
          ],
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Início", href: "/pt" },
          { label: "WAV para MP3", href: "/pt/wav-to-mp3" },
        ]}
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-zinc-300">
          <FileAudio className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Compressão de Áudio WAV para MP3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
          Converter WAV para MP3 Online Grátis
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
          Comprima gravações de estúdio WAV para MP3 a 320 kbps ou 192 kbps. 100% privado no navegador, sem limites nem cadastro.
        </p>
      </div>

      <DirectAnswer
        title="Como Converter WAV para MP3 no Navegador Sem Fazer Upload"
        lead="O BrowserConvert comprime arquivos WAV diretamente na memória do seu computador ou celular."
        body="Usando WebAssembly e libmp3lame, a compressão acontece em velocidade máxima no seu próprio dispositivo. Suas gravações particulares nunca são transmitidas para a nuvem."
        icon="music"
      />

      <Converter
        initialOutputFormat="mp3"
        acceptTypes={{ "audio/wav": [".wav"], "audio/x-wav": [".wav"] }}
        dropzoneHeadline="Arraste seus áudios WAV aqui"
        dropzoneSubheadline="ou clique para escolher arquivos WAV do seu dispositivo"
      />

      <AdSlot className="max-w-4xl mx-auto" />

      
      <ComparisonTable
        sourceFormat="WAV (Sem compressão)"
        targetFormat="MP3 (Comprimido)"
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

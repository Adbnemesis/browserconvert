import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "Sobre o BrowserConvert - Conversão de áudio e vídeo no navegador",
  description: "Conheça a arquitetura de conversão nativa do BrowserConvert. Rápida, gratuita e 100% privada sem uploads para servidores.",
  alternates: {
    canonical: `${siteConfig.url}/pt/about`,
  },
  openGraph: {
    title: "Sobre o BrowserConvert - Conversão de áudio e vídeo no navegador",
    description: "Conheça a arquitetura de conversão nativa do BrowserConvert. Rápida, gratuita e 100% privada sem uploads para servidores.",
    url: `${siteConfig.url}/pt/about`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre o BrowserConvert - Conversão de áudio e vídeo no navegador",
    description: "Conheça a arquitetura de conversão nativa do BrowserConvert. Rápida, gratuita e 100% privada sem uploads para servidores.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AboutPage() {
  return <AboutView locale="pt" />;
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "Acerca de BrowserConvert - Conversión de audio y vídeo en el navegador",
  description: "Conoce la arquitectura de conversión en el navegador de BrowserConvert. Rápida, gratuita y 100% privada sin subir archivos.",
  alternates: {
    canonical: `${siteConfig.url}/es/about`,
  },
  openGraph: {
    title: "Acerca de BrowserConvert - Conversión de audio y vídeo en el navegador",
    description: "Conoce la arquitectura de conversión en el navegador de BrowserConvert. Rápida, gratuita y 100% privada sin subir archivos.",
    url: `${siteConfig.url}/es/about`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de BrowserConvert - Conversión de audio y vídeo en el navegador",
    description: "Conoce la arquitectura de conversión en el navegador de BrowserConvert. Rápida, gratuita y 100% privada sin subir archivos.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AboutPage() {
  return <AboutView locale="es" />;
}

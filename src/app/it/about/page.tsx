import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "Informazioni su BrowserConvert - Convertitore audio e video nel browser",
  description: "Scopri l'architettura di conversione locale di BrowserConvert. 100% privato senza caricamenti su server.",
  alternates: {
    canonical: `${siteConfig.url}/it/about`,
  },
  openGraph: {
    title: "Informazioni su BrowserConvert - Convertitore audio e video nel browser",
    description: "Scopri l'architettura di conversione locale di BrowserConvert. 100% privato senza caricamenti su server.",
    url: `${siteConfig.url}/it/about`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Informazioni su BrowserConvert - Convertitore audio e video nel browser",
    description: "Scopri l'architettura di conversione locale di BrowserConvert. 100% privato senza caricamenti su server.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AboutPage() {
  return <AboutView locale="it" />;
}

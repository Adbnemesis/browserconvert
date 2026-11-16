import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "À propos de BrowserConvert - Convertisseur audio et vidéo dans le navigateur",
  description: "Découvrez l'architecture de conversion locale de BrowserConvert. 100% privé sans aucun téléchargement sur nos serveurs.",
  alternates: {
    canonical: `${siteConfig.url}/fr/about`,
  },
  openGraph: {
    title: "À propos de BrowserConvert - Convertisseur audio et vidéo dans le navigateur",
    description: "Découvrez l'architecture de conversion locale de BrowserConvert. 100% privé sans aucun téléchargement sur nos serveurs.",
    url: `${siteConfig.url}/fr/about`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de BrowserConvert - Convertisseur audio et vidéo dans le navigateur",
    description: "Découvrez l'architecture de conversion locale de BrowserConvert. 100% privé sans aucun téléchargement sur nos serveurs.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AboutPage() {
  return <AboutView locale="fr" />;
}

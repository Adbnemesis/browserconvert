import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact BrowserConvert - Support et assistance",
  description: "Contactez l'équipe BrowserConvert pour toute question technique ou demande de fonctionnalités.",
  alternates: {
    canonical: `${siteConfig.url}/fr/contact`,
  },
  openGraph: {
    title: "Contact BrowserConvert - Support et assistance",
    description: "Contactez l'équipe BrowserConvert pour toute question technique ou demande de fonctionnalités.",
    url: `${siteConfig.url}/fr/contact`,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactView locale="fr" />;
}

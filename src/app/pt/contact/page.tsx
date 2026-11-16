import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contato BrowserConvert - Suporte e dúvidas",
  description: "Fale com a equipe do BrowserConvert para dúvidas sobre formatos e suporte técnico.",
  alternates: {
    canonical: `${siteConfig.url}/pt/contact`,
  },
  openGraph: {
    title: "Contato BrowserConvert - Suporte e dúvidas",
    description: "Fale com a equipe do BrowserConvert para dúvidas sobre formatos e suporte técnico.",
    url: `${siteConfig.url}/pt/contact`,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactView locale="pt" />;
}

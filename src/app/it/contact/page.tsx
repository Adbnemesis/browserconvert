import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contatti BrowserConvert - Supporto e assistenza",
  description: "Mettiti in contatto con il team di BrowserConvert per supporto e richieste tecniche.",
  alternates: {
    canonical: `${siteConfig.url}/it/contact`,
  },
  openGraph: {
    title: "Contatti BrowserConvert - Supporto e assistenza",
    description: "Mettiti in contatto con il team di BrowserConvert per supporto e richieste tecniche.",
    url: `${siteConfig.url}/it/contact`,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactView locale="it" />;
}

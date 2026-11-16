import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Kontakt BrowserConvert - Support & Anfragen",
  description: "Kontaktieren Sie das BrowserConvert-Team für Formatunterstützung, Feedback und Support.",
  alternates: {
    canonical: `${siteConfig.url}/de/contact`,
  },
  openGraph: {
    title: "Kontakt BrowserConvert - Support & Anfragen",
    description: "Kontaktieren Sie das BrowserConvert-Team für Formatunterstützung, Feedback und Support.",
    url: `${siteConfig.url}/de/contact`,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactView locale="de" />;
}

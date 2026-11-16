import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contacto BrowserConvert - Soporte y consultas",
  description: "Ponte en contacto con el equipo de BrowserConvert para consultas de formatos y soporte técnico.",
  alternates: {
    canonical: `${siteConfig.url}/es/contact`,
  },
  openGraph: {
    title: "Contacto BrowserConvert - Soporte y consultas",
    description: "Ponte en contacto con el equipo de BrowserConvert para consultas de formatos y soporte técnico.",
    url: `${siteConfig.url}/es/contact`,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactView locale="es" />;
}

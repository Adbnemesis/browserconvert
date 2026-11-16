import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { PrivacyView } from "@/components/views/PrivacyView";

export const metadata: Metadata = {
  title: "Política de Privacidad ",
  description: "100% privado en el navegador. Tus archivos nunca se suben a ningún servidor.",
  alternates: {
    canonical: `${siteConfig.url}/es/privacy`,
  },
  openGraph: {
    title: "Política de Privacidad ",
    description: "100% privado en el navegador. Tus archivos nunca se suben a ningún servidor.",
    url: `${siteConfig.url}/es/privacy`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad ",
    description: "100% privado en el navegador. Tus archivos nunca se suben a ningún servidor.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPage() {
  return <PrivacyView locale="es" />;
}

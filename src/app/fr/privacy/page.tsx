import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { PrivacyView } from "@/components/views/PrivacyView";

export const metadata: Metadata = {
  title: "Politique de Confidentialité ",
  description: "100% privé côté client. Vos fichiers ne quittent jamais votre navigateur.",
  alternates: {
    canonical: `${siteConfig.url}/fr/privacy`,
  },
  openGraph: {
    title: "Politique de Confidentialité ",
    description: "100% privé côté client. Vos fichiers ne quittent jamais votre navigateur.",
    url: `${siteConfig.url}/fr/privacy`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité ",
    description: "100% privé côté client. Vos fichiers ne quittent jamais votre navigateur.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPage() {
  return <PrivacyView locale="fr" />;
}

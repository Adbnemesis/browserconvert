import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { PrivacyView } from "@/components/views/PrivacyView";

export const metadata: Metadata = {
  title: "Informativa sulla Privacy ",
  description: "100% privato nel browser. I tuoi file non lasciano mai il tuo dispositivo.",
  alternates: {
    canonical: `${siteConfig.url}/it/privacy`,
  },
  openGraph: {
    title: "Informativa sulla Privacy ",
    description: "100% privato nel browser. I tuoi file non lasciano mai il tuo dispositivo.",
    url: `${siteConfig.url}/it/privacy`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Informativa sulla Privacy ",
    description: "100% privato nel browser. I tuoi file non lasciano mai il tuo dispositivo.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPage() {
  return <PrivacyView locale="it" />;
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { PrivacyView } from "@/components/views/PrivacyView";

export const metadata: Metadata = {
  title: `Privacy Policy - 100% Client-Side Private Audio Converter | ${siteConfig.name}`,
  description: `${siteConfig.name} is engineered with private-by-default architecture. Your audio and video files are converted locally in your browser and never uploaded to our servers.`,
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: `Privacy Policy - 100% Client-Side Private Audio Converter | ${siteConfig.name}`,
    description: "BrowserConvert is engineered with private-by-default architecture. Files never leave your browser.",
    url: `${siteConfig.url}/privacy`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${siteConfig.name}`,
    description: "100% client-side privacy. Zero server file uploads.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyView locale="en" />;
}

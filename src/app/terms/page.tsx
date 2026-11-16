import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { TermsView } from "@/components/views/TermsView";

export const metadata: Metadata = {
  title: `Terms of Service - Acceptable Use & Service Agreement `,
  description: `Review the terms and conditions for using ${siteConfig.name}, our free, in-browser client-side audio conversion and editing platform.`,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: `Terms of Service - Acceptable Use & Service Agreement `,
    description: "Terms and conditions for using BrowserConvert free in-browser audio platform.",
    url: `${siteConfig.url}/terms`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms of Service `,
    description: "Terms of service and acceptable use agreement.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function TermsOfServicePage() {
  return <TermsView locale="en" />;
}

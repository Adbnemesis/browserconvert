import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact BrowserConvert - Support & Inquiries",
  description:
    "Get in touch with the BrowserConvert team. Contact us for format support, technical inquiries, bug reports, or feature suggestions.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact BrowserConvert - Support & Inquiries",
    description: "Get in touch with the BrowserConvert team for support and feature inquiries.",
    url: `${siteConfig.url}/contact`,
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactView locale="en" />;
}

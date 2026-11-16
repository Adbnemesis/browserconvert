import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "About BrowserConvert - Client-Side Audio & Video Converter",
  description:
    "Learn about BrowserConvert's browser-native audio conversion architecture. Fast, free, and 100% private file-to-file conversion without server uploads.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About BrowserConvert - Client-Side Audio & Video Converter",
    description: "Learn about BrowserConvert's browser-native audio conversion architecture with zero server uploads.",
    url: `${siteConfig.url}/about`,
    images: [`${siteConfig.url}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BrowserConvert - Client-Side Audio & Video Converter",
    description: "Browser-native audio conversion architecture with zero server uploads.",
    images: [`${siteConfig.url}/og-image.png`],
  },
};

export default function AboutPage() {
  return <AboutView locale="en" />;
}

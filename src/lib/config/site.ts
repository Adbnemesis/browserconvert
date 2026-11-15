export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  links: {
    github?: string;
    twitter?: string;
  };
  contactEmail: string;
  ads: {
    enabled: boolean;
    client?: string;
    slots: {
      headerBanner?: string;
      inContent?: string;
      footerBanner?: string;
    };
  };
  privacyPolicyUpdated: string;
  termsUpdated: string;
}

export const siteConfig: SiteConfig = {
  name: "BrowserConvert",
  shortName: "BrowserConvert",
  tagline: "Free Online In-Browser Media & Audio Converter",
  description:
    "Convert audio files and extract audio from videos directly in your browser. 100% private, free, and fast. Support for MP3, WAV, M4A, FLAC, AAC, OGG, OPUS, MP4, MOV, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://browserconvert.net",
  author: "BrowserConvert Team",
  links: {
    github: "https://github.com/browserconvert/browserconvert",
  },
  contactEmail: "support@browserconvert.net",
  ads: {
    enabled: process.env.NEXT_PUBLIC_ADS_ENABLED === "true",
    client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
    slots: {
      headerBanner: process.env.NEXT_PUBLIC_AD_SLOT_HEADER || "demo-header",
      inContent: process.env.NEXT_PUBLIC_AD_SLOT_CONTENT || "demo-content",
      footerBanner: process.env.NEXT_PUBLIC_AD_SLOT_FOOTER || "demo-footer",
    },
  },
  privacyPolicyUpdated: "November 2026",
  termsUpdated: "November 2026",
};

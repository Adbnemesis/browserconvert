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
  name: "MediaConvert",
  shortName: "MediaConvert",
  tagline: "Free Online Audio Converter & Video to Audio Extractor",
  description:
    "Convert audio files and extract audio from videos directly in your browser. 100% private, free, and fast. Support for MP3, WAV, M4A, FLAC, AAC, OGG, OPUS, MP4, MOV, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mediaconvert.org",
  author: "MediaConvert Team",
  links: {
    github: "https://github.com/mediaconvert/mediaconvert",
  },
  contactEmail: "support@mediaconvert.org",
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

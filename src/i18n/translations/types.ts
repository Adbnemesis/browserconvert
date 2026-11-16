export interface TranslationSchema {
  nav: {
    audioConverter: string;
    videoToMp3: string;
    audioTools: string;
    formatGuide: string;
    about: string;
    contact: string;
    privacyBadge: string;
    tools: {
      cutter: { title: string; desc: string };
      merger: { title: string; desc: string };
      compressor: { title: string; desc: string };
      bitrate: { title: string; desc: string };
      speed: { title: string; desc: string };
      volume: { title: string; desc: string };
    };
  };
  footer: {
    tagline: string;
    converter: string;
    tools: string;
    legal: string;
    privacy: string;
    terms: string;
    allRightsReserved: string;
    privacyNote: string;
  };
  dropzone: {
    headline: string;
    subheadline: string;
    browseButton: string;
    supportedFormats: string;
  };
  converter: {
    settingsTitle: string;
    outputFormat: string;
    bitrate: string;
    sampleRate: string;
    channels: string;
    convertAll: string;
    converting: string;
    download: string;
    downloadZip: string;
    clearAll: string;
    readyToConvert: string;
    completed: string;
    error: string;
  };
  home: {
    title: string;
    subtitle: string;
    features: {
      clientSide: { title: string; desc: string };
      noUploads: { title: string; desc: string };
      highSpeed: { title: string; desc: string };
      batchSupport: { title: string; desc: string };
    };
    directAnswer: {
      title: string;
      lead: string;
      body: string;
    };
    popularTitle: string;
    popularSubtitle: string;
    faqTitle: string;
    faqs: Array<{ q: string; a: string }>;
  };
  tools: {
    cutter: {
      title: string;
      subtitle: string;
      selectPrompt: string;
      startLabel: string;
      endLabel: string;
      trimButton: string;
      success: string;
    };
    compressor: {
      title: string;
      subtitle: string;
      selectPrompt: string;
      targetQuality: string;
      compressButton: string;
      success: string;
    };
    volume: {
      title: string;
      subtitle: string;
      selectPrompt: string;
      volumeLevel: string;
      applyButton: string;
      success: string;
    };
    speed: {
      title: string;
      subtitle: string;
      selectPrompt: string;
      speedLevel: string;
      applyButton: string;
      success: string;
    };
    bitrate: {
      title: string;
      subtitle: string;
      selectPrompt: string;
      selectBitrate: string;
      applyButton: string;
      success: string;
    };
    merger: {
      title: string;
      subtitle: string;
      selectPrompt: string;
      addTrack: string;
      mergeButton: string;
      success: string;
    };
  };
  overviewBadge: string;
  kofi: {
    overlayButton: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerButton: string;
  };
}

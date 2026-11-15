export type AudioFormat = "mp3" | "wav" | "m4a" | "aac" | "flac" | "ogg" | "opus";
export type VideoFormat = "mp4" | "mov" | "mkv" | "webm" | "avi" | "wmv" | "flv" | "3gp" | "ts";
export type InputFormat = AudioFormat | "wma" | "aiff" | VideoFormat;
export type OutputFormat = AudioFormat;

export interface FormatMetadata {
  id: string;
  name: string;
  extension: string;
  mimeType: string;
  category: "audio" | "video";
  isLossless: boolean;
  supportsBitrate: boolean;
  defaultBitrate?: string;
  description: string;
  popularUseCases: string[];
}

export const SUPPORTED_OUTPUT_FORMATS: Record<OutputFormat, FormatMetadata> = {
  mp3: {
    id: "mp3",
    name: "MP3",
    extension: ".mp3",
    mimeType: "audio/mpeg",
    category: "audio",
    isLossless: false,
    supportsBitrate: true,
    defaultBitrate: "192k",
    description: "The universal audio format compatible with virtually every player and device.",
    popularUseCases: ["Everyday music listening", "Podcasts", "Car stereos", "Universal sharing"],
  },
  wav: {
    id: "wav",
    name: "WAV",
    extension: ".wav",
    mimeType: "audio/wav",
    category: "audio",
    isLossless: true,
    supportsBitrate: false,
    description: "Uncompressed raw PCM audio delivering studio-grade master fidelity.",
    popularUseCases: ["Music production", "Audio editing (DAW)", "Voiceover masters", "Sound design"],
  },
  m4a: {
    id: "m4a",
    name: "M4A (AAC)",
    extension: ".m4a",
    mimeType: "audio/mp4",
    category: "audio",
    isLossless: false,
    supportsBitrate: true,
    defaultBitrate: "192k",
    description: "Apple standard high-efficiency audio offering better fidelity than MP3 at matching bitrates.",
    popularUseCases: ["iPhone/iPad playback", "Apple Music", "Ringtones", "iTunes libraries"],
  },
  aac: {
    id: "aac",
    name: "AAC",
    extension: ".aac",
    mimeType: "audio/aac",
    category: "audio",
    isLossless: false,
    supportsBitrate: true,
    defaultBitrate: "192k",
    description: "Advanced Audio Coding standard used widely in broadcasting and streaming.",
    popularUseCases: ["Streaming media", "Broadcast audio", "Mobile devices"],
  },
  flac: {
    id: "flac",
    name: "FLAC",
    extension: ".flac",
    mimeType: "audio/flac",
    category: "audio",
    isLossless: true,
    supportsBitrate: false,
    description: "Free Lossless Audio Codec preserving 100% of audio data at roughly half raw file size.",
    popularUseCases: ["Audiophile archiving", "CD ripping", "Hi-Res streaming", "Sound libraries"],
  },
  ogg: {
    id: "ogg",
    name: "OGG (Vorbis)",
    extension: ".ogg",
    mimeType: "audio/ogg",
    category: "audio",
    isLossless: false,
    supportsBitrate: true,
    defaultBitrate: "160k",
    description: "Open-source patent-free container with high compression efficiency.",
    popularUseCases: ["Game development", "Spotify desktop", "Web audio streaming"],
  },
  opus: {
    id: "opus",
    name: "OPUS",
    extension: ".opus",
    mimeType: "audio/ogg",
    category: "audio",
    isLossless: false,
    supportsBitrate: true,
    defaultBitrate: "128k",
    description: "State-of-the-art codec designed for internet transmission with ultra-low latency.",
    popularUseCases: ["Discord voice", "VoIP / telephony", "Modern web streaming"],
  },
};

export const SUPPORTED_INPUT_FORMATS: Record<string, { name: string; extension: string; category: "audio" | "video"; mimeType: string }> = {
  // Audio
  mp3: { name: "MP3", extension: ".mp3", category: "audio", mimeType: "audio/mpeg" },
  wav: { name: "WAV", extension: ".wav", category: "audio", mimeType: "audio/wav" },
  m4a: { name: "M4A", extension: ".m4a", category: "audio", mimeType: "audio/mp4" },
  aac: { name: "AAC", extension: ".aac", category: "audio", mimeType: "audio/aac" },
  flac: { name: "FLAC", extension: ".flac", category: "audio", mimeType: "audio/flac" },
  ogg: { name: "OGG", extension: ".ogg", category: "audio", mimeType: "audio/ogg" },
  opus: { name: "OPUS", extension: ".opus", category: "audio", mimeType: "audio/ogg" },
  wma: { name: "WMA", extension: ".wma", category: "audio", mimeType: "audio/x-ms-wma" },
  aiff: { name: "AIFF", extension: ".aiff", category: "audio", mimeType: "audio/aiff" },
  aif: { name: "AIF", extension: ".aif", category: "audio", mimeType: "audio/aiff" },

  // Video
  mp4: { name: "MP4", extension: ".mp4", category: "video", mimeType: "video/mp4" },
  mov: { name: "MOV", extension: ".mov", category: "video", mimeType: "video/quicktime" },
  mkv: { name: "MKV", extension: ".mkv", category: "video", mimeType: "video/x-matroska" },
  webm: { name: "WEBM", extension: ".webm", category: "video", mimeType: "video/webm" },
  avi: { name: "AVI", extension: ".avi", category: "video", mimeType: "video/x-msvideo" },
  wmv: { name: "WMV", extension: ".wmv", category: "video", mimeType: "video/x-ms-wmv" },
  flv: { name: "FLV", extension: ".flv", category: "video", mimeType: "video/x-flv" },
  "3gp": { name: "3GP", extension: ".3gp", category: "video", mimeType: "video/3gpp" },
  ts: { name: "TS", extension: ".ts", category: "video", mimeType: "video/mp2t" },
};

export const BITRATE_OPTIONS = [
  { label: "64 kbps (Voice / Low Size)", value: "64k" },
  { label: "96 kbps (Speech)", value: "96k" },
  { label: "128 kbps (Standard Quality)", value: "128k" },
  { label: "160 kbps (Good Quality)", value: "160k" },
  { label: "192 kbps (High Quality - Recommended)", value: "192k" },
  { label: "256 kbps (Very High Quality)", value: "256k" },
  { label: "320 kbps (Maximum MP3 Quality)", value: "320k" },
];

export const SAMPLE_RATE_OPTIONS = [
  { label: "Original (Keep Source)", value: "original" },
  { label: "22,050 Hz (Low Bandwidth)", value: "22050" },
  { label: "44,100 Hz (CD Audio - Standard)", value: "44100" },
  { label: "48,000 Hz (DVD / Pro Video)", value: "48000" },
];

export const CHANNEL_OPTIONS = [
  { label: "Original (Keep Source)", value: "original" },
  { label: "Stereo (2 Channels)", value: "2" },
  { label: "Mono (1 Channel)", value: "1" },
];

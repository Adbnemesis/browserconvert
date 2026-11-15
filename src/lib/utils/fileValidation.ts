import { SUPPORTED_INPUT_FORMATS } from "../config/formats";
import { getFileExtension } from "./formatters";

export interface ValidationResult {
  valid: boolean;
  error?: string;
  format?: string;
  category?: "audio" | "video";
}

export function validateInputFile(file: File): ValidationResult {
  if (!file) {
    return { valid: false, error: "No file provided" };
  }

  if (file.size === 0) {
    return { valid: false, error: "File is empty (0 bytes). Please upload a valid media file." };
  }

  const ext = getFileExtension(file.name);
  if (!ext) {
    return { valid: false, error: "File has no extension. Please upload a recognized audio or video file." };
  }

  const formatMeta = SUPPORTED_INPUT_FORMATS[ext];
  if (!formatMeta) {
    return {
      valid: false,
      error: `Unsupported format ".${ext}". We support MP3, WAV, M4A, FLAC, AAC, OGG, OPUS, MP4, MOV, MKV, WEBM, AVI, and more.`,
    };
  }

  // Large file warning recommendation (browsers have WebAssembly memory constraints)
  if (file.size > 1024 * 1024 * 1024) {
    return {
      valid: false,
      error: "File exceeds 1 GB limit for browser in-memory processing. Please choose a smaller file.",
    };
  }

  return {
    valid: true,
    format: ext,
    category: formatMeta.category,
  };
}

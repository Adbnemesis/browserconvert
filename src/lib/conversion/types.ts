import { OutputFormat } from "../config/formats";

export type ConversionStatus =
  | "idle"
  | "queued"
  | "loading_engine"
  | "reading_file"
  | "processing"
  | "encoding"
  | "completed"
  | "error"
  | "cancelled";

export type ConversionStage =
  | "Waiting in queue"
  | "Loading conversion engine"
  | "Reading input file"
  | "Processing audio stream"
  | "Encoding output format"
  | "Finalizing file"
  | "Ready to download"
  | "Failed"
  | "Cancelled";

export interface ConversionSettings {
  outputFormat: OutputFormat;
  bitrate?: string;
  sampleRate?: string;
  channels?: string;
  startTime?: number; // in seconds
  endTime?: number;   // in seconds
  volume?: number;    // e.g. 1.0 = 100%, 1.5 = 150%
  speed?: number;     // e.g. 1.0 = normal, 1.25 = 1.25x
  customFilename?: string;
}

export interface ConversionItem {
  id: string;
  file: File;
  name: string;
  originalSize: number;
  inputFormat: string;
  category: "audio" | "video";
  settings: ConversionSettings;
  status: ConversionStatus;
  stage: ConversionStage;
  progress: number; // 0 to 100
  outputBlob?: Blob;
  outputUrl?: string;
  outputSize?: number;
  outputName?: string;
  errorMessage?: string;
  duration?: number;
  createdAt: number;
  completedAt?: number;
}

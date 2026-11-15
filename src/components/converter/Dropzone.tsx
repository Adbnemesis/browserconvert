"use client";

import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { UploadCloud, AlertCircle } from "lucide-react";
import { validateInputFile } from "@/lib/utils/fileValidation";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";

interface DropzoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptTypes?: string;
  headline?: string;
  subheadline?: string;
  className?: string;
}

export function Dropzone({
  onFilesSelected,
  acceptTypes = "audio/*,video/*,.mp3,.wav,.m4a,.aac,.flac,.ogg,.opus,.wma,.aiff,.mp4,.mov,.mkv,.webm,.avi,.wmv,.flv,.3gp,.ts",
  headline = "Drop audio or video files here",
  subheadline = "or browse from your device",
  className = "",
}: DropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const processSelectedFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setValidationError(null);

    const validFiles: File[] = [];
    const errors: string[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const validation = validateInputFile(file);
      if (validation.valid) {
        validFiles.push(file);
      } else if (validation.error) {
        errors.push(`${file.name}: ${validation.error}`);
      }
    }

    if (errors.length > 0) {
      setValidationError(errors[0]);
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    processSelectedFiles(e.dataTransfer.files);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    processSelectedFiles(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerPicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative group">
        {/* Animated Radiant Border Halo */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-500/20 via-brand-400/5 to-brand-500/20 opacity-50 blur-xs transition-opacity duration-300 group-hover:opacity-100" />

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerPicker}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              triggerPicker();
            }
          }}
          aria-label="Upload files area"
          className={`relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-8 sm:p-12 text-center transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-brand-500 ${
            isDragOver
              ? "border-brand-500 bg-brand-50/50 dark:bg-brand-950/20 scale-[1.008] shadow-lg ring-2 ring-brand-500/20"
              : "border-slate-300 dark:border-white/10 bg-white dark:bg-[#121215] hover:border-slate-400 dark:hover:border-white/20 hover:shadow-xs"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={acceptTypes}
            onChange={handleFileInputChange}
            className="hidden"
            aria-hidden="true"
          />

          {/* Tactile Icon & Audio Visualizer Box */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10 transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-brand-500/40">
              <UploadCloud className="h-5 w-5 transition-colors group-hover:text-brand-500" />
            </div>
            <AudioVisualizer bars={7} active={isDragOver || true} className="h-6 gap-0.5" barWidth="w-1" />
          </div>

          {/* Headline & Subheadline */}
          <h3 className="text-sm sm:text-base font-medium text-slate-900 dark:text-zinc-100 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
            {headline}
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400 max-w-sm">
            {subheadline}
          </p>

          {/* Primary Action Button with Emil Kowalski Tactile Spring */}
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white hover:bg-brand-700 btn-tactile shadow-xs">
            <UploadCloud className="h-3.5 w-3.5" />
            <span>Choose files</span>
          </div>

          {/* Technical Formats Readout */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1 font-mono text-[11px] text-slate-500 dark:text-zinc-400 max-w-lg">
            <span>Audio: MP3 · WAV · M4A · FLAC · AAC · OGG · OPUS</span>
            <span className="text-slate-300 dark:text-zinc-700 mx-1">·</span>
            <span>Video: MP4 · MOV · MKV · WEBM · AVI</span>
          </div>
        </div>
      </div>

      {/* Validation Error banner */}
      {validationError && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30 p-3 text-xs text-red-700 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
          <div>{validationError}</div>
        </div>
      )}
    </div>
  );
}

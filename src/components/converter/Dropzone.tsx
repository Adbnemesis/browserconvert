"use client";

import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { UploadCloud, FileAudio, Film, AlertCircle } from "lucide-react";
import { validateInputFile } from "@/lib/utils/fileValidation";

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
  headline = "Drop your audio or video files here",
  subheadline = "or click to browse from your computer or phone",
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
      setValidationError(errors[0]); // show first error
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
    // Reset file input so re-selecting same file triggers change
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerPicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full ${className}`}>
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
        className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 sm:p-12 text-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
          isDragOver
            ? "border-brand-500 bg-brand-50/70 dark:bg-brand-950/40 scale-[0.99]"
            : "border-slate-300 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 hover:border-brand-400 dark:hover:border-brand-500 hover:bg-slate-50/70 dark:hover:bg-slate-850/80 shadow-sm"
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

        {/* Upload Icon with badges */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform group-hover:scale-105 duration-200 shadow-sm border border-brand-100">
            <UploadCloud className="h-8 w-8" />
          </div>
          <div className="absolute -left-3 -bottom-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-xs border border-white">
            <FileAudio className="h-3.5 w-3.5" />
          </div>
          <div className="absolute -right-3 -bottom-1 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 shadow-xs border border-white">
            <Film className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Headline & Subheadline */}
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {headline}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
          {subheadline}
        </p>

        {/* Button pill */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all group-hover:bg-brand-700 active:scale-95">
          <UploadCloud className="h-4 w-4" />
          <span>Choose Files</span>
        </div>

        {/* Supported formats label */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 max-w-lg">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Audio:</span> MP3, WAV, M4A, FLAC, AAC, OGG, OPUS, AIFF
          <span className="text-slate-300 dark:text-slate-700 mx-1">•</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">Video:</span> MP4, MOV, MKV, WEBM, AVI, WMV
        </div>
      </div>

      {/* Validation Error banner */}
      {validationError && (
        <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800 animate-in fade-in-50">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
          <div>{validationError}</div>
        </div>
      )}
    </div>
  );
}

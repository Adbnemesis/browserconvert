"use client";

import React, { useState } from "react";
import {
  OutputFormat,
  SUPPORTED_OUTPUT_FORMATS,
  BITRATE_OPTIONS,
  SAMPLE_RATE_OPTIONS,
  CHANNEL_OPTIONS,
} from "@/lib/config/formats";
import { ConversionSettings } from "@/lib/conversion/types";
import { Sliders, ChevronDown, ChevronUp, Music, Volume2, FastForward, Scissors, FileText } from "lucide-react";

interface SettingsPanelProps {
  settings: ConversionSettings;
  onChange: (updatedSettings: ConversionSettings) => void;
  allowFormatChange?: boolean;
  className?: string;
}

export function SettingsPanel({
  settings,
  onChange,
  allowFormatChange = true,
  className = "",
}: SettingsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentFormatMeta = SUPPORTED_OUTPUT_FORMATS[settings.outputFormat];

  const handleFormatChange = (newFormat: OutputFormat) => {
    const meta = SUPPORTED_OUTPUT_FORMATS[newFormat];
    onChange({
      ...settings,
      outputFormat: newFormat,
      bitrate: meta.supportsBitrate ? meta.defaultBitrate || "192k" : undefined,
    });
  };

  const handleBitrateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...settings, bitrate: e.target.value });
  };

  const handleSampleRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...settings, sampleRate: e.target.value });
  };

  const handleChannelsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...settings, channels: e.target.value });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    onChange({ ...settings, volume: isNaN(val) ? 1.0 : val });
  };

  const getSpeedString = (speed?: number): string => {
    if (speed === undefined || speed === 1 || speed === 1.0) return "1.0";
    if (speed === 0.5) return "0.5";
    if (speed === 0.75) return "0.75";
    if (speed === 1.25) return "1.25";
    if (speed === 1.5) return "1.5";
    if (speed === 2 || speed === 2.0) return "2.0";
    return String(speed);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseFloat(e.target.value);
    onChange({ ...settings, speed: isNaN(val) ? 1.0 : val });
  };

  const handleCustomFilenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...settings, customFilename: e.target.value });
  };

  const handleTrimStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    onChange({ ...settings, startTime: isNaN(val) ? undefined : val });
  };

  const handleTrimEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    onChange({ ...settings, endTime: isNaN(val) ? undefined : val });
  };

  return (
    <div className={`rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121215] p-4 ${className}`}>
      {/* Primary Row: Target Format & Quick Bitrate */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Output Format Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="output-format-select" className="text-xs font-medium text-slate-700 dark:text-zinc-300">
            Convert to:
          </label>
          {allowFormatChange ? (
            <select
              id="output-format-select"
              value={settings.outputFormat}
              onChange={(e) => handleFormatChange(e.target.value as OutputFormat)}
              className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-900 dark:text-zinc-100 focus:border-brand-500 focus:outline-none"
            >
              {(Object.keys(SUPPORTED_OUTPUT_FORMATS) as OutputFormat[]).map((fmt) => (
                <option key={fmt} value={fmt}>
                  {SUPPORTED_OUTPUT_FORMATS[fmt].name} ({SUPPORTED_OUTPUT_FORMATS[fmt].extension})
                  {SUPPORTED_OUTPUT_FORMATS[fmt].isLossless ? " · Lossless" : ""}
                </option>
              ))}
            </select>
          ) : (
            <span className="font-mono text-xs font-medium text-brand-600 dark:text-brand-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded border border-slate-200/80 dark:border-white/10">
              {currentFormatMeta.name}
            </span>
          )}
        </div>

        {/* Bitrate Selector */}
        {currentFormatMeta.supportsBitrate && (
          <div className="flex items-center gap-2">
            <label htmlFor="bitrate-select" className="text-xs font-medium text-slate-700 dark:text-zinc-300">
              Quality:
            </label>
            <select
              id="bitrate-select"
              value={settings.bitrate || currentFormatMeta.defaultBitrate || "192k"}
              onChange={handleBitrateChange}
              className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs text-slate-800 dark:text-zinc-200 focus:border-brand-500 focus:outline-none"
            >
              {BITRATE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Toggle Advanced Settings Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
        >
          <Sliders className="h-3.5 w-3.5 text-slate-500 dark:text-zinc-400" />
          <span>Advanced audio settings</span>
          {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Expandable Advanced Options Drawer */}
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sample Rate */}
          <div>
            <label className="block text-[11px] font-medium text-slate-600 dark:text-zinc-400 mb-1 flex items-center gap-1">
              <Music className="h-3 w-3 text-slate-400 dark:text-zinc-500" />
              <span>Sample rate</span>
            </label>
            <select
              value={settings.sampleRate || "original"}
              onChange={handleSampleRateChange}
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs text-slate-800 dark:text-zinc-200 focus:border-brand-500 focus:outline-none"
            >
              {SAMPLE_RATE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Audio Channels */}
          <div>
            <label className="block text-[11px] font-medium text-slate-600 dark:text-zinc-400 mb-1 flex items-center gap-1">
              <Sliders className="h-3 w-3 text-slate-400 dark:text-zinc-500" />
              <span>Channels</span>
            </label>
            <select
              value={settings.channels || "original"}
              onChange={handleChannelsChange}
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs text-slate-800 dark:text-zinc-200 focus:border-brand-500 focus:outline-none"
            >
              {CHANNEL_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Audio Playback Speed */}
          <div>
            <label className="block text-[11px] font-medium text-slate-600 dark:text-zinc-400 mb-1 flex items-center gap-1">
              <FastForward className="h-3 w-3 text-slate-400 dark:text-zinc-500" />
              <span>Playback speed</span>
            </label>
            <select
              value={getSpeedString(settings.speed)}
              onChange={handleSpeedChange}
              className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs text-slate-800 dark:text-zinc-200 focus:border-brand-500 focus:outline-none"
            >
              <option value="0.5">0.5x (Half speed)</option>
              <option value="0.75">0.75x (Slower)</option>
              <option value="1.0">1.0x (Normal speed)</option>
              <option value="1.25">1.25x (Slightly faster)</option>
              <option value="1.5">1.5x (Fast)</option>
              <option value="2.0">2.0x (Double speed)</option>
            </select>
          </div>

          {/* Audio Volume */}
          <div>
            <label className="block text-[11px] font-medium text-slate-600 dark:text-zinc-400 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Volume2 className="h-3 w-3 text-slate-400 dark:text-zinc-500" />
                <span>Volume</span>
              </span>
              <span className="font-mono text-[11px] text-brand-600 dark:text-brand-400 tabular-nums">
                {Math.round((settings.volume || 1.0) * 100)}%
              </span>
            </label>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="range"
                min="0.2"
                max="2.0"
                step="0.1"
                value={settings.volume || 1.0}
                onChange={handleVolumeChange}
                className="w-full accent-brand-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Trimming */}
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="block text-[11px] font-medium text-slate-600 dark:text-zinc-400 mb-1 flex items-center gap-1">
              <Scissors className="h-3 w-3 text-slate-400 dark:text-zinc-500" />
              <span>Trim timestamps (seconds)</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                min="0"
                step="0.5"
                placeholder="Start (0s)"
                value={settings.startTime ?? ""}
                onChange={handleTrimStartChange}
                className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:border-brand-500 focus:outline-none"
              />
              <input
                type="number"
                min="0"
                step="0.5"
                placeholder="End (e.g. 60s)"
                value={settings.endTime ?? ""}
                onChange={handleTrimEndChange}
                className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:border-brand-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Custom Output Filename */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-[11px] font-medium text-slate-600 dark:text-zinc-400 mb-1 flex items-center gap-1">
              <FileText className="h-3 w-3 text-slate-400 dark:text-zinc-500" />
              <span>Custom filename</span>
            </label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Leave blank for original filename"
                value={settings.customFilename || ""}
                onChange={handleCustomFilenameChange}
                className="w-full rounded-l-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-1.5 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:border-brand-500 focus:outline-none"
              />
              <span className="inline-flex items-center rounded-r-lg border border-l-0 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/10 px-3 py-1.5 font-mono text-xs text-slate-500 dark:text-zinc-400">
                .{settings.outputFormat}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

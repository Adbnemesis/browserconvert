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
    <div className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs ${className}`}>
      {/* Primary Row: Target Format & Quick Bitrate */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Output Format Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="output-format-select" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Convert to:
          </label>
          {allowFormatChange ? (
            <select
              id="output-format-select"
              value={settings.outputFormat}
              onChange={(e) => handleFormatChange(e.target.value as OutputFormat)}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-900 dark:text-white shadow-xs focus:border-brand-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              {(Object.keys(SUPPORTED_OUTPUT_FORMATS) as OutputFormat[]).map((fmt) => (
                <option key={fmt} value={fmt}>
                  {SUPPORTED_OUTPUT_FORMATS[fmt].name} ({SUPPORTED_OUTPUT_FORMATS[fmt].extension})
                  {SUPPORTED_OUTPUT_FORMATS[fmt].isLossless ? " - Lossless" : ""}
                </option>
              ))}
            </select>
          ) : (
            <span className="inline-flex items-center rounded-md bg-brand-50 dark:bg-brand-950/60 px-2.5 py-1 text-xs font-bold text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60">
              {currentFormatMeta.name}
            </span>
          )}
        </div>

        {/* Bitrate Quick Selector (only if format supports lossy bitrate) */}
        {currentFormatMeta.supportsBitrate && (
          <div className="flex items-center gap-2">
            <label htmlFor="bitrate-select" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Quality:
            </label>
            <select
              id="bitrate-select"
              value={settings.bitrate || currentFormatMeta.defaultBitrate || "192k"}
              onChange={handleBitrateChange}
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 shadow-xs focus:border-brand-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-500"
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
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-98"
        >
          <Sliders className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
          <span>Advanced Audio Settings</span>
          {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Expandable Advanced Options Drawer */}
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in-50 duration-150">
          {/* Sample Rate */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Music className="h-3 w-3 text-slate-400 dark:text-slate-500" />
              <span>Sample Rate</span>
            </label>
            <select
              value={settings.sampleRate || "original"}
              onChange={handleSampleRateChange}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:border-brand-500 focus:outline-none"
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
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Sliders className="h-3 w-3 text-slate-400 dark:text-slate-500" />
              <span>Channels</span>
            </label>
            <select
              value={settings.channels || "original"}
              onChange={handleChannelsChange}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:border-brand-500 focus:outline-none"
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
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <FastForward className="h-3 w-3 text-slate-400 dark:text-slate-500" />
              <span>Playback Speed</span>
            </label>
            <select
              value={settings.speed?.toString() || "1.0"}
              onChange={handleSpeedChange}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:border-brand-500 focus:outline-none"
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
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Volume2 className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                <span>Volume Adjustment</span>
              </span>
              <span className="text-[10px] text-brand-600 dark:text-brand-400 font-bold">
                {Math.round((settings.volume || 1.0) * 100)}%
              </span>
            </label>
            <div className="flex items-center gap-2">
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

          {/* Trimming (Start & End seconds) */}
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Scissors className="h-3 w-3 text-slate-400 dark:text-slate-500" />
              <span>Trim Audio (Optional Start / End Seconds)</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="Start (seconds, e.g. 0)"
                  value={settings.startTime ?? ""}
                  onChange={handleTrimStartChange}
                  className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="End (seconds, e.g. 60)"
                  value={settings.endTime ?? ""}
                  onChange={handleTrimEndChange}
                  className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Custom Output Filename */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <FileText className="h-3 w-3 text-slate-400 dark:text-slate-500" />
              <span>Custom Output Filename (Optional)</span>
            </label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Leave blank to use original name"
                value={settings.customFilename || ""}
                onChange={handleCustomFilenameChange}
                className="w-full rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-500 focus:outline-none"
              />
              <span className="inline-flex items-center rounded-r-md border border-l-0 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                .{settings.outputFormat}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

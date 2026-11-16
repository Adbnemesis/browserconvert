"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Dropzone } from "./Dropzone";
import { SettingsPanel } from "./SettingsPanel";
import { QueueList } from "./QueueList";
import { ConversionItem, ConversionSettings, ConversionStage } from "@/lib/conversion/types";
import { OutputFormat, SUPPORTED_OUTPUT_FORMATS, SUPPORTED_INPUT_FORMATS } from "@/lib/config/formats";
import { conversionEngine } from "@/lib/conversion/engine";
import { createZipArchive } from "@/lib/conversion/zip";
import { getFileExtension } from "@/lib/utils/formatters";
import { trackEvent, getFileSizeBucket } from "@/lib/utils/analytics";
import { triggerSmartlink } from "@/lib/ads/smartlink";

interface ConverterProps {
  defaultOutputFormat?: OutputFormat;
  initialOutputFormat?: OutputFormat;
  lockOutputFormat?: boolean;
  pageTitle?: string;
  dropzoneHeadline?: string;
  dropzoneSubheadline?: string;
  acceptTypes?: string | Record<string, string[]>;
  className?: string;
}

export function Converter({
  defaultOutputFormat = "mp3",
  initialOutputFormat,
  lockOutputFormat = false,
  pageTitle,
  dropzoneHeadline,
  dropzoneSubheadline,
  acceptTypes,
  className = "",
}: ConverterProps) {
  const resolvedDefaultFormat = initialOutputFormat || defaultOutputFormat;
  const formattedAcceptTypes =
    typeof acceptTypes === "string"
      ? acceptTypes
      : acceptTypes && typeof acceptTypes === "object"
      ? Object.entries(acceptTypes)
          .flatMap(([mime, exts]) => [mime, ...exts])
          .join(",")
      : undefined;

  const [items, setItems] = useState<ConversionItem[]>([]);
  const [globalSettings, setGlobalSettings] = useState<ConversionSettings>({
    outputFormat: resolvedDefaultFormat,
    bitrate: SUPPORTED_OUTPUT_FORMATS[resolvedDefaultFormat]?.defaultBitrate || "192k",
    sampleRate: "original",
    channels: "original",
    volume: 1.0,
    speed: 1.0,
  });
  const [isConverting, setIsConverting] = useState(false);

  // Sync defaultOutputFormat if prop changes
  useEffect(() => {
    setGlobalSettings((prev) => ({
      ...prev,
      outputFormat: defaultOutputFormat,
      bitrate: SUPPORTED_OUTPUT_FORMATS[defaultOutputFormat]?.defaultBitrate || prev.bitrate,
    }));
  }, [defaultOutputFormat]);

  // Clean up blob URLs when component unmounts to prevent memory leaks
  useEffect(() => {
    return () => {
      items.forEach((item) => {
        if (item.outputUrl) {
          URL.revokeObjectURL(item.outputUrl);
        }
      });
    };
  }, [items]);

  const handleFilesSelected = useCallback(
    (files: File[]) => {
      const newItems: ConversionItem[] = files.map((file) => {
        const ext = getFileExtension(file.name);
        const formatInfo = SUPPORTED_INPUT_FORMATS[ext];
        const category = formatInfo ? formatInfo.category : "audio";

        trackEvent("file_selected", {
          inputFormat: ext,
          outputFormat: globalSettings.outputFormat,
          fileSizeBucket: getFileSizeBucket(file.size),
        });

        return {
          id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          file,
          name: file.name,
          originalSize: file.size,
          inputFormat: ext.toUpperCase(),
          category,
          settings: { ...globalSettings },
          status: "idle",
          stage: "Waiting in queue",
          progress: 0,
          createdAt: Date.now(),
        };
      });

      setItems((prev) => [...prev, ...newItems]);
    },
    [globalSettings]
  );

  const handleSettingsChange = (newSettings: ConversionSettings) => {
    setGlobalSettings(newSettings);
    // Update settings for all pending items in queue
    setItems((prev) =>
      prev.map((item) => {
        if (item.status === "idle" || item.status === "queued") {
          return { ...item, settings: { ...newSettings } };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item?.outputUrl) {
        URL.revokeObjectURL(item.outputUrl);
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClearAll = () => {
    items.forEach((item) => {
      if (item.outputUrl) {
        URL.revokeObjectURL(item.outputUrl);
      }
    });
    setItems([]);
  };

  const handleDownloadItem = (item: ConversionItem) => {
    if (!item.outputBlob) return;
    
    // Open Adsterra Smartlink in a new tab synchronously on click
    triggerSmartlink();

    const url = item.outputUrl || URL.createObjectURL(item.outputBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = item.outputName || `${item.id}.${item.settings.outputFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    trackEvent("file_downloaded", {
      outputFormat: item.settings.outputFormat,
      fileSizeBucket: getFileSizeBucket(item.outputSize || 0),
    });
  };

  const handleDownloadZip = async () => {
    try {
      // Open Adsterra Smartlink in a new tab synchronously on click
      triggerSmartlink();

      const zipBlob = await createZipArchive(items);
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `browserconvert_audio_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 10000);

      trackEvent("zip_downloaded");
    } catch (err: any) {
      alert(err.message || "Failed to create ZIP archive.");
    }
  };

  const handleCancel = () => {
    conversionEngine.cancelCurrent();
    setIsConverting(false);
    setItems((prev) =>
      prev.map((item) => {
        if (item.status === "processing" || item.status === "reading_file" || item.status === "loading_engine") {
          return { ...item, status: "cancelled", stage: "Cancelled", progress: 0 };
        }
        return item;
      })
    );
  };

  const handleConvertAll = async () => {
    if (isConverting) return;
    setIsConverting(true);

    trackEvent("conversion_started", {
      outputFormat: globalSettings.outputFormat,
    });

    // Process pending items sequentially to manage browser memory
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.status === "completed" || item.status === "error") continue;

      // Update item status to queued / processing
      setItems((prev) =>
        prev.map((it) => (it.id === item.id ? { ...it, status: "loading_engine", stage: "Loading conversion engine" } : it))
      );

      try {
        const result = await conversionEngine.convertFile(
          item,
          (progress: number, stage: ConversionStage) => {
            setItems((prev) =>
              prev.map((it) => (it.id === item.id ? { ...it, progress, stage } : it))
            );
          }
        );

        const outputUrl = URL.createObjectURL(result.blob);

        setItems((prev) =>
          prev.map((it) =>
            it.id === item.id
              ? {
                  ...it,
                  status: "completed",
                  stage: "Ready to download",
                  progress: 100,
                  outputBlob: result.blob,
                  outputUrl,
                  outputSize: result.blob.size,
                  outputName: result.filename,
                  completedAt: Date.now(),
                }
              : it
          )
        );

        trackEvent("conversion_completed", {
          outputFormat: item.settings.outputFormat,
          fileSizeBucket: getFileSizeBucket(result.blob.size),
        });
      } catch (err: any) {
        console.error("Conversion failed for file:", item.name, err);
        setItems((prev) =>
          prev.map((it) =>
            it.id === item.id
              ? {
                  ...it,
                  status: "error",
                  stage: "Failed",
                  errorMessage: err?.message || "Failed to process audio stream with this codec.",
                }
              : it
          )
        );

        trackEvent("conversion_failed", {
          inputFormat: item.inputFormat,
          outputFormat: item.settings.outputFormat,
          errorReason: err?.message,
        });
      }
    }

    setIsConverting(false);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-5 ${className}`}>
      {/* 1. Dropzone Upload Area */}
      <Dropzone
        onFilesSelected={handleFilesSelected}
        acceptTypes={formattedAcceptTypes}
        headline={dropzoneHeadline}
        subheadline={dropzoneSubheadline}
      />

      {/* 2. Global Settings Panel */}
      {items.length > 0 && (
        <SettingsPanel
          settings={globalSettings}
          onChange={handleSettingsChange}
          allowFormatChange={!lockOutputFormat}
        />
      )}

      {/* 3. Conversion Queue List */}
      <QueueList
        items={items}
        isConverting={isConverting}
        onRemoveItem={handleRemoveItem}
        onDownloadItem={handleDownloadItem}
        onConvertAll={handleConvertAll}
        onDownloadZip={handleDownloadZip}
        onClearAll={handleClearAll}
        onCancel={handleCancel}
      />
    </div>
  );
}

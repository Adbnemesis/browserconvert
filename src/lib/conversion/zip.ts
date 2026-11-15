import JSZip from "jszip";
import { ConversionItem } from "./types";
import { sanitizeFilename } from "../utils/formatters";

export async function createZipArchive(
  items: ConversionItem[],
  onProgress?: (percent: number) => void
): Promise<Blob> {
  const zip = new JSZip();
  const successfulItems = items.filter((item) => item.status === "completed" && item.outputBlob);

  if (successfulItems.length === 0) {
    throw new Error("No successfully converted files to package into a ZIP archive.");
  }

  // Handle unique naming in case of duplicate output names
  const nameCounts: Record<string, number> = {};

  for (const item of successfulItems) {
    if (!item.outputBlob) continue;
    let fileName = item.outputName || `${item.id}.${item.settings.outputFormat}`;
    fileName = sanitizeFilename(fileName);

    if (nameCounts[fileName] !== undefined) {
      nameCounts[fileName]++;
      const dotIndex = fileName.lastIndexOf(".");
      if (dotIndex !== -1) {
        fileName = `${fileName.substring(0, dotIndex)}_${nameCounts[fileName]}${fileName.substring(dotIndex)}`;
      } else {
        fileName = `${fileName}_${nameCounts[fileName]}`;
      }
    } else {
      nameCounts[fileName] = 0;
    }

    zip.file(fileName, item.outputBlob);
  }

  const zipBlob = await zip.generateAsync(
    {
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    },
    (metadata) => {
      if (onProgress) {
        onProgress(Math.round(metadata.percent));
      }
    }
  );

  return zipBlob;
}

type AnalyticsEventName =
  | "file_selected"
  | "conversion_started"
  | "conversion_completed"
  | "conversion_failed"
  | "file_downloaded"
  | "zip_downloaded"
  | "tool_used";

interface AnalyticsEventData {
  inputFormat?: string;
  outputFormat?: string;
  fileSizeBucket?: "under_5mb" | "5_25mb" | "25_100mb" | "over_100mb";
  durationSeconds?: number;
  tool?: string;
  errorReason?: string;
}

export function trackEvent(name: AnalyticsEventName, data?: AnalyticsEventData): void {
  // Privacy-first event tracker.
  // NEVER log file names, personal information, or file content.
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: name,
    timestamp: Date.now(),
    ...data,
  };

  // If Google Tag Manager / gtag is configured:
  const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  if (typeof win.gtag === "function") {
    win.gtag("event", name, data);
  } else if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push(eventPayload);
  }

  // Development debugging
  if (process.env.NODE_ENV === "development") {
    // console.debug("[Privacy Analytics]", name, data);
  }
}

export function getFileSizeBucket(bytes: number): "under_5mb" | "5_25mb" | "25_100mb" | "over_100mb" {
  if (bytes < 5 * 1024 * 1024) return "under_5mb";
  if (bytes < 25 * 1024 * 1024) return "5_25mb";
  if (bytes < 100 * 1024 * 1024) return "25_100mb";
  return "over_100mb";
}

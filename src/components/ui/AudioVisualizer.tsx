"use client";

import React from "react";

interface AudioVisualizerProps {
  bars?: 3 | 5 | 7;
  active?: boolean;
  className?: string;
  barWidth?: string;
}

export function AudioVisualizer({
  bars = 5,
  active = true,
  className = "h-4 gap-0.5",
  barWidth = "w-0.5",
}: AudioVisualizerProps) {
  const animations = [
    "animate-eq-1",
    "animate-eq-2",
    "animate-eq-3",
    "animate-eq-4",
    "animate-eq-5",
    "animate-eq-2",
    "animate-eq-4",
  ];

  const staticHeights = ["30%", "65%", "90%", "55%", "40%", "70%", "45%"];

  const count = Math.min(bars, 7);

  return (
    <div
      className={`inline-flex items-end ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`${barWidth} rounded-full bg-brand-500 transition-all duration-200 ${
            active ? animations[i % animations.length] : ""
          }`}
          style={{
            height: active ? undefined : staticHeights[i % staticHeights.length],
            minHeight: "3px",
          }}
        />
      ))}
    </div>
  );
}

# BrowserConvert

BrowserConvert is a client-side audio converter, video-to-audio extractor, and audio editing suite built with Next.js and WebAssembly FFmpeg. All media processing executes entirely inside the user's browser without uploading files to any remote server.

## Features

- **Audio Conversion**: Convert between MP3, WAV, M4A, FLAC, AAC, OGG, OPUS, AIFF, and WMA.
- **Video Extraction**: Extract audio tracks from MP4, MOV, MKV, WEBM, AVI, WMV, FLV, 3GP, and TS.
- **Audio Cutter**: Trim audio clips with start/end sliders and audio playback preview.
- **Audio Merger**: Combine multiple audio tracks sequentially with reordering controls.
- **Audio Compressor**: Compress audio files with 4 presets (Low, Medium, High, Extreme).
- **Audio Bitrate Changer**: Re-encode audio to 64k, 128k, 192k, 256k, or 320k.
- **Audio Speed Changer**: Change tempo from 0.5x to 2.0x with pitch correction.
- **Audio Volume Adjuster**: Adjust volume level from 25% to 300%.
- **Client-Side Privacy**: Files never leave the browser. Zero server upload latency and zero server-side storage.
- **Theme Support**: Obsidian dark mode with Cyber Emerald and Crimson Red accent options.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Production Build

```bash
npm run build
npm start
```

## Security & Architecture

BrowserConvert utilizes multithreaded WebAssembly through `@ffmpeg/ffmpeg`. Cross-Origin Isolation headers (`Cross-Origin-Embedder-Policy: require-corp` and `Cross-Origin-Opener-Policy: same-origin`) are preconfigured in `next.config.ts` to allow `SharedArrayBuffer` execution.

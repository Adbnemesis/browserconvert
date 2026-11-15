import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function generate() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Generate OG Image (1200x630)
  await page.setViewport({ width: 1200, height: 630 });
  const ogHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1200px;
          height: 630px;
          background: #09090b;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 70px 80px;
          position: relative;
          overflow: hidden;
        }
        .bg-glow-1 {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          filter: blur(40px);
        }
        .bg-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6, 95, 70, 0.3) 0%, transparent 70%);
          bottom: -150px;
          left: -100px;
          filter: blur(40px);
        }
        .header {
          display: flex;
          align-items: center;
          gap: 18px;
          z-index: 10;
        }
        .logo-box {
          width: 58px;
          height: 58px;
          background: linear-gradient(135deg, #059669, #047857);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
          border: 1px solid rgba(52, 211, 153, 0.4);
        }
        .logo-svg {
          width: 32px;
          height: 32px;
          stroke: #ffffff;
        }
        .brand-title {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .badge {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-left: 14px;
        }
        .main {
          z-index: 10;
          max-width: 960px;
        }
        .headline {
          font-size: 56px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -1.5px;
          margin-bottom: 22px;
        }
        .highlight {
          background: linear-gradient(135deg, #34d399, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subheadline {
          font-size: 23px;
          color: #a1a1aa;
          line-height: 1.45;
          font-weight: 400;
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 28px;
        }
        .pill-group {
          display: flex;
          gap: 12px;
        }
        .pill {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 8px 18px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #e4e4e7;
        }
        .domain {
          font-size: 18px;
          font-weight: 700;
          color: #71717a;
          letter-spacing: 0.5px;
        }
      </style>
    </head>
    <body>
      <div class="bg-glow-1"></div>
      <div class="bg-glow-2"></div>
      
      <div class="header">
        <div class="logo-box">
          <svg class="logo-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>
        <div class="brand-title">BrowserConvert</div>
        <div class="badge">100% In-Browser • Zero Uploads</div>
      </div>

      <div class="main">
        <h1 class="headline">
          Fast & Private Audio Converter. <br>
          <span class="highlight">Extract Audio From Videos Online.</span>
        </h1>
        <p class="subheadline">
          Convert MP3, WAV, M4A, FLAC, OGG, OPUS, and extract sound from MP4, MOV, MKV files. Pure client-side WebAssembly. No server uploads.
        </p>
      </div>

      <div class="footer">
        <div class="pill-group">
          <div class="pill">⚡ Instant Processing</div>
          <div class="pill">🔒 100% Private</div>
          <div class="pill">📦 Batch ZIP Download</div>
          <div class="pill">✨ Free Forever</div>
        </div>
        <div class="domain">browserconvert.net</div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(ogHtml);
  await page.screenshot({ path: path.resolve('public/og-image.png'), type: 'png' });
  console.log('✓ Generated public/og-image.png (1200x630)');

  // 2. Generate Icon (512x512)
  await page.setViewport({ width: 512, height: 512 });
  const iconHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 512px;
          height: 512px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-box {
          width: 512px;
          height: 512px;
          background: linear-gradient(135deg, #059669, #047857);
          border-radius: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: inset 0 0 60px rgba(52, 211, 153, 0.4);
        }
        .icon-svg {
          width: 260px;
          height: 260px;
          stroke: #ffffff;
        }
      </style>
    </head>
    <body>
      <div class="icon-box">
        <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      </div>
    </body>
    </html>
  `;

  await page.setContent(iconHtml);
  fs.mkdirSync('public/icons', { recursive: true });
  await page.screenshot({ path: path.resolve('public/icons/icon-512.png'), type: 'png', omitBackground: true });
  console.log('✓ Generated public/icons/icon-512.png (512x512)');

  // 3. Apple Touch Icon (180x180)
  await page.setViewport({ width: 180, height: 180 });
  const appleHtml = iconHtml.replace(/512px/g, '180px').replace('120px', '40px').replace('260px', '96px');
  await page.setContent(appleHtml);
  await page.screenshot({ path: path.resolve('public/apple-touch-icon.png'), type: 'png' });
  console.log('✓ Generated public/apple-touch-icon.png (180x180)');

  // 4. Favicon 48x48
  await page.setViewport({ width: 48, height: 48 });
  const favHtml = iconHtml.replace(/512px/g, '48px').replace('120px', '10px').replace('260px', '26px');
  await page.setContent(favHtml);
  await page.screenshot({ path: path.resolve('public/favicon.ico'), type: 'png' });
  console.log('✓ Generated public/favicon.ico (48x48)');

  await browser.close();
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});

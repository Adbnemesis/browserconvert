import puppeteer from "puppeteer-core";
import path from "path";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT_DIR = "/Users/talus/.gemini/antigravity/brain/f04f6619-91f1-4ac4-87f2-ca8aa2d35477/screenshots";

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  console.log("Capturing Homepage...");
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(OUTPUT_DIR, "homepage.png") });

  console.log("Capturing MP4 to MP3 landing page...");
  await page.goto("http://localhost:3000/mp4-to-mp3", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(OUTPUT_DIR, "mp4-to-mp3.png") });

  console.log("Capturing Audio Cutter tool...");
  await page.goto("http://localhost:3000/audio-cutter", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(OUTPUT_DIR, "audio-cutter.png") });

  console.log("Capturing Format Guide...");
  await page.goto("http://localhost:3000/format-guide", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(OUTPUT_DIR, "format-guide.png") });

  // Mobile viewport screenshot of Homepage
  console.log("Capturing Mobile Homepage...");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(OUTPUT_DIR, "homepage-mobile.png") });

  await browser.close();
  console.log("All screenshots captured successfully!");
}

capture();

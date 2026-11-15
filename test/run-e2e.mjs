import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:3000";

async function clickButtonByText(page, textSubstring, timeout = 15000) {
  await page.waitForFunction(
    (text) => {
      const btns = Array.from(document.querySelectorAll("button"));
      return btns.some((b) => b.innerText.toLowerCase().includes(text.toLowerCase()) && !b.disabled);
    },
    { timeout },
    textSubstring
  );
  const btns = await page.$$("button");
  for (const b of btns) {
    const t = await page.evaluate((el) => el.innerText, b);
    if (t.toLowerCase().includes(textSubstring.toLowerCase())) {
      await b.click();
      return;
    }
  }
  throw new Error(`Button with text "${textSubstring}" not found!`);
}

async function runComprehensiveTests() {
  console.log("==================================================");
  console.log("   MediaConvert Full Suite E2E Integration Test   ");
  console.log("==================================================");

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(35000);

  const testWav = path.resolve("./test/sample.wav");
  const testMp4 = path.resolve("./test/sample.mp4");

  try {
    // --- TEST 1: Homepage Audio Converter (WAV -> MP3) ---
    console.log("\n[TEST 1] Homepage: Audio Conversion (WAV -> MP3)...");
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle2" });
    const fileInput1 = await page.$('input[type="file"]');
    await fileInput1.uploadFile(testWav);
    await page.waitForFunction(() => document.body.innerText.includes("sample.wav"));

    // Click Convert
    await clickButtonByText(page, "Convert");

    // Await Download button
    await page.waitForFunction(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      return btns.some((b) => b.innerText.includes("Download"));
    }, { timeout: 35000 });
    console.log("✓ Homepage WAV -> MP3 conversion verified with active Download button.");

    // --- TEST 2: Dedicated Landing Page Video-to-Audio (MP4 -> MP3) ---
    console.log("\n[TEST 2] /mp4-to-mp3: Video Audio Extraction (MP4 -> MP3)...");
    await page.goto(`${BASE_URL}/mp4-to-mp3`, { waitUntil: "networkidle2" });
    const fileInput2 = await page.$('input[type="file"]');
    await fileInput2.uploadFile(testMp4);
    await page.waitForFunction(() => document.body.innerText.includes("sample.mp4"));

    await clickButtonByText(page, "Convert");

    await page.waitForFunction(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      return btns.some((b) => b.innerText.includes("Download"));
    }, { timeout: 35000 });
    console.log("✓ /mp4-to-mp3 Video Extraction verified with active Download button.");

    // --- TEST 3: Audio Cutter Tool ---
    console.log("\n[TEST 3] /audio-cutter: Trim & Cut Audio...");
    await page.goto(`${BASE_URL}/audio-cutter`, { waitUntil: "networkidle2" });
    const fileInput3 = await page.$('input[type="file"]');
    await fileInput3.uploadFile(testWav);
    await clickButtonByText(page, "Cut & Save");
    await page.waitForSelector('a[download]', { timeout: 35000 });
    console.log("✓ Audio Cutter verified with valid downloadable result.");

    // --- TEST 4: Audio Compressor Tool ---
    console.log("\n[TEST 4] /audio-compressor: Compress Audio...");
    await page.goto(`${BASE_URL}/audio-compressor`, { waitUntil: "networkidle2" });
    const fileInput4 = await page.$('input[type="file"]');
    await fileInput4.uploadFile(testWav);
    await clickButtonByText(page, "Compress Audio File");
    await page.waitForSelector('a[download]', { timeout: 35000 });
    console.log("✓ Audio Compressor verified with valid downloadable result.");

    // --- TEST 5: Audio Speed Changer Tool ---
    console.log("\n[TEST 5] /audio-speed-changer: Adjust Playback Tempo...");
    await page.goto(`${BASE_URL}/audio-speed-changer`, { waitUntil: "networkidle2" });
    const fileInput5 = await page.$('input[type="file"]');
    await fileInput5.uploadFile(testWav);
    await clickButtonByText(page, "Playback Speed");
    await page.waitForSelector('a[download]', { timeout: 35000 });
    console.log("✓ Audio Speed Changer verified with valid downloadable result.");

    // --- TEST 6: Audio Volume Adjuster Tool ---
    console.log("\n[TEST 6] /audio-volume-adjuster: Adjust Gain/Volume...");
    await page.goto(`${BASE_URL}/audio-volume-adjuster`, { waitUntil: "networkidle2" });
    const fileInput6 = await page.$('input[type="file"]');
    await fileInput6.uploadFile(testWav);
    await clickButtonByText(page, "Volume & Save");
    await page.waitForSelector('a[download]', { timeout: 35000 });
    console.log("✓ Audio Volume Adjuster verified with valid downloadable result.");

    // --- TEST 7: Audio Bitrate Changer Tool ---
    console.log("\n[TEST 7] /audio-bitrate-changer: Adjust Bitrate...");
    await page.goto(`${BASE_URL}/audio-bitrate-changer`, { waitUntil: "networkidle2" });
    const fileInput7 = await page.$('input[type="file"]');
    await fileInput7.uploadFile(testWav);
    await clickButtonByText(page, "Change Bitrate");
    await page.waitForSelector('a[download]', { timeout: 35000 });
    console.log("✓ Audio Bitrate Changer verified with valid downloadable result.");

    // --- TEST 8: Audio Merger Tool ---
    console.log("\n[TEST 8] /audio-merger: Merge Multi-Track Audio...");
    await page.goto(`${BASE_URL}/audio-merger`, { waitUntil: "networkidle2" });
    const fileInput8 = await page.$('input[type="file"]');
    // Upload 2 files
    await fileInput8.uploadFile(testWav, testWav);
    await clickButtonByText(page, "Audio Tracks");
    await page.waitForSelector('a[download]', { timeout: 35000 });
    console.log("✓ Audio Merger verified with valid downloadable result.");

    console.log("\n==================================================");
    console.log(" ALL 8 FUNCTIONAL E2E TESTS PASSED SUCCESSFULLY!  ");
    console.log("==================================================");
  } catch (err) {
    console.error("\n❌ E2E Test Suite Failed:", err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

runComprehensiveTests();

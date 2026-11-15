import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT_DIR = "/Users/talus/.gemini/antigravity/brain/f04f6619-91f1-4ac4-87f2-ca8aa2d35477/screenshots";

// Create a small test wav file in /tmp/
const TEST_FILE = "/tmp/test-audio.wav";
if (!fs.existsSync(TEST_FILE)) {
  fs.writeFileSync(TEST_FILE, Buffer.alloc(1024));
}

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });

  // 1. Upload mock file to show SettingsPanel
  const fileInput = await page.$('input[type="file"]');
  if (fileInput) {
    await fileInput.uploadFile(TEST_FILE);
    await new Promise((r) => setTimeout(r, 500));
  }

  // 2. Open "Advanced audio settings"
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    const btn = buttons.find((b) => b.textContent?.includes("Advanced audio settings"));
    if (btn) btn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // 3. Check selected speed
  const speedState1 = await page.evaluate(() => {
    const selects = Array.from(document.querySelectorAll("select"));
    const speedSelect = selects.find((s) =>
      Array.from(s.options).some((o) => o.text.includes("Normal speed"))
    );
    if (!speedSelect) return null;
    return {
      value: speedSelect.value,
      selectedText: speedSelect.options[speedSelect.selectedIndex]?.text,
    };
  });
  console.log("Initial default speed:", speedState1);

  // 4. Change speed to 1.5x
  await page.evaluate(() => {
    const selects = Array.from(document.querySelectorAll("select"));
    const speedSelect = selects.find((s) =>
      Array.from(s.options).some((o) => o.text.includes("Normal speed"))
    );
    if (speedSelect) {
      speedSelect.value = "1.5";
      speedSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
  await new Promise((r) => setTimeout(r, 300));

  const speedState2 = await page.evaluate(() => {
    const selects = Array.from(document.querySelectorAll("select"));
    const speedSelect = selects.find((s) =>
      Array.from(s.options).some((o) => o.text.includes("Normal speed"))
    );
    if (!speedSelect) return null;
    return {
      value: speedSelect.value,
      selectedText: speedSelect.options[speedSelect.selectedIndex]?.text,
    };
  });
  console.log("After selecting 1.5x:", speedState2);

  // 5. Change speed BACK to 1.0x (Normal speed) to verify it can be selected!
  await page.evaluate(() => {
    const selects = Array.from(document.querySelectorAll("select"));
    const speedSelect = selects.find((s) =>
      Array.from(s.options).some((o) => o.text.includes("Normal speed"))
    );
    if (speedSelect) {
      speedSelect.value = "1.0";
      speedSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
  await new Promise((r) => setTimeout(r, 300));

  const speedState3 = await page.evaluate(() => {
    const selects = Array.from(document.querySelectorAll("select"));
    const speedSelect = selects.find((s) =>
      Array.from(s.options).some((o) => o.text.includes("Normal speed"))
    );
    if (!speedSelect) return null;
    return {
      value: speedSelect.value,
      selectedText: speedSelect.options[speedSelect.selectedIndex]?.text,
    };
  });
  console.log("After selecting 1.0x back:", speedState3);

  // Take screenshot
  await page.screenshot({ path: path.join(OUTPUT_DIR, "speed-setting-verified.png") });

  await browser.close();
}

verify().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});

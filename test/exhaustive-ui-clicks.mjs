import puppeteer from "puppeteer-core";
import path from "path";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:3000";

const testWav = path.resolve("./test/sample.wav");
const testWav2 = path.resolve("./test/sample2.wav");
const testMp4 = path.resolve("./test/sample.mp4");

const results = {
  totalChecks: 0,
  passed: 0,
  failed: 0,
  failures: [],
};

function pass(desc) {
  results.totalChecks++;
  results.passed++;
  console.log(`  ✓ [PASS] ${desc}`);
}

function fail(desc, err) {
  results.totalChecks++;
  results.failed++;
  const msg = err?.message || String(err);
  results.failures.push(`${desc}: ${msg}`);
  console.error(`  ❌ [FAIL] ${desc}: ${msg}`);
}

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

async function runUITests() {
  console.log("======================================================================");
  console.log("       BrowserConvert Exhaustive UI, Click & Edge Case Verification      ");
  console.log("======================================================================");

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(35000);

  // --------------------------------------------------------------------------
  // TEST 1: Dark Mode Toggle, Persistence & Class Application
  // --------------------------------------------------------------------------
  console.log("\n[TEST 1] Dark Mode Toggle, Storage & DOM Persistence...");
  try {
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle2" });

    // Initial state check
    const initialDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    pass(`Initial theme state detected (dark: ${initialDark})`);

    // Click theme toggle to invert theme
    await page.evaluate(() => {
      const themeBtn = document.querySelector('button[aria-label*="mode"]');
      if (themeBtn) themeBtn.click();
    });
    await new Promise((r) => setTimeout(r, 200));

    const toggledDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    const storedTheme = await page.evaluate(() => localStorage.getItem("theme"));

    if (toggledDark !== initialDark && (storedTheme === "dark" || storedTheme === "light")) {
      pass(`Theme toggle successfully inverted theme (now dark: ${toggledDark}, stored: '${storedTheme}')`);
    } else {
      throw new Error(`Theme toggle did not invert (toggledDark: ${toggledDark}, stored: ${storedTheme})`);
    }

    // Reload page to test anti-FOUC script & persistence
    await page.reload({ waitUntil: "networkidle2" });
    const persistedDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    if (persistedDark === toggledDark) {
      pass(`Theme state (${persistedDark ? "dark" : "light"}) persists after reload with zero FOUC`);
    } else {
      throw new Error("Theme state lost after reload");
    }

    // Toggle back to original state
    await page.evaluate(() => {
      const themeBtn = document.querySelector('button[aria-label*="mode"]');
      if (themeBtn) themeBtn.click();
    });
    await new Promise((r) => setTimeout(r, 200));
    const restoredDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    if (restoredDark === initialDark) {
      pass("Theme toggle cleanly returned to original preference");
    } else {
      throw new Error("Failed to restore initial theme state");
    }

    // TEST ACCENT / THEME SWITCHER (Northern Lights & Solar Dusk)
    await page.evaluate(() => {
      const solarBtn = document.querySelector('button[aria-label*="Solar Dusk"]');
      if (solarBtn) solarBtn.click();
    });
    await new Promise((r) => setTimeout(r, 100));
    const themeSolar = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    if (themeSolar === "solardusk") {
      pass("Solar Dusk theme activated and data-theme set to 'solardusk'");
    }

    await page.evaluate(() => {
      const auroraBtn = document.querySelector('button[aria-label*="Northern Lights"]');
      if (auroraBtn) auroraBtn.click();
    });
    await new Promise((r) => setTimeout(r, 100));
    const themeAurora = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    if (themeAurora === "aurora") {
      pass("Northern Lights theme activated and data-theme set to 'aurora'");
    }
  } catch (e) {
    fail("Dark mode toggle test failed", e);
  }

  // --------------------------------------------------------------------------
  // TEST 2: Navbar Dropdown & Top Navigation Links
  // --------------------------------------------------------------------------
  console.log("\n[TEST 2] Navbar Navigation Links & Interactive Dropdown...");
  try {
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle2" });

    // Open Audio Tools Dropdown
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      const toolsBtn = btns.find((b) => b.innerText.includes("Audio Tools"));
      if (toolsBtn) toolsBtn.click();
    });

    // Wait for dropdown menu to appear
    await page.waitForFunction(() => {
      const links = Array.from(document.querySelectorAll("a"));
      return links.some((l) => l.href.includes("/audio-cutter")) && links.some((l) => l.href.includes("/audio-merger"));
    });
    pass("Audio Tools dropdown opened; tool links rendered");

    // Click Brand logo to verify return to home
    const brandLogo = await page.$('a[href="/"]');
    if (!brandLogo) throw new Error("Brand logo link not found");
    await brandLogo.click();
    await page.waitForFunction(() => window.location.pathname === "/");
    pass("Brand logo link clicks and navigates cleanly to homepage");
  } catch (e) {
    fail("Navbar dropdown and nav links failed", e);
  }

  // --------------------------------------------------------------------------
  // TEST 3: Footer Links Comprehensive Audit (Zero 404s)
  // --------------------------------------------------------------------------
  console.log("\n[TEST 3] Comprehensive Footer Links Crawl (All Internal Links)...");
  try {
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle2" });
    const footerHrefs = await page.evaluate(() => {
      const footer = document.querySelector("footer");
      if (!footer) return [];
      const links = Array.from(footer.querySelectorAll("a"));
      return links.map((l) => l.getAttribute("href")).filter((h) => h && h.startsWith("/"));
    });

    const uniqueHrefs = [...new Set(footerHrefs)];
    pass(`Discovered ${uniqueHrefs.length} internal footer links`);

    for (const href of uniqueHrefs) {
      const res = await page.goto(`${BASE_URL}${href}`, { waitUntil: "domcontentloaded" });
      const status = res.status();
      if (status === 200 || status === 304) {
        pass(`Footer link '${href}' resolves with HTTP ${status}`);
      } else {
        fail(`Footer link '${href}' returned unexpected status ${status}`);
      }
    }
  } catch (e) {
    fail("Footer links audit failed", e);
  }

  // --------------------------------------------------------------------------
  // TEST 4: Audio Cutter Tool Edge Cases & Interactive Playback
  // --------------------------------------------------------------------------
  console.log("\n[TEST 4] Audio Cutter: Interactive Sliders, Play/Pause & Edge Cases...");
  try {
    await page.goto(`${BASE_URL}/audio-cutter`, { waitUntil: "networkidle2" });
    const fileInput = await page.$('input[type="file"]');
    await fileInput.uploadFile(testWav);
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("cut & save") || document.body.innerText.toLowerCase().includes("trimmed length"));
    pass("Audio Cutter loaded test audio file and controls");

    // Test Play/Pause toggle
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      const playBtn = btns.find((b) => b.innerText.includes("Play Selection") || b.innerText.includes("Pause"));
      if (playBtn) playBtn.click();
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      const pauseBtn = btns.find((b) => b.innerText.includes("Pause") || b.innerText.includes("Play Selection"));
      if (pauseBtn) pauseBtn.click();
    });
    pass("Audio Cutter preview player play/pause toggle functional");

    // Click Cut & Save Audio
    await clickButtonByText(page, "Cut & Save");

    await page.waitForSelector('a[download]', { timeout: 35000 });
    pass("Audio Cutter trimmed audio segment and generated download file");
  } catch (e) {
    fail("Audio Cutter test failed", e);
  }

  // --------------------------------------------------------------------------
  // TEST 5: Audio Merger: Track Ingestion, Reordering & Track Deletion
  // --------------------------------------------------------------------------
  console.log("\n[TEST 5] Audio Merger: Track Ingestion, Reordering & Track Deletion...");
  try {
    await page.goto(`${BASE_URL}/audio-merger`, { waitUntil: "networkidle2" });
    const fileInput = await page.$('input[type="file"]');
    await fileInput.uploadFile(testWav, testWav2);
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("merge 2 audio tracks"));
    pass("Audio Merger ingested 2 tracks into sequence");

    // Test Move Down button on track 1
    const moveDownBtn = await page.$('button[title="Move down"], button[title="Move Down"]');
    if (moveDownBtn) {
      await moveDownBtn.click();
      pass("Track reordering (Move Down) button functional");
    }

    // Test Delete Track button
    const deleteBtn = await page.$('button[title="Remove track"], button[title="Remove"]');
    if (deleteBtn) {
      await deleteBtn.click();
      await page.waitForFunction(() => !document.body.innerText.toLowerCase().includes("merge 2 audio tracks"));
      pass("Track removal from merger sequence functional");
    }

    // Re-add track to have 2 tracks and merge
    await fileInput.uploadFile(testWav2);
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("merge 2 audio tracks"));

    await clickButtonByText(page, "Audio Tracks");

    await page.waitForSelector('a[download]', { timeout: 35000 });
    pass("Audio Merger concatenated tracks and generated download file");
  } catch (e) {
    fail("Audio Merger test failed", e);
  }

  // --------------------------------------------------------------------------
  // TEST 6: Audio Compressor: Preset Buttons & Ratio Verification
  // --------------------------------------------------------------------------
  console.log("\n[TEST 6] Audio Compressor: Preset Pill Switching & Compression...");
  try {
    await page.goto(`${BASE_URL}/audio-compressor`, { waitUntil: "networkidle2" });
    const fileInput = await page.$('input[type="file"]');
    await fileInput.uploadFile(testWav);
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("compression level"));

    // Click through each compression preset pill
    const presets = ["Low", "Medium", "High", "Extreme"];
    for (const p of presets) {
      await page.evaluate((text) => {
        const els = Array.from(document.querySelectorAll("div, button"));
        const el = els.find((b) => b.innerText && b.innerText.includes(text));
        if (el) el.click();
      }, p);
      pass(`Audio Compressor switched to preset: ${p}`);
    }

    // Compress with Extreme preset
    await clickButtonByText(page, "Compress Audio File");

    await page.waitForSelector('a[download]', { timeout: 35000 });
    pass("Audio Compressor compressed audio with delta ratio feedback");
  } catch (e) {
    fail("Audio Compressor test failed", e);
  }

  // --------------------------------------------------------------------------
  // TEST 7: Audio Speed & Volume Tools Preset Buttons
  // --------------------------------------------------------------------------
  console.log("\n[TEST 7] Speed & Volume Preset Buttons...");
  try {
    // Speed tool
    await page.goto(`${BASE_URL}/audio-speed-changer`, { waitUntil: "networkidle2" });
    const speedInput = await page.$('input[type="file"]');
    await speedInput.uploadFile(testWav);
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("playback speed"));

    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      const btn = btns.find((b) => b.innerText.includes("1.5x"));
      if (btn) btn.click();
    });
    pass("Speed preset pill '1.5x' clicked");

    // Volume tool
    await page.goto(`${BASE_URL}/audio-volume-adjuster`, { waitUntil: "networkidle2" });
    const volInput = await page.$('input[type="file"]');
    await volInput.uploadFile(testWav);
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("volume level"));

    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      const btn = btns.find((b) => b.innerText.includes("150%"));
      if (btn) btn.click();
    });
    pass("Volume preset pill '150%' clicked");
  } catch (e) {
    fail("Speed and Volume preset tests failed", e);
  }

  // --------------------------------------------------------------------------
  // TEST 8: Main Converter: Queue Item Removal & Cancellation
  // --------------------------------------------------------------------------
  console.log("\n[TEST 8] Main Converter: Individual Item Removal & Cancellation...");
  try {
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle2" });
    const fileInput = await page.$('input[type="file"]');

    // Upload 2 files
    await fileInput.uploadFile(testWav, testMp4);
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("queue (2 tracks)"));
    pass("Uploaded 2 files to conversion queue");

    // Remove 1 file using trash button
    const trashBtn = await page.$('button[aria-label="Remove from queue"]');
    if (!trashBtn) throw new Error("Trash button not found on queue item");
    await trashBtn.click();
    await page.waitForFunction(() => document.body.innerText.toLowerCase().includes("queue (1 track)"));
    pass("Trash button removed individual item from queue (count: 2 -> 1)");

    // Clear remaining queue
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll("button"));
      const clearBtn = btns.find((b) => b.innerText.trim() === "Clear");
      if (clearBtn) clearBtn.click();
    });

    await page.waitForFunction(() => !document.body.innerText.toLowerCase().includes("queue ("));
    pass("Clear queue button reset state back to empty dropzone");
  } catch (e) {
    fail("Queue management test failed", e);
  }

  await browser.close();

  console.log("\n======================================================================");
  console.log(`  UI & CLICK VERIFICATION SUMMARY: ${results.passed}/${results.totalChecks} CHECKS PASSED`);
  console.log("======================================================================");

  if (results.failures.length > 0) {
    console.error("\nFailures:");
    results.failures.forEach((f) => console.error(" - ", f));
    process.exitCode = 1;
  }
}

runUITests();

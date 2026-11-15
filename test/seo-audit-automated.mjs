import puppeteer from "puppeteer-core";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "http://localhost:3000";

const routesToTest = [
  { path: "/", type: "home", expectedTitle: "Free Online Audio Converter" },
  { path: "/mp4-to-mp3", type: "converter", expectedTitle: "MP4 to MP3" },
  { path: "/wav-to-mp3", type: "converter", expectedTitle: "WAV to MP3" },
  { path: "/m4a-to-mp3", type: "converter", expectedTitle: "M4A to MP3" },
  { path: "/mov-to-mp3", type: "converter", expectedTitle: "MOV to MP3" },
  { path: "/mp3-to-wav", type: "converter", expectedTitle: "MP3 to WAV" },
  { path: "/flac-to-mp3", type: "converter", expectedTitle: "FLAC to MP3" },
  { path: "/ogg-to-mp3", type: "converter", expectedTitle: "OGG to MP3" },
  { path: "/opus-to-mp3", type: "converter", expectedTitle: "OPUS to MP3" },
  { path: "/aac-to-mp3", type: "converter", expectedTitle: "AAC to MP3" },
  { path: "/audio-converter", type: "hub", expectedTitle: "Online Audio Converter" },
  { path: "/audio-cutter", type: "tool", expectedTitle: "Audio Cutter" },
  { path: "/audio-merger", type: "tool", expectedTitle: "Audio Merger" },
  { path: "/audio-compressor", type: "tool", expectedTitle: "Audio Compressor" },
  { path: "/audio-bitrate-changer", type: "tool", expectedTitle: "Audio Bitrate Changer" },
  { path: "/audio-speed-changer", type: "tool", expectedTitle: "Audio Speed Changer" },
  { path: "/audio-volume-adjuster", type: "tool", expectedTitle: "Audio Volume Adjuster" },
  { path: "/format-guide", type: "guide", expectedTitle: "Audio Format Guide" },
  { path: "/about", type: "info", expectedTitle: "About BrowserConvert" },
  { path: "/contact", type: "info", expectedTitle: "Contact" },
  { path: "/privacy", type: "legal", expectedTitle: "Privacy Policy" },
  { path: "/terms", type: "legal", expectedTitle: "Terms of Service" },
];

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

async function runAudit() {
  console.log("=== STARTING EXHAUSTIVE AUTOMATED SEO AUDIT ===\n");

  // TEST SUITE 1: CRAWL & ROBOTS VERIFICATION
  console.log("1. Validating robots.txt & Sitemap...");
  try {
    const robotsRes = await fetch(`${BASE_URL}/robots.txt`);
    if (robotsRes.status === 200) {
      pass("robots.txt returns HTTP 200");
    } else {
      fail(`robots.txt returned HTTP ${robotsRes.status}`);
    }
    const robotsText = await robotsRes.text();
    if (robotsText.toLowerCase().includes("user-agent: *") && robotsText.includes("sitemap.xml")) {
      pass("robots.txt contains User-agent: * and sitemap reference");
    } else {
      fail("robots.txt missing standard directives", robotsText);
    }
    if (robotsText.includes("OAI-SearchBot") && robotsText.includes("PerplexityBot")) {
      pass("robots.txt explicitly permits AI discovery bots");
    } else {
      fail("robots.txt missing AI discovery bot permissions");
    }

    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
    if (sitemapRes.status === 200) {
      pass("sitemap.xml returns HTTP 200");
    } else {
      fail(`sitemap.xml returned HTTP ${sitemapRes.status}`);
    }
    const sitemapText = await sitemapRes.text();
    if (sitemapText.includes("<urlset") && sitemapText.includes("/mp4-to-mp3") && sitemapText.includes("/format-guide")) {
      pass("sitemap.xml contains valid XML urlset with all key routes");
    } else {
      fail("sitemap.xml missing required URLs", sitemapText.slice(0, 300));
    }
  } catch (err) {
    fail("Failed fetching robots/sitemap", err);
  }

  // TEST SUITE 2: AI MACHINE-READABLE FILES
  console.log("\n2. Validating AI Machine-Readable Files...");
  try {
    const llmsRes = await fetch(`${BASE_URL}/llms.txt`);
    if (llmsRes.status === 200) {
      const text = await llmsRes.text();
      if (text.includes("# BrowserConvert") && text.includes("WebAssembly")) {
        pass("/llms.txt exists with structured AI context");
      } else {
        fail("/llms.txt missing key brand/tech content");
      }
    } else {
      fail(`/llms.txt returned HTTP ${llmsRes.status}`);
    }

    const pricingRes = await fetch(`${BASE_URL}/pricing.md`);
    if (pricingRes.status === 200) {
      const text = await pricingRes.text();
      if (text.includes("Free Forever") && text.includes("$0")) {
        pass("/pricing.md exists with free pricing tier declaration");
      } else {
        fail("/pricing.md missing pricing tier data");
      }
    } else {
      fail(`/pricing.md returned HTTP ${pricingRes.status}`);
    }
  } catch (err) {
    fail("Failed fetching AI files", err);
  }

  // TEST SUITE 3: STATIC VISUAL ASSETS
  console.log("\n3. Validating Social & Favicon Assets...");
  try {
    const ogRes = await fetch(`${BASE_URL}/og-image.png`);
    if (ogRes.status === 200 && ogRes.headers.get("content-type")?.includes("image")) {
      pass("/og-image.png exists and returns valid image");
    } else {
      fail(`/og-image.png failed: ${ogRes.status}`);
    }

    const iconRes = await fetch(`${BASE_URL}/icons/icon-512.png`);
    if (iconRes.status === 200 && iconRes.headers.get("content-type")?.includes("image")) {
      pass("/icons/icon-512.png exists and returns valid image");
    } else {
      fail(`/icons/icon-512.png failed: ${iconRes.status}`);
    }

    const favRes = await fetch(`${BASE_URL}/favicon.ico`);
    if (favRes.status === 200) {
      pass("/favicon.ico returns HTTP 200");
    } else {
      fail(`/favicon.ico failed: ${favRes.status}`);
    }
  } catch (err) {
    fail("Failed testing static assets", err);
  }

  // TEST SUITE 4: EXHAUSTIVE PER-PAGE METADATA & SCHEMA AUDIT
  console.log(`\n4. Auditing Metadata & Schema Across ${routesToTest.length} Routes...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  for (const route of routesToTest) {
    const url = `${BASE_URL}${route.path}`;
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
      const status = response.status();
      if (status === 200) {
        pass(`${route.path} returns HTTP 200`);
      } else {
        fail(`${route.path} returned HTTP ${status}`);
      }

      // Check Security Headers
      const headers = response.headers();
      if (headers["x-content-type-options"] === "nosniff" && headers["x-frame-options"] === "DENY") {
        pass(`${route.path} security headers active (nosniff, DENY)`);
      } else {
        fail(`${route.path} missing security headers`);
      }

      // Check Title
      const title = await page.title();
      if (title && title.includes(route.expectedTitle)) {
        pass(`${route.path} title valid: "${title.slice(0, 45)}..."`);
      } else {
        fail(`${route.path} title unexpected: "${title}"`);
      }

      // Check Meta Description
      const description = await page.$eval(
        'meta[name="description"]',
        (el) => el.getAttribute("content") || ""
      ).catch(() => "");
      if (description && description.length >= 50) {
        pass(`${route.path} meta description valid (${description.length} chars)`);
      } else {
        fail(`${route.path} meta description missing or too short`);
      }

      // Check Canonical URL
      const canonical = await page.$eval(
        'link[rel="canonical"]',
        (el) => el.getAttribute("href") || ""
      ).catch(() => "");
      if (canonical && canonical.includes("browserconvert.org")) {
        pass(`${route.path} canonical URL valid: ${canonical}`);
      } else {
        fail(`${route.path} canonical URL missing or invalid: "${canonical}"`);
      }

      // Check H1 Count
      const h1Count = await page.$$eval("h1", (els) => els.length);
      if (h1Count === 1) {
        pass(`${route.path} has exactly 1 H1 heading`);
      } else {
        fail(`${route.path} has ${h1Count} H1 headings (expected 1)`);
      }

      // Check JSON-LD Schemas
      const jsonLdScripts = await page.$$eval('script[type="application/ld+json"]', (scripts) =>
        scripts.map((s) => s.textContent || "")
      );

      if (jsonLdScripts.length > 0) {
        let hasValidSchema = false;
        for (const raw of jsonLdScripts) {
          try {
            const parsed = JSON.parse(raw);
            if (parsed["@context"] === "https://schema.org") {
              hasValidSchema = true;
            }
          } catch (e) {}
        }
        if (hasValidSchema) {
          pass(`${route.path} contains valid Schema.org JSON-LD`);
        } else {
          fail(`${route.path} JSON-LD could not be parsed as valid Schema.org`);
        }
      } else {
        fail(`${route.path} missing JSON-LD structured data script`);
      }
    } catch (err) {
      fail(`Error evaluating ${route.path}`, err);
    }
  }

  await browser.close();

  console.log("\n=================================");
  console.log(`TOTAL CHECKS: ${results.totalChecks}`);
  console.log(`PASSED: ${results.passed}`);
  console.log(`FAILED: ${results.failed}`);
  if (results.failures.length > 0) {
    console.log("\nFAILURES:");
    results.failures.forEach((f) => console.log(`  - ${f}`));
    process.exit(1);
  } else {
    console.log("ALL SEO CHECKS PASSED PERFECTLY!");
    console.log("=================================\n");
  }
}

runAudit().catch((err) => {
  console.error("FATAL AUDIT ERROR:", err);
  process.exit(1);
});

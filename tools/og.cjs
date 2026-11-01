// Renders tools/og.html to icons/og.png (1200×630), the image shown when getnodo.eu is shared.
// Run: node tools/og.cjs
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.goto("file://" + path.join(__dirname, "og.html"));
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(__dirname, "..", "icons", "og.png") });
  await b.close();
})();

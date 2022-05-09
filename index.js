import puppeteer from "puppeteer";
(async () => {
  const browser = await puppeteer.launch({ dumpio: true });
  const page = await browser.newPage();
  await page.goto("file:///Users/jrandolf/Sources/puppeteer-popup/index.html");
  const button = await page.waitForSelector("aria/Open Popup");
  await button?.click();
  const popupTarget = await browser.waitForTarget((target) =>
    target.url().endsWith("popup.html")
  );
  const popupPage = await popupTarget.page();
  await popupPage?.bringToFront();
  await popupPage?.close();
  await browser.close();
})();

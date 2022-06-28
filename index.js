import puppeteer from "puppeteer";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 30000;
  page.setDefaultTimeout(timeout);

  {
      const targetPage = page;
      await targetPage.setViewport({"width":1158,"height":1227})
  }
  {
    console.log('test');
      const targetPage = page;
      await targetPage.goto("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select");
  }

  await browser.close();
})();
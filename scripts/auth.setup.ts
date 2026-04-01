import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Since example.com has no login, just open page
  await page.goto('https://example.com');

  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;
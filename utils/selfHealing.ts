import { Page } from '@playwright/test';

export async function findElement(page: Page, selectors: string[]) {
  for (const selector of selectors) {
    try {
      const element = await page.locator(selector);
      if (await element.count() > 0) {
        return element;
      }
    } catch (e) {
      console.log(`Failed selector: ${selector}`);
    }
  }

  throw new Error(`Element not found using selectors: ${selectors}`);
}
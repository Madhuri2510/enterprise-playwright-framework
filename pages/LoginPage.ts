import { Page } from '@playwright/test';
import { findElement } from '../utils/selfHealing';

export class LoginPage {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    const usernameField = await findElement(this.page, [
      '#username',
      '[name="user"]',
      'input[type="text"]'
    ]);
  
    await usernameField.fill(username);
  }
}
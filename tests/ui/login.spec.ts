import { test, expect } from '../../fixtures/baseFixture';

test('User login test', async ({ loginPage }) => {
  await loginPage.goto('https://example.com');

  await loginPage.login('admin', 'password');

  // Add assertion later
});
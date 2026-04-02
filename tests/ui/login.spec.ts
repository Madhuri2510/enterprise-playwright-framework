import { test, expect } from '../../fixtures/baseFixture';
import { users } from '../../data/users';
import { Logger } from '../../utils/logger';


test('User login test', async ({ loginPage }) => {

  Logger.info("Starting login test");
  await loginPage.goto('/');
  await loginPage.login(users.admin.username, users.admin.password);

  // Add assertion later
});
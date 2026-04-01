import { test, expect } from '../../fixtures/baseFixture';
import { users } from '../../data/users';



test('User login test', async ({ loginPage }) => {
  await loginPage.goto('/');

  await loginPage.login(users.admin.username, users.admin.password);

  // Add assertion later
});
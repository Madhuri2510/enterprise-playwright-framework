import { test as base } from '@playwright/test';
import { getAuthToken } from '../utils/auth';
import { LoginPage } from '../pages/LoginPage';
import { UserAPI } from '../api/userApi';

type MyFixtures = {
  loginPage: LoginPage;
  userApi: UserAPI;
  authToken: string;
};

export const test = base.extend<MyFixtures>({
  
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  userApi: async ({ request }, use) => {
    await use(new UserAPI(request));
  },

  authToken: async ({}, use) => {
    const token = await getAuthToken();
    await use(token);
  },

});

export const expect = test.expect;
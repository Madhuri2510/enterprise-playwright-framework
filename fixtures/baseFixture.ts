import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserAPI } from '../api/userApi';

type MyFixtures = {
  loginPage: LoginPage;
  userApi: UserAPI;
  authToken: string;
};

export const test = base.extend<MyFixtures>({
  
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  userApi: async ({ request }, use) => {
    const userApi = new UserAPI(request);
    await use(userApi);
  },

  authToken: async ({}, use) => {
    // Later: fetch from API
    const token = "sample-token";
    await use(token);
  },

});

export const expect = test.expect;
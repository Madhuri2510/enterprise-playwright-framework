import { test, expect } from '../../fixtures/baseFixture';

test('Get user API', async ({ userApi, authToken }) => {
    const response = await userApi.getUser(authToken);
    expect(response.status()).toBe(200);
  });
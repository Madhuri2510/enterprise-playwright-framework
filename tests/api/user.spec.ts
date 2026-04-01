import { test, expect } from '../../fixtures/baseFixture';

test('Get user API', async ({ userApi }) => {
  const response = await userApi.getUser();

  expect(response.status()).toBe(200);
});
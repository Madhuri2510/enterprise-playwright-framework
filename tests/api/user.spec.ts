import { test, expect } from '../../fixtures/baseFixture';
import { generateApiTests } from '../../ai/services/apiTestGenerator';

test('Get user API', async ({ userApi, authToken }) => {
    const response = await userApi.getUser(authToken);
    expect(response.status()).toBe(200);
  });

  
  test('Generate API tests using AI', async () => {
    const schema = `
    POST /login
    Body: { username: string, password: string }
    Response: { token: string }
    `;
  
    const result = await generateApiTests(schema);
  
    console.log("Generated API Tests:\n", result);
  });
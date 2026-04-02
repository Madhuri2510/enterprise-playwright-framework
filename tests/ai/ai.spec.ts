import { test } from '@playwright/test';
import { generateTestCases } from '../../ai/services/testCaseGenerator';

test('AI test case generation', async () => {
  const result = await generateTestCases(
    "User should be able to login with valid credentials"
  );

  console.log("Generated Test Cases:\n", result);
});
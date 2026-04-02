import { test } from '@playwright/test';
import { generateTestCases } from '../../ai/services/testCaseGenerator';
import { suggestAssertions } from '../../ai/services/assertionGenerator'

test('AI test case generation', async () => {
  const result = await generateTestCases(
    "User should be able to login with valid credentials"
  );

  console.log("Generated Test Cases:\n", result);
});

test('AI assertion suggestion', async () => {
    const suggestions = await suggestAssertions("User login success page");
  
    console.log("Suggested Assertions:\n", suggestions);
  });


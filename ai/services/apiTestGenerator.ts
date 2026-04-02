import { callAI } from './aiClient';

export async function generateApiTests(apiSchema: string) {
  const prompt = `
  Generate API test cases for the following schema:

  ${apiSchema}

  Include:
  - Positive tests
  - Negative tests
  - Boundary cases
  - Status code validation
  `;

  return await callAI(prompt);
}
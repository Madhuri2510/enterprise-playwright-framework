import { callAI } from './aiClient';

export async function suggestAssertions(context: string) {
  const prompt = `
  Suggest assertions for the following scenario:

  ${context}

  Include:
  - UI validations
  - API validations
  - Edge cases
  `;

  return await callAI(prompt);
}
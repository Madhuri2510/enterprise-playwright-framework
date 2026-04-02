import { callAI } from './aiClient';

export async function generateTestData(field: string) {
  const prompt = `Generate test data for field: ${field}`;

  return await callAI(prompt);
}
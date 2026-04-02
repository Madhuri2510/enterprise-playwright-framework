import { callAI } from './aiClient';
import { buildTestCasePrompt } from '../prompts/testCasePrompts';

export async function generateTestCases(userStory: string) {
  const prompt = buildTestCasePrompt(userStory);

  const response = await callAI(prompt);

  return response;
}
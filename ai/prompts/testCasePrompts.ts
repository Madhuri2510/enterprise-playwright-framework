export function buildTestCasePrompt(userStory: string): string {
    return `
    Generate detailed test cases for the following user story:
  
    "${userStory}"
  
    Include:
    - Positive scenarios
    - Negative scenarios
    - Edge cases
    `;
  }
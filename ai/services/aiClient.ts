export async function callAI(prompt: string): Promise<string> {
    // Placeholder for real LLM integration
    // Later: OpenAI / Azure OpenAI
  
    console.log("AI Prompt:", prompt);
  
    return Promise.resolve(`
    1. Validate login with valid credentials
    2. Validate login with invalid password
    3. Validate empty username
    4. Validate session timeout
    `);
  }
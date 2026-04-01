import dotenv from 'dotenv';
dotenv.config();

type EnvConfig = {
  baseURL: string;
  apiURL: string;
};

const environments: Record<string, EnvConfig> = {
    dev: {
        baseURL: 'https://example.com',
        apiURL: 'https://jsonplaceholder.typicode.com',
      },
  qa: {
    baseURL: 'https://qa.example.com',
    apiURL: 'https://qa.api.example.com',
  },
  staging: {
    baseURL: 'https://staging.example.com',
    apiURL: 'https://staging.api.example.com',
  },
};

const currentEnv = process.env.ENV || 'dev';

export const env = environments[currentEnv];

// ✅ Validation AFTER declaration
if (!env) {
  throw new Error(`Invalid environment: ${currentEnv}`);
}

if (!env.baseURL) {
  throw new Error(`Base URL is missing for environment: ${currentEnv}`);
}
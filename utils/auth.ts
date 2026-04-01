import { request } from '@playwright/test';
import { env } from '../config/env';

export async function getAuthToken() {
  const apiContext = await request.newContext();

  const response = await apiContext.post(`${env.apiURL}/login`, {
    data: {
      username: 'testuser',
      password: 'password',
    },
  });

  const body = await response.json();
  return body.token || "mock-token";
}
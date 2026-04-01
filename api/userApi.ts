import { APIRequestContext } from '@playwright/test';
import { env } from '../config/env';

export class UserAPI {
  constructor(private request: APIRequestContext) {}

  async getUser() {
    return await this.request.get(`${env.apiURL}/users/1`);
  }
}
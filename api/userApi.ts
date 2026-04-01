import { APIRequestContext } from '@playwright/test';

export class UserAPI {
  constructor(private request: APIRequestContext) {}

  async getUser(token: string) {
    return await this.request.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
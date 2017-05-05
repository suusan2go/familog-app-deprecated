/* @flow */
import * as url from './url.js';
import uuid from 'uuid';
import qs from 'qs';

export default class ApiClient {
  sessionToken: string | null;
  constructor(sessionToken: string | null) {
    this.sessionToken = sessionToken;
  }

  async registerDeviceToken() {
    const deviceToken = uuid.v4();
    const response: Response = await this.post(url.DEVICE_URL, { deviceToken });
    const responseJson = await response.json();
    return responseJson.deviceToken;
  }

  async createSessionToken(deviceToken: string) {
    const response: Response = await this.post(url.SESSION_URL, {
      deviceToken,
    });
    const responseJson = await response.json();
    return responseJson.token;
  }

  async createDiary({ title }: { title: string }) {
    const response: Response = await this.post(url.DIARIES_URL, { title });
    const responseJson = await response.json();
    return responseJson;
  }

  async getDiaries() {
    const response: Response = await this.get(url.DIARIES_URL);
    const responseJson = await response.json();
    return responseJson;
  }

  post(url: string, body: any) {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.sessionToken,
      },
      body: JSON.stringify(body),
    });
  }

  get(url: string, queryParams?: any) {
    const urlWithQueryString = queryParams
      ? `${url}?${qs.stringify(queryParams)}`
      : url;
    return fetch(urlWithQueryString, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.sessionToken,
      },
    });
  }
}

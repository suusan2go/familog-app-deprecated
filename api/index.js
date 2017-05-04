/* @flow */
import * as url from './url.js';
import uuid from 'uuid';

export function post(url: string, body: any) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function registerDeviceToken() {
  const deviceToken = uuid.v4();
  const response: Response = await post(url.DEVICE_URL, { deviceToken });
  const responseJson = await response.json();
  return responseJson.deviceToken;
}

export async function createSessionToken(deviceToken: string) {
  const response: Response = await post(url.SESSION_URL, { deviceToken });
  const responseJson = await response.json();
  return responseJson.token;
}

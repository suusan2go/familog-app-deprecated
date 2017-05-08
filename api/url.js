/* @flow */
const HOST = __DEV__ ? 'http://192.168.1.6:8080' : 'https://api.familog.net';

export const DEVICE_URL = `${HOST}/device`;
export const SESSION_URL = `${HOST}/session`;
export const DIARIES_URL = `${HOST}/diaries`;
export const DIARY_ENTRIES_URL = (diaryID: number): string =>
  `${HOST}/diaries/${diaryID}/diary_entries`;
export const DIARY_ENTRY_URL = (diaryEntryID: number): string =>
  `${HOST}/diary_entries/${diaryEntryID}`;

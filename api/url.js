/* flow */
const HOST = process.env.NODE_ENV === 'development'
  ? 'http://192.168.1.6:8080'
  : 'https://api.familog.net';

export const DEVICE_URL: string = `${HOST}/device`;
export const SESSION_URL: string = `${HOST}/session`;
export const DIARIES_URL: string = `${HOST}/diaries`;
export const DIARY_ENTRIES_URL: string = (diaryID: number): string =>
  `${HOST}/diaries/${diaryID}/diary_entries`;
export const DIARY_ENTRY_URL: string = (diaryEntryID: number): string =>
  `${HOST}/diary_entries/${diaryEntryID}`;

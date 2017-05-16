/* @flow */
import Config from '../config.json';
const HOST = __DEV__ ? 'http://192.168.1.6:8080' : Config.endpoint;

export const DEVICE_URL = `${HOST}/device`;
export const SESSION_URL = `${HOST}/session`;
export const DIARIES_URL = `${HOST}/diaries`;
export const DIARY_ENTRIES_URL = (diaryID: number): string =>
  `${HOST}/diaries/${diaryID}/diary_entries`;
export const DIARY_ENTRY_URL = (diaryEntryID: number): string =>
  `${HOST}/diary_entries/${diaryEntryID}`;
export const DIARY_INVITATION_URL = (diaryID: number): string =>
  `${HOST}/diaries/${diaryID}/invitation`;
export const DIARY_INVITATION_VERIFICATION_URL = `${HOST}/diary_invitation_verifications`;
export const PUSH_NOTIFICATION_TOKENS_URL = `${HOST}/push_notification_tokens`;

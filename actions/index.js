/* @flow */
import type { DiaryEntryState } from '../reducers/diaryEntryList';

// Devicetoken
export const REGISTER_OR_SET_DEVICE_TOKEN = 'REGISTER_OR_SET_DEVICE_TOKEN';
export type RegisterOrSetDeviceTokenAction = {
  type: typeof REGISTER_OR_SET_DEVICE_TOKEN,
};
export const registerOrSetDeviceToken = (): RegisterOrSetDeviceTokenAction => {
  return {
    type: REGISTER_OR_SET_DEVICE_TOKEN,
  };
};

export const SET_DEVICE_TOKEN = 'SET_DEVICE_TOKEN';
export type SetDeviceTokenAction = {
  type: typeof SET_DEVICE_TOKEN,
  payload: string,
};
export const setDeviceToken = (deviceToken: string): SetDeviceTokenAction => ({
  type: SET_DEVICE_TOKEN,
  payload: deviceToken,
});

// Sessiontoken
export const SET_SESSION_TOKEN = 'SET_SESSION_TOKEN';
export type SetSessionTokenAction = {
  type: typeof SET_SESSION_TOKEN,
  payload: string,
};
export const setSessionToken = (
  sessionToken: string,
): SetSessionTokenAction => ({
  type: SET_SESSION_TOKEN,
  payload: sessionToken,
});

// Sessiontoken
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export type SetCurrentUserAction = {
  type: typeof SET_CURRENT_USER,
  payload: number,
};
export const setCurrentUser = (
  currentUserId: number,
): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: currentUserId,
});

// Diary
export const CREATE_DIARY_START = 'CREATE_DIARY_START';
export type CreateDiaryStartAction = {
  type: typeof CREATE_DIARY_START,
};
export const createDiaryStart = (): CreateDiaryStartAction => ({
  type: CREATE_DIARY_START,
});

export const CREATE_DIARY_SUCCESS = 'CREATE_DIARY_SUCCESS';
export type CreateDiarySuccessAction = {
  type: typeof CREATE_DIARY_SUCCESS,
};
export const createDiarySuccess = (): CreateDiarySuccessAction => ({
  type: CREATE_DIARY_SUCCESS,
});

export const CREATE_DIARY_FAILURE = 'CREATE_DIARY_FAILURE';
export type CreateDiaryFailureAction = {
  type: typeof CREATE_DIARY_FAILURE,
};
export const createDiaryFailure = (): CreateDiaryFailureAction => ({
  type: CREATE_DIARY_FAILURE,
});

export const SET_CURRENT_DIARY = 'SET_CURRENT_DIARY';
export type SetCurrentDiaryAction = {
  type: typeof SET_CURRENT_DIARY,
  payload: {
    id: number,
    title: string,
  },
};
export const setCurrentDiary = (body: {
  id: number,
  title: string,
}): SetCurrentDiaryAction => ({
  type: SET_CURRENT_DIARY,
  payload: body,
});

export const HANDLE_CHANGE_DIARY = 'HANDLE_CHANGE_DIARY';
export type HandleChangeDiaryAction = {
  type: typeof HANDLE_CHANGE_DIARY,
  payload: any,
};
export const handleChangeDiary = (payload: {
  title: string,
}): HandleChangeDiaryAction => ({
  type: HANDLE_CHANGE_DIARY,
  payload: payload,
});

// DiaryEntry
export const CREATE_DIARY_ENTRY_START = 'CREATE_DIARY_ENTRY_START';
export type CreateDiaryEntryStartAction = {
  type: typeof CREATE_DIARY_ENTRY_START,
};
export const createDiaryEntryStart = (): CreateDiaryEntryStartAction => ({
  type: CREATE_DIARY_ENTRY_START,
});

export const CREATE_DIARY_ENTRY_SUCCESS = 'CREATE_DIARY_ENTRY_SUCCESS';
export type CreateDiaryEntrySuccessAction = {
  type: typeof CREATE_DIARY_ENTRY_SUCCESS,
};
export const createDiaryEntrySuccess = (): CreateDiarySuccessAction => ({
  type: CREATE_DIARY_ENTRY_SUCCESS,
});

export const CREATE_DIARY_ENTRY_FAILURE = 'CREATE_DIARY_FAILURE';
export type CreateDiaryEntryFailureAction = {
  type: typeof CREATE_DIARY_ENTRY_FAILURE,
};
export const createDiaryEntryFailure = (): CreateDiaryEntryFailureAction => ({
  type: CREATE_DIARY_ENTRY_FAILURE,
});

export const HANDLE_CHANGE_DIARY_ENTRY = 'HANDLE_CHANGE_DIARY_ENTRY';
export type HandleChangeDiaryEntryAction = {
  type: typeof HANDLE_CHANGE_DIARY_ENTRY,
  payload: any,
};
export const handleChangeDiaryEntry = (payload: {|
  title?: string,
  body?: string,
  emoji?: string,
  image1?: { uri: string, name: string, type: string },
  image2?: { uri: string, name: string, type: string },
  image3?: { uri: string, name: string, type: string },
|}): HandleChangeDiaryEntryAction => ({
  type: HANDLE_CHANGE_DIARY_ENTRY,
  payload: payload,
});

// DiaryEntryList
export const GET_DIARY_ENTRY_LIST_START = 'GET_DIARY_ENTRY_LIST_START';
export type GetDiaryEntryListStartAction = {
  type: typeof GET_DIARY_ENTRY_LIST_START,
};
export const getDiaryEntryListStart = (): GetDiaryEntryListStartAction => ({
  type: GET_DIARY_ENTRY_LIST_START,
});

export const GET_DIARY_ENTRY_LIST_SUCCESS = 'GET_DIARY_ENTRY_LIST_SUCCESS';
export type GetDiaryEntryListSuccessAction = {
  type: typeof GET_DIARY_ENTRY_LIST_SUCCESS,
};
export const getDiaryEntryListSuccess = (): GetDiaryEntryListSuccessAction => ({
  type: GET_DIARY_ENTRY_LIST_SUCCESS,
});

export const GET_DIARY_ENTRY_LIST_FAILURE = 'CREATE_DIARY_LIST_FAILURE';
export type GetDiaryEntryListFailureAction = {
  type: typeof GET_DIARY_ENTRY_LIST_FAILURE,
};
export const getDiaryEntryListFailure = (): GetDiaryEntryListFailureAction => ({
  type: GET_DIARY_ENTRY_LIST_FAILURE,
});

export const UNSHIFT_DIARY_ENTRY_LIST = 'UNSHIFT_DIARY_ENTRY_LIST';
export type UnshiftDiaryEntryListAction = {
  type: typeof UNSHIFT_DIARY_ENTRY_LIST,
  payload: Array<DiaryEntryState>,
};
export const unshiftDiaryEntryList = (
  payload: Array<DiaryEntryState>,
): UnshiftDiaryEntryListAction => ({
  type: UNSHIFT_DIARY_ENTRY_LIST,
  payload: payload,
});

export const PUSH_DIARY_ENTRY_LIST = 'PUSH_DIARY_ENTRY_LIST';
export type PushDiaryEntryListAction = {
  type: typeof PUSH_DIARY_ENTRY_LIST,
  payload: Array<DiaryEntryState>,
};
export const pushDiaryEntryList = (
  payload: Array<DiaryEntryState>,
): PushDiaryEntryListAction => ({
  type: PUSH_DIARY_ENTRY_LIST,
  payload: payload,
});

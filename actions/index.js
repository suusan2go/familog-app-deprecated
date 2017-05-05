/* @flow */
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

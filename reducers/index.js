/* @flow */
import { combineReducers } from 'redux';
import deviceToken from './deviceToken';
import type { DeviceTokenState } from './deviceToken';
import sessionToken from './sessionToken';
import type { SessionTokenState } from './sessionToken';
import currentDiary from './currentDiary';
import type { CurrentDiaryState } from './currentDiary';
import diaryForm from './diaryForm';
import type { DiaryFormState } from './diaryForm';
import diaryEntryForm from './diaryEntryForm';
import type { DiaryEntryFormState } from './diaryEntryForm';
import diaryEntryList from './diaryEntryList';
import type { DiaryEntryListState } from './diaryEntryList';
import currentUser from './currentUser';
import type { CurrentUserState } from './currentUser';

export type ReduxState = {
  deviceToken: DeviceTokenState,
  sessionToken: SessionTokenState,
  diaryForm: DiaryFormState,
  currentDiary: CurrentDiaryState,
  diaryEntryForm: DiaryEntryFormState,
  diaryEntryList: DiaryEntryListState,
  currentUser: CurrentUserState,
};

const reducers = combineReducers({
  deviceToken,
  sessionToken,
  currentDiary,
  diaryForm,
  diaryEntryForm,
  diaryEntryList,
  currentUser,
});

export default reducers;

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

export type ReduxState = {
  deviceToken: DeviceTokenState,
  sessionToken: SessionTokenState,
  diaryForm: DiaryFormState,
  currentDiary: CurrentDiaryState,
  diaryEntryForm: DiaryEntryFormState,
};

const reducers = combineReducers({
  deviceToken,
  sessionToken,
  currentDiary,
  diaryForm,
  diaryEntryForm,
});

export default reducers;

/* @flow */
import * as Actions from '../actions';
import type { SetDiaryEntryAction } from '../actions';
import type { DiaryEntryState as _DiaryEntryState } from './diaryEntryList';

export type DiaryEntryState = _DiaryEntryState | null;

// reducer
export default (
  state: DiaryEntryState = null,
  action: SetDiaryEntryAction,
): DiaryEntryState => {
  switch (action.type) {
    case Actions.SET_DIARY_ENTRY:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

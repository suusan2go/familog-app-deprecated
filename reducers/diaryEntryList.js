/* @flow */
import * as Actions from '../actions';
import type {
  GetDiaryEntryListStartAction,
  GetDiaryEntryListSuccessAction,
  GetDiaryEntryListFailureAction,
  UnshiftDiaryEntryListAction,
  PushDiaryEntryListAction,
} from '../actions';

export type DiaryEntryState = {
  id: number,
  title: string,
  body: string,
  emoji: string,
  update_at: string,
  created_at: string,
  user: {
    id: number,
    update_at: string,
    created_at: string,
  },
  diaryEntryImages: ?{
    id: number,
    diaryEntryId: number,
    url: string,
  },
};

export type DiaryEntryListState = {
  diaryEntries: Array<DiaryEntryState>,
  isLoading: boolean,
};

// reducer
export default (
  state: DiaryEntryListState = {
    diaryEntries: [],
    isLoading: true,
  },
  action:
    | GetDiaryEntryListStartAction
    | GetDiaryEntryListSuccessAction
    | GetDiaryEntryListFailureAction
    | UnshiftDiaryEntryListAction
    | PushDiaryEntryListAction,
) => {
  switch (action.type) {
    case Actions.GET_DIARY_ENTRY_LIST_START:
      return Object.assign({}, state, { isLoading: true });
    case Actions.GET_DIARY_ENTRY_LIST_SUCCESS:
      console.log(action);
      return Object.assign({}, state, { isLoading: false });
    case Actions.GET_DIARY_ENTRY_LIST_FAILURE:
      return Object.assign({}, state, { isLoading: false });
    case Actions.UNSHIFT_DIARY_ENTRY_LIST:
      state.diaryEntries.unshift(...action.payload);
      return state;
    case Actions.PUSH_DIARY_ENTRY_LIST:
      state.diaryEntries.push(...action.payload);
      return state;
    default:
      return state;
  }
};

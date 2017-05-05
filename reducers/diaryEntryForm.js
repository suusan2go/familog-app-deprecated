/* @flow */
import * as Actions from '../actions';
import type {
  CreateDiaryEntryStartAction,
  CreateDiaryEntrySuccessAction,
  CreateDiaryEntryFailureAction,
} from '../actions';

export type DiaryEntryFormState = {
  title: string,
  body: string,
  emoji: string,
  image1: ?{
    uri: string,
    name: string,
    type: string,
  },
  image2: ?{
    uri: string,
    name: string,
    type: string,
  },
  image3: ?{
    uri: string,
    name: string,
    type: string,
  },
  isSubmitting: boolean,
};

const initialState = {
  title: '',
  body: '',
  emoji: '',
  image1: null,
  image2: null,
  image3: null,
  isSubmitting: false,
};

// reducer
export default (
  state: DiaryEntryFormState = initialState,
  action:
    | CreateDiaryEntryStartAction
    | CreateDiaryEntrySuccessAction
    | CreateDiaryEntryFailureAction,
) => {
  switch (action.type) {
    case Actions.CREATE_DIARY_ENTRY_START:
      return Object.assign({}, state, { isSubmitting: true });
    case Actions.CREATE_DIARY_ENTRY_SUCCESS:
      return initialState;
    case Actions.CREATE_DIARY_ENTRY_FAILURE:
      return Object.assign({}, state, { isSubmitting: false });
    case Actions.HANDLE_CHANGE_DIARY_ENTRY:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

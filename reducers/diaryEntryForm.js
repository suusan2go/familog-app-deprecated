/* @flow */
import * as Actions from '../actions';
import type {
  CreateDiaryEntryStartAction,
  CreateDiaryEntrySuccessAction,
  CreateDiaryEntryFailureAction,
} from '../actions';

export type DiaryEntryFormState = {
  id: ?number,
  title: string,
  body: string,
  emoji: string,
  image1: ?{
    id: ?number,
    defaultUri: ?string,
    uri: string,
    name: string,
    type: string,
  },
  image2: ?{
    id: ?number,
    defaultUri: ?string,
    uri: string,
    name: string,
    type: string,
  },
  image3: ?{
    id: ?number,
    uri: string,
    defaultUri: ?string,
    name: string,
    type: string,
  },
  isSubmitting: boolean,
};

const initialState = {
  id: null,
  title: '',
  body: '',
  emoji: 'smile',
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

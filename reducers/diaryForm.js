/* @flow */
import * as Actions from '../actions';
import type {
  CreateDiaryStartAction,
  CreateDiarySuccessAction,
  CreateDiaryFailureAction,
} from '../actions';

export type DiaryFormState = { title: string, isSubmitting: boolean };

// reducer
export default (
  state: DiaryFormState = {
    title: '',
    isSubmitting: false,
  },
  action:
    | CreateDiaryStartAction
    | CreateDiarySuccessAction
    | CreateDiaryFailureAction
) => {
  switch (action.type) {
    case Actions.CREATE_DIARY_START:
      return Object.assign({}, state, { isSubmitting: true });
    case Actions.CREATE_DIARY_SUCCESS:
      return Object.assign({}, state, { title: '', isSubmitting: false });
    case Actions.CREATE_DIARY_FAILURE:
      return Object.assign({}, state, { isSubmitting: false });
    case Actions.HANDLE_CHANGE_DIARY:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

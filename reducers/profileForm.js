/* @flow */
import * as Actions from '../actions';
import type {
  UpdateProfileStartAction,
  UpdateProfileSuccessAction,
  UpdateProfileFailureAction,
} from '../actions';

export type ProfileFormState = {
  name: string,
  image: ?{
    uri: string,
    name: string,
    type: string,
  },
};

// reducer
export default (
  state: ProfileFormState = {
    name: '',
    image: null,
  },
  action:
    | UpdateProfileStartAction
    | UpdateProfileSuccessAction
    | UpdateProfileFailureAction,
) => {
  switch (action.type) {
    case Actions.UPDATE_PROFILE_START:
      return Object.assign({}, state, { isSubmitting: true });
    case Actions.UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, { title: '', isSubmitting: false });
    case Actions.UPDATE_PROFILE_FAILURE:
      return Object.assign({}, state, { isSubmitting: false });
    case Actions.HANDLE_CHANGE_PROFILE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

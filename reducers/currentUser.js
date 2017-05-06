/* @flow */
import * as Actions from '../actions';

export type CurrentUserState = ?{
  id: number,
};

// reducer
export default (
  state: CurrentUserState = null,
  action: Actions.SetCurrentUserAction,
) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return Object.assign({}, state, { id: action.payload });
    default:
      return state;
  }
};

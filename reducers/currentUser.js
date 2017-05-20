/* @flow */
import * as Actions from '../actions';

export type CurrentUserState = ?{
  id: number,
  name: ?string,
  imageUrl: ?{
    uri: string,
  },
};

// reducer
export default (
  state: CurrentUserState = null,
  action: Actions.SetCurrentUserAction,
) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

/* @flow */
import * as Actions from '../actions';

export type SessionTokenState = string | null;

// reducer
export default (
  state: SessionTokenState = null,
  action: Actions.SetSessionTokenAction,
) => {
  switch (action.type) {
    case Actions.SET_SESSION_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

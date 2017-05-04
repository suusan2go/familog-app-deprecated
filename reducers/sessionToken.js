import * as Actions from '../actions';

// reducer
export default (
  state: string = null,
  action: Actions.SetSessionTokenAction
) => {
  switch (action.type) {
    case Actions.SET_SESSION_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

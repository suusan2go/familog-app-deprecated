/* @flow */
import * as Actions from '../actions';
import type { InitialLoadingCompleteAction } from '../actions';

export type AppState = {
  isInitialLoading: boolean,
};

// reducer
export default (
  state: AppState = { isInitialLoading: true },
  action: InitialLoadingCompleteAction,
) => {
  switch (action.type) {
    case Actions.INITIAL_LOADING_COMPLETE:
      return Object.assign({}, state, { isInitialLoading: false });
    default:
      return state;
  }
};

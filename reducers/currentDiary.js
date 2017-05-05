/* @flow */
import * as Actions from '../actions';
import type { SetCurrentDiaryAction } from '../actions';

export type CurrentDiaryState =
  | {
      id: number,
      title: string,
    }
  | null;

// reducer
export default (
  state: CurrentDiaryState = null,
  action: SetCurrentDiaryAction
) => {
  switch (action.type) {
    case Actions.SET_CURRENT_DIARY:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

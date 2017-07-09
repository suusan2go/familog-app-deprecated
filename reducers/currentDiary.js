/* @flow */
import * as Actions from '../actions';
import type {
  SetCurrentDiaryAction,
  SetDiaryInvitationAction,
} from '../actions';

export type CurrentDiaryState = {
  id: number,
  title: string,
  invitationCode?: string,
} | null;

// reducer
export default (
  state: CurrentDiaryState = null,
  action: SetCurrentDiaryAction | SetDiaryInvitationAction,
) => {
  switch (action.type) {
    case Actions.SET_CURRENT_DIARY:
      return Object.assign({}, state, action.payload);
    case Actions.SET_DIARY_INVITATION:
      return Object.assign({}, state, { invitationCode: action.payload });
    default:
      return state;
  }
};

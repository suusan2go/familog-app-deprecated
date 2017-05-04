import * as Actions from '../actions';

// reducer
export default (
  state: { id: number, title: string } = null,
  action: Actions.createDiarySuccess
) => {
  switch (action.type) {
    case Actions.SET_CURRENT_DIARY:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

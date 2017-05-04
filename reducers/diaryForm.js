import * as Actions from '../actions';

// reducer
export default (
  state: { title: string, isSubmitting: boolean } = {
    title: '',
    isSubmitting: false,
  },
  action: Actions.createDiaryStart | Actions.createDiarySuccess
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

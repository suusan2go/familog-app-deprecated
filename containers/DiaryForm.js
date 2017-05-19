/* @flow */
import { connect } from 'react-redux';
import DiaryForm from '../components/DiaryForm.js';
import ApiClient from '../api';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';

export default connect(
  (state: ReduxState) => ({
    diaryForm: state.diaryForm,
  }),
  (dispatch: Dispatch) => ({
    actions: {
      createDiary: async () => {
        const Api = new ApiClient(store.getState().sessionToken);
        const diaryForm = store.getState().diaryForm;
        dispatch(Actions.createDiaryStart());
        try {
          const diary = await Api.createDiary(diaryForm);
          dispatch(Actions.createDiarySuccess());
          dispatch(Actions.setCurrentDiary(diary));
        } catch (error) {
          dispatch(Actions.createDiaryFailure());
        }
      },
      handleChangeTitle: title => {
        dispatch(Actions.handleChangeDiary({ title }));
      },
    },
  }),
)(DiaryForm);

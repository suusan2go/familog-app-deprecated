/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryForm from '../components/DiaryForm.js';
import ApiClient from '../api';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';

type navigationProps = {
  navigation: {
    navigate: string => void,
  },
};

export default connect(
  (state: ReduxState) => ({
    diaryForm: state.diaryForm,
  }),
  (dispatch: Dispatch, ownProps: navigationProps) => ({
    actions: {
      createDiary: async () => {
        const Api = new ApiClient(store.getState().sessionToken);
        const diaryForm = store.getState().diaryForm;
        dispatch(Actions.createDiaryStart());
        try {
          const diary = await Api.createDiary(diaryForm);
          dispatch(Actions.createDiarySuccess());
          dispatch(Actions.setCurrentDiary(diary));
          ownProps.navigation.navigate('DiaryEntryList');
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

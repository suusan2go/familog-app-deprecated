import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryForm from '../components/DiaryForm.js';
import ApiClient from '../api';
import * as Actions from '../actions';

export default connect(
  (store: ReduxState) => ({
    diaryForm: store.diaryForm,
  }),
  (dispatch: Dispatch<ReduxAction>, store: ReduxState) => ({
    actions: {
      createDiary: async () => {
        const Api = new ApiClient(store.sessionToken);
        dispatch(Actions.createDiaryStart());
        try {
          const diary = await Api.createDiary(store.diaryForm);
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
  })
)(DiaryForm);

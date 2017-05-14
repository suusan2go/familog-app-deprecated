/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryInvitationForm from '../components/DiaryInvitationForm.js';
import ApiClient from '../api';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';

type ownProps = {
  onSubmiSuccess: () => void,
};

export default connect(
  (state: ReduxState) => ({
    diaryForm: state.diaryForm,
  }),
  (dispatch: Dispatch, ownProps: ownProps) => ({
    actions: {
      verifyInvitationCode: async (invitationCode: string) => {
        const Api = new ApiClient(store.getState().sessionToken);
        try {
          const diary = await Api.verifyDiaryInvitation(invitationCode);
          dispatch(Actions.setCurrentDiary(diary));
        } catch (error) {
          // TODO: error handling
          console.log(error);
        }
      },
    },
  }),
)(DiaryInvitationForm);

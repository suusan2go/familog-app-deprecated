/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryInvitation from '../components/DiaryInvitation.js';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';
import ApiClient from '../api';

export type DiaryInvitationActions = {
  getDiaryInvitation: (id: number) => Promise<any>,
};

export default connect(
  (store: ReduxState) => ({
    invitationCode:
      store.currentDiary !== null ? store.currentDiary.invitationCode : null,
  }),
  (dispatch: Dispatch): { actions: DiaryInvitationActions } => ({
    actions: {
      getDiaryInvitation: async (diaryEntryId: number) => {
        const { sessionToken, currentDiary } = store.getState();
        if (currentDiary === null) return;
        const Api = new ApiClient(sessionToken);
        const diaryInivitation = await Api.getDiaryInvitation(currentDiary.id);
        dispatch(Actions.setDiaryInvitation(diaryInivitation.invitationCode));
      },
    },
  }),
)(DiaryInvitation);

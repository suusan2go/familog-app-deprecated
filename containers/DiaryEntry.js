/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryEntry from '../components/DiaryEntry.js';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';
import ApiClient from '../api';

export type DiaryEntryActions = {
  getDiaryEntry: (id: number) => Promise<any>,
};

export default connect(
  (store: ReduxState) => ({
    diaryEntry: store.diaryEntry,
  }),
  (dispatch: Dispatch): { actions: DiaryEntryActions } => ({
    actions: {
      getDiaryEntry: async (diaryEntryId: number) => {
        const { sessionToken, currentUser } = store.getState();
        const Api = new ApiClient(sessionToken);
        const diaryEntry = await Api.getDiaryEntry(diaryEntryId);
        dispatch(Actions.setDiaryEntry(diaryEntry));
      },
    },
  }),
)(DiaryEntry);

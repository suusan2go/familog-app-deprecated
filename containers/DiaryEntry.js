/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryEntryList from '../components/DiaryEntry.js';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';
import ApiClient from '../api';

export type DiaryEntryActions = {
  getDiaryEntry: (id: number) => Promise<any>,
};

export default connect(
  (store: ReduxState) => ({
    diaryEntryList: store.diaryEntryList,
    currentDiary: store.currentDiary,
  }),
  (dispatch: Dispatch): { actions: DiaryEntryActions } => ({
    actions: {
      getDiaryEntry: async () => {
        dispatch(Actions.getDiaryEntryListStart());
        const { currentDiary, sessionToken, diaryEntryList } = store.getState();
        const Api = new ApiClient(store.getState().sessionToken);
        const newDiaryEntryList = await Api.getMoreNewerDiaryEntries(
          currentDiary.id,
          diaryEntryList.diaryEntries[0].id,
        );
        dispatch(Actions.unshiftDiaryEntryList(newDiaryEntryList.diaryEntries));
        dispatch(Actions.getDiaryEntryListSuccess());
      },
    },
  }),
)(DiaryEntryList);

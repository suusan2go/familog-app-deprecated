/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryEntryList from '../components/DiaryEntryList.js';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';
import ApiClient from '../api';

export type DiaryEntryListActions = {
  loadMoreNewerDiaryEntries: () => Promise<any>,
  loadMoreOlderDiaryEntries: () => Promise<any>,
};

export default connect(
  (store: ReduxState) => ({
    diaryEntryList: store.diaryEntryList,
    currentDiary: store.currentDiary,
  }),
  (dispatch: Dispatch): { actions: DiaryEntryListActions } => ({
    actions: {
      loadMoreNewerDiaryEntries: async () => {
        dispatch(Actions.getDiaryEntryListStart());
        const { currentDiary, sessionToken, diaryEntryList } = store.getState();
        if (currentDiary === null) return;
        const Api = new ApiClient(store.getState().sessionToken);
        try {
          const newDiaryEntryList = await Api.getMoreNewerDiaryEntries(
            currentDiary.id,
            diaryEntryList.diaryEntries[0].id,
          );
          dispatch(
            Actions.unshiftDiaryEntryList(newDiaryEntryList.diaryEntries),
          );
          dispatch(Actions.getDiaryEntryListSuccess());
        } catch (error) {
          dispatch(Actions.getDiaryEntryListFailure());
        }
      },
      loadMoreOlderDiaryEntries: async () => {
        dispatch(Actions.getDiaryEntryListStart());
        const { currentDiary, sessionToken, diaryEntryList } = store.getState();
        if (currentDiary === null) return;
        const Api = new ApiClient(store.getState().sessionToken);
        try {
          const newDiaryEntryList = await Api.getMoreOlderDiaryEntries(
            currentDiary.id,
            diaryEntryList.diaryEntries[diaryEntryList.diaryEntries.length - 1]
              .id,
          );
          dispatch(Actions.pushDiaryEntryList(newDiaryEntryList.diaryEntries));
          dispatch(Actions.getDiaryEntryListSuccess());
        } catch (error) {
          dispatch(Actions.getDiaryEntryListFailure());
        }
      },
    },
  }),
)(DiaryEntryList);

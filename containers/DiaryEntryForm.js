/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryEntryForm from '../components/DiaryEntryForm.js';
import ApiClient from '../api';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';

type navigationProps = {
  navigation: {
    navigate: (screenName: string) => void,
    goBack: () => void,
  },
};

export type DiaryEntryFormActions = {
  createDiaryEntry: () => Promise<any>,
  handleChangeTitle: (title: string) => void,
  handleChangeBody: (body: string) => void,
  handleChangeEmoji: (emoji: string) => void,
  handleChangeImage1: (image1: {
    uri: string,
    name: string,
    type: string,
  }) => void,
  handleChangeImage2: (image2: {
    uri: string,
    name: string,
    type: string,
  }) => void,
  handleChangeImage3: (image3: {
    uri: string,
    name: string,
    type: string,
  }) => void,
};

export default connect(
  (state: ReduxState) => ({
    diaryEntryForm: state.diaryEntryForm,
  }),
  (
    dispatch: Dispatch,
    ownProps: navigationProps,
  ): { actions: DiaryEntryFormActions } => ({
    actions: {
      createDiaryEntry: async () => {
        const Api = new ApiClient(store.getState().sessionToken);
        const diaryEntryForm = store.getState().diaryEntryForm;
        const currentDiary = store.getState().currentDiary;
        const currentDiaryEntryList = store.getState().diaryEntryList;
        if (currentDiary === null) return;
        dispatch(Actions.createDiaryEntryStart());
        try {
          const diaryEntry = await Api.createDiaryEntry(
            diaryEntryForm,
            currentDiary.id,
          );
          dispatch(Actions.createDiaryEntrySuccess());
          ownProps.navigation.goBack();
          const diaryEntryList = await Api.getMoreNewerDiaryEntries(
            currentDiary.id,
            currentDiaryEntryList.diaryEntries.length > 0
              ? currentDiaryEntryList.diaryEntries[0].id
              : 0,
          );
          // load first diary entry
          dispatch(Actions.unshiftDiaryEntryList(diaryEntryList.diaryEntries));
          dispatch(Actions.getDiaryEntryListSuccess());
        } catch (error) {
          dispatch(Actions.createDiaryEntryFailure());
        }
      },
      handleChangeTitle: title => {
        dispatch(Actions.handleChangeDiaryEntry({ title }));
      },
      handleChangeBody: body => {
        dispatch(Actions.handleChangeDiaryEntry({ body }));
      },
      handleChangeEmoji: emoji => {
        dispatch(Actions.handleChangeDiaryEntry({ emoji }));
      },
      handleChangeImage1: image1 => {
        dispatch(Actions.handleChangeDiaryEntry({ image1 }));
      },
      handleChangeImage2: image2 => {
        dispatch(Actions.handleChangeDiaryEntry({ image2 }));
      },
      handleChangeImage3: image3 => {
        dispatch(Actions.handleChangeDiaryEntry({ image3 }));
      },
    },
  }),
)(DiaryEntryForm);

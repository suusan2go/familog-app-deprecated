/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import DiaryEntryList from '../components/DiaryEntryList.js';
import * as Actions from '../actions';
import type { ReduxState } from '../reducers';

const DEVICE_TOKEN_KEY = '@DeviceToken:key';

export default connect(
  (store: ReduxState) => ({
    diaryEntryList: store.diaryEntryList,
    currentDiary: store.currentDiary,
  }),
  (dispatch: Dispatch) => ({
    actions: {},
  }),
)(DiaryEntryList);

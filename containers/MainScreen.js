/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import MainScreen from '../components/MainScreen.js';
import ApiClient from '../api';
import * as Actions from '../actions';
import type { ReduxState } from '../reducers';

const DEVICE_TOKEN_KEY = '@DeviceToken:key';

export default connect(
  (store: ReduxState) => ({ deviceToken: store.deviceToken }),
  (dispatch: Dispatch) => ({
    actions: {
      setupApp: async () => {
        const Api = new ApiClient();
        // set device token
        let deviceToken = await AsyncStorage.getItem(DEVICE_TOKEN_KEY);
        if (deviceToken === null) {
          deviceToken = await Api.registerDeviceToken();
        }
        dispatch(Actions.setDeviceToken(deviceToken));
        await AsyncStorage.setItem(DEVICE_TOKEN_KEY, deviceToken);
        // set Session Token
        const sessionToken = await Api.createSessionToken(deviceToken);
        dispatch(Actions.setSessionToken(sessionToken));

        // set currentDiary if exists
        Api.sessionToken = sessionToken;
        const diaryList: {
          diaries: Array<{ id: number, title: string }>,
        } = await Api.getDiaries();
        // TODO: display DiarySelectionForm
        //       current just set first diary
        if (diaryList.diaries.length > 0) {
          dispatch(Actions.setCurrentDiary(diaryList.diaries[0]));
        }
      },
    },
  })
)(MainScreen);

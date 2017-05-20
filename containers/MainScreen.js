/* @flow */
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';
import MainScreen from '../components/MainScreen.js';
import ApiClient from '../api';
import * as Actions from '../actions';
import type { ReduxState } from '../reducers';

const DEVICE_TOKEN_KEY = '@DeviceToken:key';

export default connect(
  (store: ReduxState) => ({
    showInvitation: store.currentDiary !== null,
  }),
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
        dispatch(Actions.setSessionToken(sessionToken.token));
        dispatch(Actions.setCurrentUser({ id: sessionToken.userId }));

        // set currentDiary if exists
        Api.sessionToken = sessionToken.token;
        const diaryList: {
          diaries: Array<{ id: number, title: string }>,
        } = await Api.getDiaries();
        // TODO: display DiarySelectionForm
        //       current just set first diary
        if (diaryList.diaries.length > 0) {
          // setCurrentDiary
          dispatch(Actions.setCurrentDiary(diaryList.diaries[0]));
          dispatch(Actions.getDiaryEntryListStart());
          const diaryEntryList = await Api.getDiaryEntries(
            diaryList.diaries[0].id,
          );
          // load first diary entry
          dispatch(Actions.pushDiaryEntryList(diaryEntryList.diaryEntries));
          dispatch(Actions.getDiaryEntryListSuccess());
        }

        // set push notifications
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        let { status } = await Permissions.askAsync(
          Permissions.REMOTE_NOTIFICATIONS,
        );

        // Stop here if the user did not grant permissions
        if (status !== 'granted') {
          return;
        }

        // Get the token that uniquely identifies this device
        let pushNotificationToken = await Notifications.getExponentPushTokenAsync();
        // Register PushNotificationToken to our server.
        Api.registerPushNotificationToken(deviceToken, pushNotificationToken);
        Notifications.setBadgeNumberAsync(0);
      },
    },
  }),
)(MainScreen);

import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import MainScreen from '../components/MainScreen.js';
import ApiClient from '../api';
import * as Actions from '../actions';

const DEVICE_TOKEN_KEY = '@DeviceToken:key';

export default connect(
  (store: ReduxState) => ({ deviceToken: store.deviceToken }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: {
      setUpDeviceTokenAndSessionToken: async () => {
        const Api = new ApiClient();
        let deviceToken = await AsyncStorage.getItem(DEVICE_TOKEN_KEY);
        if (deviceToken === null) {
          deviceToken = await Api.registerDeviceToken();
        }
        dispatch(Actions.setDeviceToken(deviceToken));
        await AsyncStorage.setItem(DEVICE_TOKEN_KEY, deviceToken);
        const sessionToken = await Api.createSessionToken(deviceToken);
        dispatch(Actions.setSessionToken(sessionToken));
      },
    },
  })
)(MainScreen);

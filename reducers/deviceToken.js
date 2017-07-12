/* @flow */
import * as Actions from '../actions';

export type DeviceTokenState = string | null;

// reducer
export default (
  state: DeviceTokenState = null,
  action: Actions.SetDeviceTokenAction,
) => {
  switch (action.type) {
    case Actions.SET_DEVICE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

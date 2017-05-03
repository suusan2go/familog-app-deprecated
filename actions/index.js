/* @flow */
export const SET_DEVICE_TOKEN = 'SET_DEVICE_TOKEN'
export const SET_SESSION_TOKEN = 'SET_SESSION_TOKEN'

export type SetDeviceTokenAction = {
  type: typeof SET_DEVICE_TOKEN,
  payload: string
}

export type SetSEssionTokenAction = {
  type: typeof SET_SESSION_TOKEN,
  payload: string
}

export const setDeviceToken = (deviceToken: string): SetDeviceTokenAction => ({
  type: SET_DEVICE_TOKEN,
  payload: deviceToken,
})


export type SetSessionTokenAction = {
  type: typeof SET_SESSION_TOKEN
}
export const setSessionToken = (sessionToken: string): SetSessionTokenAction => ({
  type: SET_DEVICE_TOKEN,
  payload: sessionToken,
})

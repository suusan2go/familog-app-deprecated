import * as Actions from '../actions'

// reducer
export default (state: string = null, action: Actions.SetDeviceTokenAction) => {
  switch(action.type) {
     case Actions.SET_DEVICE_TOKEN:
       return action.payload
     default:
       return state
  }
}

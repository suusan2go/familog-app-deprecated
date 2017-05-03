import { combineReducers } from 'redux'
import deviceToken from './deviceToken'
import sessionToken from './sessionToken'

const reducers = combineReducers({
  deviceToken,
  sessionToken,
})

export default reducers

import { combineReducers } from 'redux';
import deviceToken from './deviceToken';
import sessionToken from './sessionToken';
import currentDiary from './currentDiary';

const reducers = combineReducers({
  deviceToken,
  sessionToken,
  currentDiary,
});

export default reducers;

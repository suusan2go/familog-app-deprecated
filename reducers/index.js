import { combineReducers } from 'redux';
import deviceToken from './deviceToken';
import sessionToken from './sessionToken';
import currentDiary from './currentDiary';
import diaryForm from './diaryForm';

const reducers = combineReducers({
  deviceToken,
  sessionToken,
  currentDiary,
  diaryForm,
});

export default reducers;

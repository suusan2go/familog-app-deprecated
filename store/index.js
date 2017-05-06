/* @flow */
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import type { ReduxState } from '../reducers';

const store: Store<ReduxState> = createStore(
  reducer,
  applyMiddleware(createLogger()),
);
export default store;

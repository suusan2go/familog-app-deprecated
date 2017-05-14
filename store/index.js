/* @flow */
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import type { ActionTypes } from '../actions';
import type { ReduxState } from '../reducers';
import type { Store } from 'redux';

const store: Store<ReduxState, ActionTypes> = createStore(
  reducer,
  applyMiddleware(createLogger()),
);
export default store;

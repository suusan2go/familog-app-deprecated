/* @flow */
import React from 'react';
import { StyleSheet, Text, TabBarIOS, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers'
import HomeScreen from './screens/HomeScreen.js'
import MainScreen from './screens/MainScreen.js'

const store = createStore(
  reducer,
  // applyMiddleware(createLogger())
);

export default () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
)

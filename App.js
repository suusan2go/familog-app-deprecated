/* @flow */
import React from 'react';
import { StyleSheet, Text, TabBarIOS, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers';
import MainScreen from './containers/MainScreen.js';

const store = createStore(reducer, applyMiddleware(createLogger()));

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;

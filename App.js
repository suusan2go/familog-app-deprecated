/* @flow */
import React from 'react';
import { StyleSheet, Text, TabBarIOS, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import MainScreen from './containers/MainScreen.js';
import store from './store';

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;

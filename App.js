/* @flow */
import React from 'react';
import { StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import MainScreen from './containers/MainScreen.js';
import store from './store';
import AppConfig from './config.json';
import { Client, Configuration } from 'bugsnag-react-native';

if (!__DEV__) {
  const configuration = new Configuration();
  configuration.apiKey = AppConfig.bugsnapKey;
  const client = new Client(configuration);
}

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;

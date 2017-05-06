import React from 'react';
import { Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DiaryEntry from './DiaryEntry.js';
import DiaryForm from '../containers/DiaryForm.js';
import DiaryEntryForm from '../containers/DiaryEntryForm.js';
import HomeScreen from './HomeScreen.js';

const MainScreen = StackNavigator({
  Home: { screen: HomeScreen },
  DiaryForm: {
    screen: DiaryForm,
  },
  DiaryEntry: {
    screen: DiaryEntry,
  },
  DiaryEntryForm: {
    screen: DiaryEntryForm,
  },
});

export default class MainScreenApp extends React.Component {
  props: {
    deviceToken: string,
    actions: {
      setupApp: Action,
    },
  };

  componentWillMount() {
    this.props.actions.setupApp();
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          console.log('Initial url is: ' + url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  }

  render() {
    return <MainScreen />;
  }
}

import React from 'react';
import { StackNavigator } from 'react-navigation';
import Diary from './Diary.js';
import DiaryEntryForm from './DiaryEntryForm.js';
import HomeScreen from './HomeScreen.js';

const MainScreen = StackNavigator({
  Home: { screen: HomeScreen },
  DiaryEntryList: {
    screen: Diary,
  },
  DiaryEntryForm: {
    screen: DiaryEntryForm,
  },
});

export default class MainScreenApp extends React.Component {
  props: {
    deviceToken: string,
    actions: {
      setUpDeviceTokenAndSessionToken: Action,
    },
  };

  componentWillMount() {
    this.props.actions.setUpDeviceTokenAndSessionToken();
  }

  render() {
    return <MainScreen />;
  }
}

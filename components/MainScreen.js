import React from 'react';
import { StackNavigator } from 'react-navigation';
import Diary from './Diary.js';
import DiaryForm from '../containers/DiaryForm.js';
import DiaryEntryForm from './DiaryEntryForm.js';
import HomeScreen from './HomeScreen.js';

const MainScreen = StackNavigator({
  Home: { screen: HomeScreen },
  DiaryForm: {
    screen: DiaryForm,
  },
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
      setupApp: Action,
    },
  };

  componentWillMount() {
    this.props.actions.setupApp();
  }

  render() {
    return <MainScreen />;
  }
}

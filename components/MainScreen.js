import React from 'react';
import { Linking, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DiaryEntry from '../containers/DiaryEntry.js';
import DiaryEntryForm from '../containers/DiaryEntryForm.js';
import HomeScreen from './HomeScreen.js';

const MainScreen = StackNavigator({
  Home: { screen: HomeScreen },
  DiaryEntry: {
    screen: DiaryEntry,
  },
  DiaryEntryForm: {
    screen: DiaryEntryForm,
  },
});

export default class MainScreenApp extends React.Component {
  props: {
    showInvitation: boolean,
    actions: {
      setupApp: Action,
    },
  };

  componentWillMount() {
    this.props.actions.setupApp();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <MainScreen
          screenProps={{ showInvitation: this.props.showInvitation }}
        />
      </View>
    );
  }
}

import React from 'react';
import { Linking, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DiaryEntry from '../containers/DiaryEntry.js';
import DiaryEntryForm from '../containers/DiaryEntryForm.js';
import HomeScreen from './HomeScreen.js';
import ProfileForm from '../containers/ProfileForm.js';
import type { DiaryEntryState } from '../reducers/diaryEntry';

const MainScreen = StackNavigator({
  Home: { screen: HomeScreen },
  DiaryEntry: {
    screen: DiaryEntry,
  },
  DiaryEntryForm: {
    screen: DiaryEntryForm,
  },
  ProfileForm: {
    screen: ProfileForm,
  },
});

export default class MainScreenApp extends React.Component {
  props: {
    showInvitation: boolean,
    isDiaryEntryEditable: boolean,
    diaryEntry: DiaryEntryState,
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
          screenProps={{
            showInvitation: this.props.showInvitation,
            isDiaryEntryEditable: this.props.isDiaryEntryEditable,
            diaryEntry: this.props.diaryEntry,
          }}
        />
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Text, ListView, View } from 'react-native';
import type { DiaryEntryPathParams } from './DiaryEntryListItem';

export default class DiaryEntry extends Component {
  props: {
    navigation: {
      navigate: func,
      state: {
        params: DiaryEntryPathParams,
      },
    },
    currentDiary: CurrentDiaryState,
    diaryEntryList: DiaryEntryListState,
    actions: DiaryEntryListActions,
  };

  static navigationOptions = {
    headerTitle: (
      <Text
        style={{ color: 'mediumseagreen', fontWeight: 'bold', fontSize: 18 }}
      >
        日記
      </Text>
    ),
    headerStyle: {
      marginBottom: 0,
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderBottomColor: 'limegreen',
      borderBottomWidth: 0.5,
    },
  };

  componentWillMount() {
    const id = this.props.navigation.state.params.id;
    this.props.actions.getDiaryEntryItem(id);
  }

  render() {
    const name = this.props.navigation.state.params.id;
    return (
      <View>
        <Text>{name}</Text>
      </View>
    );
  }
}

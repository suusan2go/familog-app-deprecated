/* @flow */
import React from 'react';
import { Text } from 'react-native';
import headerStyle from './headerStyle.js';
import type { DiaryEntryState } from '../reducers/diaryEntry';

export default class DiaryEntryHeaderRight extends React.Component {
  props: {
    navigation: {
      navigate: (screenName: string, options: Object) => void,
    },
    isDiaryEntryEditable: boolean,
    diaryEntry: DiaryEntryState,
  };

  render() {
    const { navigate } = this.props.navigation;
    return this.props.isDiaryEntryEditable
      ? <Text
          style={headerStyle.right}
          activeOpacity={0.7}
          onPress={() =>
            navigate('DiaryEntryForm', {
              id: this.props.diaryEntry && this.props.diaryEntry.id,
            })}
        >
          編集
        </Text>
      : null;
  }
}

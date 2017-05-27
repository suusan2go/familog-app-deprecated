/* @flow */
import React from 'react';
import { Text } from 'react-native';
import headerStyle from './headerStyle.js';

export default class DiaryEntryHeaderRight extends React.Component {
  props: {
    navigation: {
      navigate: (screenName: string) => void,
    },
    isDiaryEntryEditable: boolean,
  };

  render() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    return this.props.isDiaryEntryEditable
      ? <Text
          style={headerStyle.right}
          activeOpacity={0.7}
          onPress={() => navigate('DiaryEntryForm')}
        >
          編集
        </Text>
      : null;
  }
}

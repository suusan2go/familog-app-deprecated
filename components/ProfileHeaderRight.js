/* @flow */
import React from 'react';
import { Text } from 'react-native';
import headerStyle from './headerStyle.js';

export default class ProfileHeaderRight extends React.Component {
  props: {
    navigation: {
      navigate: (screenName: string) => void,
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text
        style={headerStyle.right}
        activeOpacity={0.7}
        onPress={() => navigate('ProfileForm')}
      >
        編集
      </Text>
    );
  }
}

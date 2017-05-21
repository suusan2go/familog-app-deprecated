/* @flow */
import React from 'react';
import {
  Button,
  Clipboard,
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class DiaryInvitation extends React.Component {
  props: {
    invitationCode: string,
    actions: {
      getDiaryInvitation: () => void,
    },
  };

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.actions.getDiaryInvitation();
  }

  handleCopyPress() {
    Clipboard.setString(this.props.invitationCode);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>この日記に家族を招待する</Text>
        <Text style={styles.description}>この招待コードを招待したい人にコピーして送ってね！</Text>
        <TouchableHighlight
          onPress={this.handleCopyPress.bind(this)}
          underlayColor="lightgrey"
          activeOpacity={0.8}
        >
          <View style={styles.copyArea}>
            <Text style={styles.codeWrapper}>{this.props.invitationCode}</Text>
            <Text style={styles.copy}>招待コードをコピーする</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  codeWrapper: {
    borderColor: 'mediumseagreen',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    fontSize: 24,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  wrapper: {
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  copyArea: {
    padding: 10,
  },
  copy: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

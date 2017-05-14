/* @flow */
import React from 'react';
import { Button, Text, View } from 'react-native';
import { StyleSheet, Platform } from 'react-native';
import headerStyle from './headerStyle.js';
import Modal from 'react-native-modal';

export default class DiaryInvitation extends React.Component {
  state: {
    isVisible: boolean,
  };

  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  render() {
    console.log(this.state.isVisible);
    return (
      <View>
        <Text
          style={headerStyle.right}
          onPress={() => this.setState({ isVisible: true })}
        >
          招待
        </Text>
        <Modal isVisible={this.state.isVisible}>
          <View style={styles.modalContent}>
            <Text style={styles.text}>Modal centered</Text>
            <Button
              onPress={() =>
                this.setState({ isVisible: !this.state.isVisible })}
              style={styles.btn}
              title="hoge"
            />
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

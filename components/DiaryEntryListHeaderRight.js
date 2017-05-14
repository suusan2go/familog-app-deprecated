/* @flow */
import React from 'react';
import { Button, Text, View } from 'react-native';
import { StyleSheet, Platform } from 'react-native';
import headerStyle from './headerStyle.js';
import Modal from 'react-native-modal';
import DiaryInvitation from './DiaryInvitation';

export default class DiaryEntryListHeaderRight extends React.Component {
  state: {
    isVisible: boolean,
  };

  props: {
    isVisible: boolean,
  };

  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  render() {
    return this.props.isVisible
      ? <View>
          <Text
            style={headerStyle.right}
            onPress={() => this.setState({ isVisible: true })}
          >
            招待
          </Text>
          <Modal isVisible={this.state.isVisible}>
            <View style={styles.modalContent}>
              <DiaryInvitation wrapperStyle={styles.modalContent} />
              <Button
                title="閉じる"
                onPress={() => {
                  this.setState({ isVisible: false });
                }}
              />
            </View>
          </Modal>
        </View>
      : null;
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

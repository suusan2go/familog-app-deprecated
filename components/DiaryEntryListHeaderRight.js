/* @flow */
import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import { StyleSheet, Platform } from 'react-native';
import headerStyle from './headerStyle.js';
import Modal from 'react-native-modal';
import DiaryInvitation from '../containers/DiaryInvitation';

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
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({ isVisible: false });
            }}
          >
            <Modal isVisible={this.state.isVisible}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.modalContent}>
                  <DiaryInvitation />
                  <View>
                    <Button
                      title="閉じる"
                      onPress={() => {
                        this.setState({ isVisible: false });
                      }}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </TouchableWithoutFeedback>
        </View>
      : null;
  }
}
const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

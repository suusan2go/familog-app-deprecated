/* @flow */
import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import DiaryForm from '../containers/DiaryForm';
import DiaryInvitationForm from '../containers/DiaryInvitationForm';

export default class DiaryEntryListEmpty extends React.Component {
  state: {
    openModalType: ?string,
  };

  constructor() {
    super();
    this.state = {
      openModalType: null,
    };
  }

  handleOpenDiaryForm() {
    this.setState({
      openModalType: 'DiaryForm',
    });
  }

  handleOpenDiaryInvitationForm() {
    this.setState({
      openModalType: 'DiaryInvitationForm',
    });
  }

  closeModal() {
    this.setState({
      openModalType: null,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          large
          iconLeft
          backgroundColor="mediumseagreen"
          icon={{
            name: 'book-open-page-variant',
            type: 'material-community',
          }}
          onPress={this.handleOpenDiaryForm.bind(this)}
          title="日記を始める"
          buttonStyle={styles.buttonStyle}
        />
        <Button
          large
          iconLeft
          backgroundColor="mediumseagreen"
          icon={{
            name: 'input',
          }}
          onPress={this.handleOpenDiaryInvitationForm.bind(this)}
          title="招待コードを入力"
          buttonStyle={styles.buttonStyle}
        />

        <TouchableWithoutFeedback onPress={this.closeModal.bind(this)}>
          <Modal isVisible={this.state.openModalType === 'DiaryForm'}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContent}>
                <DiaryForm />
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.closeModal.bind(this)}>
          <Modal isVisible={this.state.openModalType === 'DiaryInvitationForm'}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContent}>
                <DiaryInvitationForm />
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    marginVertical: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
};

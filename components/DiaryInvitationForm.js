/* @flow */
import React from 'react';
import {
  Text,
  TextInput,
  ListView,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Field from './Field.js';
import FieldContainer from './FieldContainer.js';
import headerStyle from './headerStyle.js';

export default class DiaryInvitationForm extends React.Component {
  props: {
    diaryInvitationForm: {
      invitationCode: string,
      isSubmitting: boolean,
    },
    actions: {
      verifyInvitationCode: () => void,
      handleChangeInvitationCode: (value: string) => void,
    },
  };

  handleSubmit(): void {
    this.props.actions.verifyInvitationCode();
  }

  isDisabled(): boolean {
    return (
      this.props.diaryInvitationForm.isSubmitting ||
      this.props.diaryInvitationForm.invitationCode.length === 0
    );
  }

  render() {
    return (
      <View>
        <Field
          label="招待コード"
          fieldValue={this.props.diaryInvitationForm.invitationCode}
          onChange={this.props.actions.handleChangeInvitationCode}
        />
        <View style={{ paddingVertical: 40 }}>
          <Button
            title="日記に参加する"
            backgroundColor="mediumseagreen"
            disabled={this.isDisabled()}
            onPress={this.handleSubmit.bind(this)}
          />
        </View>
      </View>
    );
  }
}

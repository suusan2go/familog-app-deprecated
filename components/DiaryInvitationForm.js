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
    actions: {
      verifyInvitationCode: (invitationCode?: string) => void,
    },
  };

  state: {
    invitationCode: string,
  };

  constructor() {
    super();
    this.state = {
      invitationCode: '',
    };
  }

  handleSubmit(): void {
    this.props.actions.verifyInvitationCode();
  }

  handleChangeInvitationCode(value: string) {
    this.setState({
      invitationCode: value,
    });
  }

  isDisabled(): boolean {
    return this.state.invitationCode.length === 0;
  }

  render() {
    return (
      <View>
        <Field
          label="招待コード"
          fieldValue={this.state.invitationCode}
          onChange={this.handleChangeInvitationCode.bind(this)}
        />
        <View style={{ paddingVertical: 40 }}>
          <Button
            title="日記に参加する"
            backgroundColor="mediumseagreen"
            disabled={this.isDisabled()}
            onPress={() =>
              this.props.actions.verifyInvitationCode(
                this.state.invitationCode,
              )}
          />
        </View>
      </View>
    );
  }
}

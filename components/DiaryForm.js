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

export default class DiaryForm extends React.Component {
  props: {
    diaryForm: {
      title: string,
      isSubmitting: boolean,
    },
    actions: {
      createDiary: () => void,
      handleChangeTitle: (value: string) => void,
    },
  };

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={headerStyle.title}>日記を書く</Text>,
    headerStyle: headerStyle.container,
    headerLeft: (
      <Icon
        name="times"
        type="font-awesome"
        containerStyle={{ padding: 10 }}
        onPress={() => navigation.goBack()}
      />
    ),
  });

  render() {
    return (
      <View>
        <Field
          label="日記帳のタイトル"
          fieldValue={this.props.diaryForm.title}
          onChange={this.props.actions.handleChangeTitle}
        />
        <View style={{ paddingVertical: 40 }}>
          <Button
            title="日記を始める"
            backgroundColor="mediumseagreen"
            onPress={this.props.actions.createDiary}
          />
        </View>
      </View>
    );
  }
}

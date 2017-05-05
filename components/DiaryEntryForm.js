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
  findNodeHandle,
} from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scrollview';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import Field from './Field.js';
import FieldContainer from './FieldContainer.js';
import ImageField from './FieldImage.js';
import headerStyle from './headerStyle.js';
import type { DiaryEntryFormState } from '../reducers/diaryEntryForm';
import type { DiaryEntryFormActions } from '../containers/DiaryEntryForm';

export default class DiaryEntryForm extends React.Component {
  props: {
    diaryEntryForm: DiaryEntryFormState,
    actions: DiaryEntryFormActions,
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
      <KeyboardAwareScrollView>
        <Field
          label="タイトル"
          fieldValue={this.props.diaryEntryForm.title}
          onChange={this.props.actions.handleChangeTitle}
        />
        <Field
          label="本文"
          fieldValue={this.props.diaryEntryForm.body}
          onChange={this.props.actions.handleChangeBody}
          multiline={true}
        />
        <FieldContainer label="今日の一枚">
          <View
            style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}
          >
            <ImageField
              imageUrl={this.props.diaryEntryForm.image1}
              onChange={this.props.actions.handleChangeImage1}
            />
            <ImageField
              imageUrl={this.props.diaryEntryForm.image2}
              onChange={this.props.actions.handleChangeImage2}
            />
            <ImageField
              imageUrl={this.props.diaryEntryForm.image3}
              onChange={this.props.actions.handleChangeImage3}
            />
          </View>
        </FieldContainer>
        <View style={{ paddingVertical: 40 }}>
          <Button title="保存する" backgroundColor="limegreen" />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

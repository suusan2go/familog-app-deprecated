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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Button, ButtonGroup } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import Field from './Field.js';
import FieldContainer from './FieldContainer.js';
import ImageField from './FieldImage.js';
import headerStyle from './headerStyle.js';
import Spinner from 'react-native-loading-spinner-overlay';
import type { DiaryEntryFormState } from '../reducers/diaryEntryForm';
import type { DiaryEntryFormActions } from '../containers/DiaryEntryForm';
import type { DiaryEntryPathParams } from './DiaryEntryListItem';

const smile = () =>
  <Image
    source={require('@moqada/rn-twemoji/n/smile')}
    style={{
      height: 25,
      width: 25,
      marginRight: 10,
      backgroundColor: 'transparent',
    }}
  />;

const cry = () =>
  <Image
    source={require('@moqada/rn-twemoji/n/cry')}
    style={{
      height: 25,
      width: 25,
      marginRight: 10,
      backgroundColor: 'transparent',
    }}
  />;

const tired = () =>
  <Image
    source={require('@moqada/rn-twemoji/n/tired_face')}
    style={{
      height: 25,
      width: 25,
      marginRight: 10,
      backgroundColor: 'transparent',
    }}
  />;

const buttons = [
  {
    element: smile,
    name: 'smile',
  },
  {
    element: tired,
    name: 'tired_face',
  },
  {
    element: cry,
    name: 'cry',
  },
];

export default class DiaryEntryForm extends React.Component {
  props: {
    diaryEntryForm: DiaryEntryFormState,
    actions: DiaryEntryFormActions,
    navigation: {
      navigate: () => void,
      state: {
        params: DiaryEntryPathParams,
      },
    },
  };

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '日記を書く',
    headerTintColor: 'mediumseagreen',
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

  componentWillMount() {
    const id =
      this.props.navigation.state.params &&
      this.props.navigation.state.params.id;
    if (!id) return;
    this.props.actions.setDiaryEntryForm(id);
  }

  componentWillUnmount() {
    this.props.actions.resetForm();
  }

  isDisabled(): boolean {
    return (
      this.props.diaryEntryForm.isSubmitting ||
      this.props.diaryEntryForm.title.length === 0 ||
      this.props.diaryEntryForm.body.length === 0
    );
  }

  handleClickEmoji(index: number) {
    this.props.actions.handleChangeEmoji(buttons[index].name);
  }

  render() {
    const selectedIndex = buttons.findIndex(
      button => button.name === this.props.diaryEntryForm.emoji,
    );
    return (
      <KeyboardAwareScrollView>
        <Spinner
          visible={this.props.diaryEntryForm.isSubmitting}
          textStyle={{ color: 'mediumseagreen' }}
        />
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
        <FieldContainer label="今日の気分">
          <ButtonGroup
            onPress={this.handleClickEmoji.bind(this)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50 }}
          />
        </FieldContainer>
        <FieldContainer label="今日の一枚">
          <View
            style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}
          >
            <ImageField
              imageUrl={
                this.props.diaryEntryForm.image1 &&
                (this.props.diaryEntryForm.image1.uri ||
                  this.props.diaryEntryForm.image1.defaultUri)
              }
              onDelete={this.props.actions.deleteImage1}
              onChange={this.props.actions.handleChangeImage1}
            />
            <ImageField
              imageUrl={
                this.props.diaryEntryForm.image2 &&
                (this.props.diaryEntryForm.image2.uri ||
                  this.props.diaryEntryForm.image2.defaultUri)
              }
              onDelete={this.props.actions.deleteImage2}
              onChange={this.props.actions.handleChangeImage2}
            />
            <ImageField
              imageUrl={
                this.props.diaryEntryForm.image3 &&
                (this.props.diaryEntryForm.image3.uri ||
                  this.props.diaryEntryForm.image3.defaultUri)
              }
              onDelete={this.props.actions.deleteImage3}
              onChange={this.props.actions.handleChangeImage3}
            />
          </View>
        </FieldContainer>
        <View style={{ paddingVertical: 40 }}>
          <Button
            title="保存する"
            backgroundColor="limegreen"
            disabled={this.isDisabled()}
            onPress={this.props.actions.submitDiaryEntry}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

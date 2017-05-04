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

export default class DiaryEntryForm extends React.Component {
  state: {
    title: string,
    body: string,
  };

  constructor(props: any) {
    super(props);
    this.state = { title: '', body: '' };
  }

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
          fieldValue={this.state.title}
          onChange={text => this.setState({ title: text })}
        />
        <Field
          label="本文"
          fieldValue={this.state.body}
          onChange={text => this.setState({ body: text })}
          multiline={true}
        />
        <FieldContainer label="今日の一枚">
          <View
            style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}
          >
            <ImageField />
            <ImageField />
            <ImageField />
          </View>
        </FieldContainer>
        <View style={{ paddingVertical: 40 }}>
          <Button title="保存する" backgroundColor="limegreen" />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

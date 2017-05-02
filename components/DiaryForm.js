import React from 'react'
import { Text, TextInput, ListView, View, Image, StyleSheet, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import Field from './Field.js'
import ImageField from './FieldImage.js'
import headerStyle from './headerStyle.js'

export default class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
  }

  static navigationOptions = {
    header: ({goBack}) => ({
      title: <Text style={headerStyle.title}>日記を書く</Text>,
      style: headerStyle.container,
      left: <Icon
        name='times' type='font-awesome' containerStyle={{ padding: 10 }}
        onPress={() => goBack() }
            />
    }),
  };

  render(){
    return(
      <KeyboardAwareScrollView>
        <Field label="タイトル" fieldValue={this.state.title} onChange={(title) => this.setState({title})} />
        <Field label="本文" fieldValue={this.state.body} onChange={(body) => this.setState({body})} multiline={true} />
        <ImageField/>
        <Button
          title='BUTTON'
          backgroundColor="limegreen"
        />
      </KeyboardAwareScrollView>
    )
  }
}

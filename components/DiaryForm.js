import React from 'react'
import { Text, TextInput, ListView, View, Image, StyleSheet, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import Field from './Field.js'

export default class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
  }

  static navigationOptions = {
    header: ({goBack}) => ({
      title: <Text style={{ color: 'mediumseagreen', fontWeight: 'bold', fontSize: 18 }}>日記を書く</Text>,
      style: {
        marginBottom: 0,
        backgroundColor: 'white', borderStyle: 'solid',
        borderBottomColor: 'limegreen', borderBottomWidth: 0.5,
      },
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
        <Button
          title='BUTTON'
          backgroundColor="limegreen"
        />
      </KeyboardAwareScrollView>
    )
  }
}

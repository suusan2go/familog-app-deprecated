import React from 'react'
import { Text, ListView, Button, View, Image, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements'

export default class DiaryForm extends React.Component {
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
    <Text>hohee</Text>
    )
  }
}

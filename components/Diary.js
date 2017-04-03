import React, { Component } from 'react';
import { Text, ListView, View} from 'react-native';

export default class Diary extends Component {
  render(){
    const name = this.props.navigation.state.params.name
    return(
      <View>
        <Text>{name}</Text>
      </View>
    )
  }
}

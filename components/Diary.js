import React, { Component } from 'react';
import { Text, ListView, View} from 'react-native';

export default class Diary extends Component {
  static navigationOptions = {
    header: {
      title: <Text style={{ color: 'mediumseagreen', fontWeight: 'bold', fontSize: 18 }}>日記</Text>,
      style: {
        marginBottom: 0,
        backgroundColor: 'white', borderStyle: 'solid',
        borderBottomColor: 'limegreen', borderBottomWidth: 0.5,
      }
    },
  };

  render(){
    const name = this.props.navigation.state.params.name
    return(
      <View>
        <Text>{name}</Text>
      </View>
    )
  }
}

import React, { Component } from 'react';
import { Text, ListView, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import nodeEmoji from 'node-emoji';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

class DiaryList extends Component {
  static navigationOptions = {
    header: {
      title: <Text style={{ color: 'mediumseagreen', fontWeight: 'bold', fontSize: 18 }}>FamiLog</Text>,
      style: {
        marginBottom: 0,
        backgroundColor: 'white', borderStyle: 'solid',
        borderBottomColor: 'limegreen', borderBottomWidth: 0.5,
      }
    },
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const _renderRow = (rowData) => (
      <TouchableHighlight
        underlayColor="lightgrey"
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Diary', {name: 'Lucy'})}
      >
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'limegreen', borderBottomWidth: 0.4, height: 100,
            justifyContent: 'center',
            backgroundColor: 'white'
          }}
        >
          <Image
            style={{ flex: 3, width: undefined, height: undefined  }}
            source={require('./photo01.jpg')}
          >
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={{ fontSize: 30, top: 60, right: 0, position: 'absolute', backgroundColor: 'transparent' }}>
                {nodeEmoji.get('smile')}
              </Text>
            </View>
          </Image>
          <View style={{ flex: 4, padding: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, marginBottom: 10, color: 'grey' }}>2017-10-21</Text>
              <Text style={{ fontSize: 12, marginBottom: 10, color: 'grey' }}>by すーさん</Text>
            </View>
            <Text style={{ letterSpacing: 0.6, fontSize: 15, marginBottom: 10 }} numberOfLines={1}>
              今日はみなとみらいまでいったaa
            </Text>
            <Text style={{ letterSpacing: 0.6 }} numberOfLines={2} selectable={true} >
              今日はみなとみらいまでいった.今日はみなとみらいまでい.....aaaaaaaaaaaaaaa
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
    return (
      <View style={{ width: Dimensions.get('window').width, flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={_renderRow}
          automaticallyAdjustContentInsets={false}
        />
        <Icon
          raised
          name='pencil'
          type='font-awesome'
          color='orangered'
          onPress={() => navigate('DiaryForm') }
          containerStyle={{ position: 'absolute', bottom: 20, right: 20, height: 60, width: 60 }}
        />
      </View>
    );
  }
}

export default DiaryList;

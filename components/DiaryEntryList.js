import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import nodeEmoji from 'node-emoji';
import { StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import { Constants } from 'expo';
import headerStyle from './headerStyle.js';

class DiaryEntryList extends Component {
  props: {
    navigation: {
      navigate: func,
    },
    currentDiary: {
      id: number,
      name: string,
    },
  };

  static navigationOptions = {
    title: '日記',
    headerTitle: <Text style={headerStyle.title}>FamiLog</Text>,
    headerStyle: headerStyle.container,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="book-open-page-variant"
        type="material-community"
        color={tintColor}
      />
    ),
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      containerWidth: Dimensions.get('window').width,
    };
    this.onLayout = this.onLayout.bind(this);
  }

  onLayout(event) {
    this.setState({ width: Dimensions.get('window').width });
  }

  render() {
    const { navigation: { navigate }, currentDiary } = this.props;
    console.log(this.props);
    const _renderRow = rowData => (
      <TouchableHighlight
        underlayColor="lightgrey"
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('DiaryEntry', { name: 'Lucy' })}
      >
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'limegreen',
            borderBottomWidth: 0.4,
            height: 100,
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        >
          <Image
            style={{ flex: 3, width: undefined, height: undefined }}
            source={require('./photo01.jpg')}
          >
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text
                style={{
                  fontSize: 30,
                  top: 60,
                  right: 0,
                  position: 'absolute',
                  backgroundColor: 'transparent',
                }}
              >
                {nodeEmoji.get('smile')}
              </Text>
            </View>
          </Image>
          <View style={{ flex: 4, padding: 5 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ fontSize: 12, marginBottom: 10, color: 'grey' }}>
                2017-10-21
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 10, color: 'grey' }}>
                by すーさん
              </Text>
            </View>
            <Text
              style={{ letterSpacing: 0.6, fontSize: 15, marginBottom: 10 }}
              numberOfLines={1}
            >
              今日はみなとみらいまでいったaa
            </Text>
            <Text
              style={{ letterSpacing: 0.6 }}
              numberOfLines={2}
              selectable={true}
            >
              今日はみなとみらいまでいった.今日はみなとみらいまでい.....aaaaaaaaaaaaaaa
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
    return (
      <View
        style={{ width: Dimensions.get('window').width, flex: 1 }}
        onLayout={this.onLayout}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            large
            iconLeft
            backgroundColor="mediumseagreen"
            icon={{
              name: 'book-open-page-variant',
              type: 'material-community',
            }}
            title="日記を始める"
          />
        </View>
        {currentDiary !== null &&
          <View style={{ flex: 1 }}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={_renderRow}
              automaticallyAdjustContentInsets={false}
            />
            <Icon
              raised
              name="pencil"
              type="font-awesome"
              color="orangered"
              onPress={() => navigate('DiaryEntryForm')}
              containerStyle={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                height: 60,
                width: 60,
              }}
            />
          </View>}
      </View>
    );
  }
}

export default DiaryEntryList;

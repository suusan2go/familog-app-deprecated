import React, { Component } from 'react';
import { Text, FlatList, View, Image, TouchableHighlight } from 'react-native';
import nodeEmoji from 'node-emoji';
import type { DiaryEntryState } from '../reducers/diaryEntryList';

class DiaryEntryListItem extends Component {
  props: {
    diaryEntry: DiaryEntryState,
    navigation: {
      navigate: (scrren: string) => void,
    },
  };

  render() {
    const { diaryEntry, navigation } = this.props;
    return (
      <TouchableHighlight
        underlayColor="lightgrey"
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DiaryEntry', { name: 'Lucy' })}
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
            source={
              diaryEntry.diaryEntryImages
                ? { uri: diaryEntry.diaryEntryImages[0].uri }
                : require('./photo01.jpg')
            }
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
              {diaryEntry.title}
            </Text>
            <Text
              style={{ letterSpacing: 0.6 }}
              numberOfLines={2}
              selectable={true}
            >
              {diaryEntry.body}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default DiaryEntryListItem;

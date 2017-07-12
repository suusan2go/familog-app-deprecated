/* @flow */
import React, { Component } from 'react';
import { Text, FlatList, View, Image, TouchableHighlight } from 'react-native';
import moment from 'moment';
import type { DiaryEntryState } from '../reducers/diaryEntryList';

export type DiaryEntryPathParams = {
  id: number,
};

class DiaryEntryListItem extends Component {
  props: {
    diaryEntry: DiaryEntryState,
    navigation: {
      navigate: (scrren: string, params: DiaryEntryPathParams) => void,
    },
  };

  localCreatedAt() {
    const { diaryEntry } = this.props;
    return moment
      .parseZone(diaryEntry.createdAt)
      .local()
      .format('YYYY-MM-DD HH:mm');
  }

  userName() {
    const { diaryEntry: { user } } = this.props;
    return user.name.length !== 0 ? `by ${user.name}` : 'by 名無し';
  }

  emoji() {
    const { diaryEntry } = this.props;
    switch (diaryEntry.emoji) {
      case 'smile':
        return (
          <Image
            source={require('@moqada/rn-twemoji/n/smile')}
            style={{
              height: 25,
              width: 25,
              top: 65,
              right: 10,
              position: 'absolute',
              backgroundColor: 'transparent',
            }}
          />
        );
      case 'tired_face':
        return (
          <Image
            source={require('@moqada/rn-twemoji/n/tired_face')}
            style={{
              height: 25,
              width: 25,
              top: 65,
              right: 10,
              position: 'absolute',
              backgroundColor: 'transparent',
            }}
          />
        );
      case 'cry':
        return (
          <Image
            source={require('@moqada/rn-twemoji/n/cry')}
            style={{
              height: 25,
              width: 25,
              top: 65,
              right: 10,
              position: 'absolute',
              backgroundColor: 'transparent',
            }}
          />
        );
    }
  }

  render() {
    const { diaryEntry, navigation } = this.props;
    return (
      <TouchableHighlight
        underlayColor="lightgrey"
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DiaryEntry', { id: diaryEntry.id })}
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
                : require('./no_image.png')
            }
          >
            {diaryEntry.emoji !== null &&
              diaryEntry.emoji.length > 0 &&
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.emoji()}
              </View>}
          </Image>
          <View style={{ flex: 4, padding: 5 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ fontSize: 12, marginBottom: 10, color: 'grey' }}>
                {this.localCreatedAt()}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 10, color: 'grey' }}>
                {this.userName()}
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

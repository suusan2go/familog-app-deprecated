/* @flow */
import React, { Component } from 'react';
import {
  Text,
  Image,
  ActivityIndicator,
  ListView,
  View,
  ScrollView,
} from 'react-native';
import headerStyle from './headerStyle.js';
import Spinner from 'react-native-loading-spinner-overlay';
import DiaryEntryImages from './DiaryEntryImages';
import moment from 'moment';
import DiaryEntryHeaderRight from './DiaryEntryHeaderRight';
import type { DiaryEntryPathParams } from './DiaryEntryListItem';
import type { DiaryEntryState } from '../reducers/diaryEntryList';
import type { DiaryEntryActions } from '../containers/DiaryEntry';

export default class DiaryEntry extends Component {
  props: {
    navigation: {
      navigate: () => void,
      state: {
        params: DiaryEntryPathParams,
      },
    },
    diaryEntry: DiaryEntryState,
    actions: DiaryEntryActions,
  };

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '',
    headerTitle: null,
    headerTintColor: 'mediumseagreen',
    headerStyle: headerStyle.container,
    headerRight: (
      <DiaryEntryHeaderRight
        navigation={navigation}
        isDiaryEntryEditable={screenProps.isDiaryEntryEditable}
      />
    ),
  });

  localCreatedAt() {
    if (this.props.diaryEntry === null) return;
    const { diaryEntry } = this.props;
    return moment
      .parseZone(diaryEntry.createdAt)
      .local()
      .format('YYYY-MM-DD HH:mm');
  }

  userName() {
    if (this.props.diaryEntry === null) return;
    const { diaryEntry: { user } } = this.props;
    const name = user.name.length !== 0 ? `${user.name}` : user.id;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 14, textAlign: 'center', marginRight: 5 }}>
          by
        </Text>
        {this.props.diaryEntry.user.imageUrl
          ? <Image
              style={{
                borderRadius: 12,
                height: 25,
                width: 25,
                marginRight: 5,
              }}
              source={{ uri: this.props.diaryEntry.user.imageUrl }}
            />
          : null}
        <Text style={{ fontSize: 14, textAlign: 'center' }}>
          {name}
        </Text>
      </View>
    );
  }

  emoji() {
    const { diaryEntry } = this.props;
    switch (diaryEntry && diaryEntry.emoji) {
      case 'smile':
        return (
          <Image
            source={require(`@moqada/rn-twemoji/n/smile`)}
            style={{
              height: 25,
              width: 25,
              marginRight: 10,
              backgroundColor: 'transparent',
            }}
          />
        );
      case 'tired_face':
        return (
          <Image
            source={require(`@moqada/rn-twemoji/n/tired_face`)}
            style={{
              height: 25,
              width: 25,
              marginRight: 10,
              backgroundColor: 'transparent',
            }}
          />
        );
      case 'cry':
        return (
          <Image
            source={require(`@moqada/rn-twemoji/n/cry`)}
            style={{
              height: 25,
              width: 25,
              marginRight: 10,
              backgroundColor: 'transparent',
            }}
          />
        );
    }
  }

  componentWillMount() {
    const id = this.props.navigation.state.params.id;
    this.props.actions.getDiaryEntry(id);
  }

  showDiaryEntry() {
    const { diaryEntry } = this.props;
    return (
      diaryEntry !== null &&
      diaryEntry.id === this.props.navigation.state.params.id
    );
  }

  render() {
    const { diaryEntry } = this.props;
    return diaryEntry !== null && this.showDiaryEntry()
      ? <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}
        >
          <View style={{ paddingHorizontal: 10, flex: 1, paddingTop: 20 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingVertical: 10,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <View>
                {this.emoji()}
              </View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', flex: 1 }}>
                {diaryEntry.title}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingVertical: 10,
                justifyContent: 'space-between',
              }}
            >
              {this.userName()}
              <Text
                style={{
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {this.localCreatedAt()}
              </Text>
            </View>
          </View>
          {diaryEntry.diaryEntryImages &&
            diaryEntry.diaryEntryImages.length > 0 &&
            <DiaryEntryImages
              images={diaryEntry.diaryEntryImages}
              style={{ flex: 3 }}
            />}
          <Text
            style={{
              padding: 10,
              fontSize: 18,
              letterSpacing: 1.0,
              lineHeight: 24,
            }}
          >
            {diaryEntry.body}
          </Text>
        </ScrollView>
      : <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator animating size={'large'} />
        </View>;
  }
}

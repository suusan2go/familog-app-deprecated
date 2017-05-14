import React, { Component } from 'react';
import {
  Text,
  FlatList,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  RefreshControl,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import { Constants } from 'expo';
import headerStyle from './headerStyle.js';
import DiaryEntryListItem from './DiaryEntryListItem.js';
import DiaryInvitation from './DiaryInvitation';
import type { CurrentDiaryState } from '../reducers/currentDiary';
import type {
  DiaryEntryListState,
  DiaryEntryState,
} from '../reducers/diaryEntryList';
import type { DiaryEntryListActions } from '../containers/DiaryEntryList';

class DiaryEntryList extends Component {
  props: {
    navigation: {
      navigate: func,
    },
    currentDiary: CurrentDiaryState,
    diaryEntryList: DiaryEntryListState,
    actions: DiaryEntryListActions,
  };

  static navigationOptions = ({ screenProps, navigation }) => ({
    title: '日記',
    headerTitle: <Text style={headerStyle.title}>FamiLog</Text>,
    headerStyle: headerStyle.container,
    headerRight: screenProps.showInvitation && <DiaryInvitation />,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="book-open-page-variant"
        type="material-community"
        color={tintColor}
      />
    ),
  });

  constructor() {
    super();
    this.state = {
      containerWidth: Dimensions.get('window').width,
    };
    this.onLayout = this.onLayout.bind(this);
  }

  onLayout(event) {
    this.setState({ width: Dimensions.get('window').width });
  }

  render() {
    const {
      navigation: { navigate },
      currentDiary,
      diaryEntryList,
    } = this.props;
    const _renderRow = ({
      item,
      index,
    }: {
      item: DiaryEntryState,
      index: number,
    }) => (
      <DiaryEntryListItem
        diaryEntry={item}
        navigation={this.props.navigation}
      />
    );
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          flex: 1,
        }}
        onLayo
        ut={this.onLayout}
      >
        {currentDiary === null &&
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
              large
              iconLeft
              backgroundColor="mediumseagreen"
              icon={{
                name: 'book-open-page-variant',
                type: 'material-community',
              }}
              onPress={() => navigate('DiaryForm')}
              title="日記を始める"
            />
          </View>}
        {currentDiary !== null &&
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.props.diaryEntryList.diaryEntries}
              renderItem={_renderRow}
              enableEmptySections={true}
              keyExtractor={(item, index) => item.id}
              automaticallyAdjustContentInsets={false}
              onEndReached={this.props.actions.loadMoreOlderDiaryEntries}
              refreshControl={
                <RefreshControl
                  refreshing={this.props.diaryEntryList.isLoading}
                  onRefresh={this.props.actions.loadMoreNewerDiaryEntries}
                />
              }
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

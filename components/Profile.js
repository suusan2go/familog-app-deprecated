/* @flow */
import React, { Component } from 'react';
import { Text, Image, ActivityIndicator, View, ScrollView } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import headerStyle from './headerStyle.js';
import ProfileHeaderRight from './ProfileHeaderRight';
import type { CurrentUserState } from '../reducers/currentUser';
import type { ProfileActions } from '../containers/Profile';

export default class Profile extends Component {
  props: {
    currentUser: CurrentUserState,
    actions: ProfileActions,
  };

  static navigationOptions = ({ screenProps, navigation }) => ({
    title: 'プロフィール',
    headerStyle: headerStyle.container,
    headerTintColor: 'mediumseagreen',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="account" type="material-community" color={tintColor} />
    ),
    headerRight: (
      <ProfileHeaderRight
        isVisible={screenProps.showInvitation}
        navigation={navigation}
      />
    ),
  });

  componentWillMount() {
    this.props.actions.getCurrentUser();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            flex: 1,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              height: 150,
              width: 150,
              alignSelf: 'center',
            }}
          >
            {currentUser.image == null
              ? <Avatar
                  xlarge
                  rounded
                  icon={{ name: 'camera-alt' }}
                  activeOpacity={1}
                />
              : <Avatar
                  xlarge
                  rounded
                  source={{ uri: currentUser.image.uri }}
                  activeOpacity={1}
                />}
          </View>
        </View>
        <Text
          style={{
            fontSize: 24,
            color: 'mediumseagreen',
            fontWeight: 'bold',
            alignSelf: 'center',
            padding: 20,
          }}
        >
          未設定
        </Text>
      </ScrollView>
    );
  }
}

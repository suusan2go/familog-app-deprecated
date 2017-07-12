/* @flow */
import React, { Component } from 'react';
import { Text, Image, ActivityIndicator, View } from 'react-native';
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
    tabBarIcon: ({ tintColor }) =>
      <Icon name="account" type="material-community" color={tintColor} />,
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
    const imageUrl = (): ?string => {
      const imageUrl = currentUser.imageUrl;
      if (imageUrl && imageUrl.length !== 0) {
        return imageUrl;
      }
      return null;
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 50,
          }}
        >
          {imageUrl() !== null
            ? <Image
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  alignSelf: 'center',
                }}
                source={{ uri: imageUrl() }}
              />
            : <Image
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  alignSelf: 'center',
                }}
                source={require('./no_image.png')}
              />}
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
          {currentUser.name}
        </Text>
      </View>
    );
  }
}

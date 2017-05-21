/* @flow */
import React, { Component } from 'react';
import {
  Text,
  Image,
  ActivityIndicator,
  ListView,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { Icon, Avatar, Button } from 'react-native-elements';
import headerStyle from './headerStyle.js';
import FieldContainer from './FieldContainer';
import ProfileHeaderRight from './ProfileHeaderRight';
import Field from './Field';
import { ImagePicker } from 'expo';
import type { ProfileFormState } from '../reducers/profileForm';
import type { CurrentUserState } from '../reducers/currentUser';
import type { ProfileFormActions } from '../containers/ProfileForm';

export default class Profile extends Component {
  props: {
    navigation: {
      navigate: () => void,
    },
    profileForm: ProfileFormState,
    currentUser: CurrentUserState,
    actions: ProfileFormActions,
  };

  static navigationOptions = ({ screenProps, navigation }) => ({
    title: '',
    headerStyle: headerStyle.container,
    headerTintColor: 'mediumseagreen',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="account" type="material-community" color={tintColor} />
    ),
    headerLeft: (
      <Icon
        name="times"
        type="font-awesome"
        containerStyle={{ padding: 10 }}
        onPress={() => navigation.goBack()}
      />
    ),
  });

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
    });
    if (!result.cancelled) {
      const uriParts = result.uri.split('.');
      const fileType = uriParts[uriParts.length - 1];
      this.props.actions.handleChangeImage({
        uri: result.uri,
        name: `file.${fileType}`,
        type: `image/${fileType}`,
      });
    }
  };

  componentWillMount() {
    this.props.actions.setCurrentProfile();
  }

  imageUrl() {
    const { profileForm, currentUser } = this.props;
    if (profileForm.image) {
      return profileForm.image.uri;
    }
    return currentUser.imageUrl;
  }

  render() {
    const { profileForm } = this.props;
    return (
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <FieldContainer label="写真">
          <View
            style={{
              paddingHorizontal: 10,
              flex: 1,
            }}
          >
            <TouchableHighlight
              style={{
                height: 150,
                width: 150,
                alignSelf: 'center',
              }}
              onPress={this.pickImage}
              underlayColor="transparent"
              activeOpacity={0.7}
            >
              <View>
                {this.imageUrl() == null
                  ? <Avatar
                      xlarge
                      rounded
                      icon={{ name: 'camera-alt' }}
                      activeOpacity={0.7}
                    />
                  : <Avatar
                      xlarge
                      rounded
                      source={{ uri: this.imageUrl() }}
                      icon={{ name: 'camera-alt' }}
                      activeOpacity={0.7}
                    />}
              </View>
            </TouchableHighlight>
          </View>
        </FieldContainer>
        <Field
          label="名前"
          fieldValue={this.props.profileForm.name}
          onChange={this.props.actions.handleChangeName}
        />
        <View style={{ paddingVertical: 40 }}>
          <Button
            title="保存する"
            backgroundColor="limegreen"
            onPress={this.props.actions.updateProfile}
          />
        </View>
      </ScrollView>
    );
  }
}

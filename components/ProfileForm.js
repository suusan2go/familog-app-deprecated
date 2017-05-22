/* @flow */
import React, { Component } from 'react';
import ReactNative, {
  Text,
  Image,
  ActivityIndicator,
  ListView,
  View,
  TouchableHighlight,
  Platform,
  ScrollView,
} from 'react-native';
import { Icon, Avatar, Button } from 'react-native-elements';
import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scrollview';
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

  state: {
    marginTop: number,
  };

  state = {
    marginTop: 0,
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
    if (currentUser.imageUrl && currentUser.imageUrl.length !== 0) {
      return currentUser.imageUrl;
    }
    return null;
  }

  onFocus() {
    if (Platform.OS === 'android') this.setState({ marginTop: -200 });
  }

  onBlur() {
    if (Platform.OS === 'android') this.setState({ marginTop: 0 });
  }

  render() {
    const { profileForm } = this.props;
    return (
      <KeyboardAwareScrollView style={{ marginTop: this.state.marginTop }}>
        <FieldContainer label="写真">
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
              {this.imageUrl() !== null
                ? <Image
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 75,
                      alignSelf: 'center',
                    }}
                    source={{ uri: this.imageUrl() }}
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
          </TouchableHighlight>
        </FieldContainer>
        <Field
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
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
      </KeyboardAwareScrollView>
    );
  }
}

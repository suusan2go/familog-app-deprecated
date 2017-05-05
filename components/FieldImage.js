/* @flow */
import React from 'react';
import { Icon } from 'react-native-elements';
import { Button, Image, View, TouchableHighlight } from 'react-native';
import { ImagePicker } from 'expo';

export default class FieldImage extends React.Component {
  props: {
    imageUrl: ?string,
    onChange: (imageParams: {
      uri: string,
      name: string,
      type: string,
    }) => void,
  };

  render() {
    const { imageUrl } = this.props;
    return (
      <TouchableHighlight
        style={{ flex: 1, margin: 10 }}
        onPress={this._pickImage}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightgrey',
            height: 100,
          }}
        >
          {imageUrl !== null
            ? <Image
                source={{
                  uri: imageUrl,
                }}
                style={{ flex: 1, minWidth: 100, height: 100 }}
              />
            : <Icon name="image" />}
        </View>
      </TouchableHighlight>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      const uriParts = result.uri.split('.');
      const fileType = uriParts[uriParts.length - 1];
      this.props.onChange({
        uri: result.uri,
        name: `file.${fileType}`,
        type: `image/${fileType}`,
      });
    }
  };
}

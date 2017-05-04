import React from 'react';
import { Icon } from 'react-native-elements';
import { Button, Image, View, TouchableHighlight } from 'react-native';
import { ImagePicker } from 'expo';

export default class FieldImage extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <TouchableHighlight style={{ flex: 1, margin: 10 }} onPress={this._pickImage} >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgrey', height: 100}}>
          {image ?
            <Image source={{ uri: image }} style={{ flex: 1, minWidth: 100, height: 100 }} /> :
            <Icon
              name="image"
            />
          }
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
      this.setState({ image: result.uri });
    }
  };
}
/* @flow */
import React from 'react';
import {
  Text,
  TextInput,
  ListView,
  Button,
  View,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

export default class FieldContainer extends React.Component {
  props: {
    label: String,
    containerStyle?: Object,
    children?: any,
  };

  render() {
    const { label, containerStyle } = this.props;
    return (
      <View style={[styles.labelContainer, containerStyle]}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelContainer: {
    marginVertical: 10,
  },
  label: {
    alignItems: 'flex-start',
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
  },
});

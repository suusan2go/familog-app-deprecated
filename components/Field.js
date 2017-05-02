import React from 'react'
import { Text, TextInput, ListView, Button, View, Image, StyleSheet, Platform } from 'react-native';

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  handleScrollPoint

  render() {
    const { fieldValue, onChange, label, multiline, placeholder } = this.props
    const inputStyle = multiline ? styles.multiline : styles.input
    const minContentHeight = multiline ? 200 : 40
    const returnKey = multiline ? 'default' : 'done'
    return (
      <View style={styles.labelContainer}>
        <View style={styles.label}>
          <Text>{label}</Text>
        </View>
        <TextInput
          returnKeyType={returnKey}
          style={[inputStyle, {height: Math.max(minContentHeight, this.state.height)}]}
          onChangeText={onChange}
          onContentSizeChange={(event) => {
            this.setState({height: event.nativeEvent.contentSize.height});
          }}
          value={fieldValue}
          placeholder={placeholder}
          multiline={multiline}
        />
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
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 5,
    fontSize: 16,
    ...Platform.select({
      ios: {
        borderColor: 'mediumseagreen',
        borderWidth: 1,
      },
      android: {
      },
    }),
  },
  multiline: {
    backgroundColor: 'white',
    padding: 5,
    fontSize: 16,
    ...Platform.select({
      ios: {
        borderColor: 'mediumseagreen',
        borderWidth: 1,
      },
      android: {
        textAlignVertical: 'top',
      },
    }),
  }
})

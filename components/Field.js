/* @flow */
import React from 'react'
import { Text, TextInput, ListView, Button, View, Image, StyleSheet, Platform } from 'react-native';
import FieldContainer from './FieldContainer.js'

export default class Field extends React.Component {
  state: {
    height: number,
    isSubmit: bool,
  }

  constructor(props: any) {
    super(props);
    this.state = { height: 0, isSubmit: false };
  }

  // https://gist.github.com/BCGen/9ba9f7d96459fd063e42bd53f9839217
  // on android onSubmitEditing trigger twice, not test on ios.
  handleSubmitEditing(event: Event) {
    const { onChange, onSubmitEditing, fieldValue } = this.props;

    if (!this.state.isSubmit) {
      onChange(fieldValue + "\n");
    }
    this.setState({ isSubmit: !this.state.isSubmit });
  }

  render() {
    const { fieldValue, onChange, label, multiline, placeholder } = this.props
    const inputStyle = multiline ? styles.multiline : styles.input
    const minContentHeight = multiline ? 200 : 40
    const returnKey = multiline ? 'default' : 'done'
    return (
      <FieldContainer label={label}>
        <TextInput
          returnKeyType={returnKey}
          blurOnSubmit={!multiline}
          style={[inputStyle, {height: Math.max(minContentHeight, this.state.height)}]}
          onChangeText={onChange}
          onSubmitEditing={this.handleSubmitEditing.bind(this)}
          onChange={(event) => {
            if (Platform.OS === 'android') {
              this.setState({height: event.nativeEvent.contentSize.height});
            }
          }}
          onContentSizeChange={(event) => {
            this.setState({height: event.nativeEvent.contentSize.height});
          }}
          value={fieldValue}
          placeholder={placeholder}
          multiline={multiline}
        />
      </FieldContainer>
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

import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputField: {
    borderColor: '#d73a4a',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 5,
    borderRadius: 3,
    borderWidth: 1,
    textAlign: 'center'
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  //console.log(error);
  if (!error) {
    return <NativeTextInput style={textInputStyle} {...props} />;
  }
  return <NativeTextInput style={styles.inputField} {...props} />;
};

export default TextInput;
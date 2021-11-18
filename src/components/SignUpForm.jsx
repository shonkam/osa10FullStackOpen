import React from "react";
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const SignUpForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.inputField} name="username" placeholder="Username" />
      <FormikTextInput style={styles.inputField} name="password" placeholder="Password" />
      <FormikTextInput style={styles.inputField} name="passwordConfirmation" placeholder="Password confirmation" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={{ textAlign: 'center', color: 'white', paddingVertical: 5 }}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  inputField: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#24292e',
    textAlign: 'center'
  },
  button: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#24292e',
    textAlign: 'center',
    backgroundColor: '#0366d6',
    marginBottom: 15,
  }
});

export default SignUpForm;
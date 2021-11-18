import React from "react";
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const ReviewForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.inputField} name="owner" placeholder="Repository owner name" />
      <FormikTextInput style={styles.inputField} name="name" placeholder="Repository name" />
      <FormikTextInput style={styles.inputField} name="rating" type="number" placeholder="Rating between 0 and 100" />
      <FormikTextInput style={styles.inputField} name="review" placeholder="Review" multiline={true} />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={{ textAlign: 'center', color: 'white', paddingVertical: 5 }}>Create a review</Text>
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

export default ReviewForm;
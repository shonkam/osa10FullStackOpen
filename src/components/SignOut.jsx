import React from "react";
import { View, Pressable } from 'react-native';
import Text from './Text';
import { useHistory } from "react-router-native";
import useSignOut from '../hooks/useSignOut';

const SignOut = () => {
  let history = useHistory();


  try {
    const signingOut = useSignOut();
    console.log(signingOut);
    history.push("/");
  } catch (err) {
    console.log(err);
  }

  return (
    <View>
      <Pressable>
        <Text>Logging out...</Text>
      </Pressable>
    </View>
  );
};

export default SignOut;
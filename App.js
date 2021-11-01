import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from "react-native";

import RepositoryList from './src/components/RepositoryList';
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

export default App;
import React from 'react';
import AppBar from './src/components/AppBar';
import { SafeAreaView, StyleSheet } from "react-native";

import RepositoryList from './src/components/RepositoryList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flex: 1
  },
});
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <RepositoryList />
    </SafeAreaView>
  );
};

export default App;
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from '../AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBarTab tabName={'Repositories'} />
    </SafeAreaView>
  );
};

export default AppBar;
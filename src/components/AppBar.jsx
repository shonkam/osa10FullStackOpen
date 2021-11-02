import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
  }
});

const AppBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBarTab style={styles.tab} tabName={'Repositories'} route='/' />
      <AppBarTab style={styles.tab} tabName={'Sign in'} route='/signin' />
    </SafeAreaView>
  );
};

export default AppBar;
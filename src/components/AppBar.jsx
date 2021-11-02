import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
  scrollView: {
    backgroundColor: '#24292e'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab tabName={'Repositories'} route='/' />
        <AppBarTab tabName={'Sign in'} route='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
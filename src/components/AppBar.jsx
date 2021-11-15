import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
  scrollView: {
    backgroundColor: '#24292e'
  }
});

const AppBar = () => {

  let logged = false;
  logged = useAuthorizedUser();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab tabName={'Repositories'} route='/' />
        {logged ?
          <AppBarTab tabName={'Sign out'} route='/signout' />
          : <AppBarTab tabName={'Sign in'} route='/signin' />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;
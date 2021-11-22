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

  if (logged) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal>
          <AppBarTab tabName={'Repositories'} route='/' />
          <AppBarTab tabName={'Create a review'} route='/createReview' />
          <AppBarTab tabName={'My reviews'} route='/myReviews' />
          <AppBarTab tabName={'Sign out'} route='/signout' />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab tabName={'Repositories'} route='/' />
        <AppBarTab tabName={'Sign in'} route='/signin' />
        <AppBarTab tabName={'Sign up'} route='/signup' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
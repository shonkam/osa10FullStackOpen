import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Route, Switch } from 'react-router-native';
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from './SignIn';
import SignOut from "./SignOut";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route exact path="/" component={RepositoryList} />
      </Switch>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flex: 1
  },
});

export default Main;
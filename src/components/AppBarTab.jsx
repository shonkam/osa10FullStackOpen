import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
const AppBarTab = ({ tabName, route }) => {
  return (
    <Pressable
      style={styles.pressable}>
      <Link to={`${route}`}>
        <Text style={styles.text}>
          {tabName}
        </Text>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    backgroundColor: '#24292e',
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 40
  }
});
export default AppBarTab;
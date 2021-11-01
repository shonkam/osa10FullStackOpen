import React from 'react';
import { Pressable, Text } from 'react-native';

const AppBarTab = ({ tabName }) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? 'rgb(210, 230, 255)'
          : '#24292e'
      }
    ]}>
      <Text style={{ fontSize: 26, color: 'white' }}>
        {tabName}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
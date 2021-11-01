import React from 'react';
import AppBar from './src/components/AppBar';
import { View } from "react-native";

import RepositoryList from './src/components/RepositoryList';

const App = () => {
  return (
    <View>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default App;
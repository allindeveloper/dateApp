import React from 'react';
import {SafeAreaView} from 'react-native';
import SpaceTop from './src/components/SpaceTop';
import HomeScreen from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SpaceTop top={40} />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

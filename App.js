import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({
  contiener: {
    padding: 40,
    paddingHorizontal: 20,
  },
})

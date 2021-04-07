import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Browser from './components/Browser/index';
import Home from './components/Home/index';

const AppNavigator = createStackNavigator ({
  Home : {
      screen : Home
  },
  Browser : {
    screen : Browser
  },
  },{
      headerMode : 'none'
  },{
      initialRouteName : 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily : 'Sergio UI',
  },
});

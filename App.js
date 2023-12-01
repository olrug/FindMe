import * as React from 'react';
import { Button, View, Text, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './src/navigator/Navigator'

function App() {
  return (
    <Navigator/>
  );
}

export default App;

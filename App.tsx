import 'react-native-gesture-handler';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigation } from './src/Navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App

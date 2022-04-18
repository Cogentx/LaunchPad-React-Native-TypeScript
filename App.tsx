import Home from './src/screens/HomeScreen';
import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/StackNavigator';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <StackNavigator />
    </TailwindProvider>
  );
}

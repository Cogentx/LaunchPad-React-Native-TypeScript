import Home from './src/screens/HomeScreen';
import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/StackNavigator';
import { AuthProvider } from './src/lib/hooks/useAuth';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      {/* HOC - Higher Order Component - wraps children components */}
      <AuthProvider>
        {/* passes down auth info to child components */}
        <StackNavigator />
      </AuthProvider>
    </TailwindProvider>
  );
}

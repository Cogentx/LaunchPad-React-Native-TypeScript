import { Button, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTailwind } from 'tailwind-rn';
import React from 'react';

export default function HomeScreen() {
  const tw = useTailwind();

  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Text>Legato Capture</Text>
      <Button title="Capture" />
      <StatusBar style="auto" />
    </View>
  );
}

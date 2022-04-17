import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';

export default function HomeScreen() {
  const tw = useTailwind();
  const navigation = useNavigation();

  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Text>Legato Capture</Text>
      <Button title="Chat Now" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}

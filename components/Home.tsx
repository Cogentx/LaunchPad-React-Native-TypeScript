import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTailwind } from 'tailwind-rn';

export default function Home() {
  const tw = useTailwind();

  return (
    <View style={tw("flex-1 justify-center items-center")}>
      <Text>Legato Capture</Text>
      <StatusBar style="auto" />
    </View>
  );
}

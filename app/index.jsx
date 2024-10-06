import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link} from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">indexzzz</Text>
      <Link href="/account-page" style={{color: 'blue'}}>Go to Tabs</Link>
      <Link href="/sign-in" style={{color: 'blue'}}>Go to Auth</Link>
      <StatusBar style="auto" />
    </View>
  );
}
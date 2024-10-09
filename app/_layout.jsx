import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar'

const RootLayout = () => {
  return (
    <>
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>

    <StatusBar backgroundColor=""
        style="light"
      />
    </>

  )
}

// left off at 34:50. importing assets and contants

export default RootLayout


import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar'
import { ThemeProvider } from '../contexts/ThemeProvider';
import {ApiProvider, useApi} from '../contexts/ApiProvider';
import {useEffect} from 'react';
import ProtectedLayout from '../components/ProtectedLayout'

const RootLayout = () => {
  return (
    <>
      <ThemeProvider>
        <ApiProvider>
          <Stack>
              <Stack.Screen name="index" options={{headerShown: false}}/>
              <Stack.Screen name="(auth)" options={{headerShown: false}}/>
              <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
          </Stack>
          <StatusBar backgroundColor=""
              style="light"
            />
        </ApiProvider>
      </ThemeProvider>
    </>
  )
}

export default RootLayout


import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import {Link, router} from 'expo-router';
import CustomButton from '../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import {ThemeProvider, useTheme} from '../contexts/ThemeProvider';
import {useContext} from 'react';

export default function App() {

  const {colors, theme, toggleTheme} = useTheme();

  return (

    <ThemeProvider>
      <SafeAreaView className="bg-primary h-full justify-center">
              <CustomButton
                  title="Sign In"
                  handlePress={()=> router.push('/log-transaction-page')}
                  buttonStyles={`w-full ${theme.colors.buttonBackgroundColor}`}
                  //buttonStyles={`w-full bg-discordGreen}`}
                  textStyles="text-white font-psemibold"
              />
          <StatusBar backgroundColor=""
          style="light"
        />
      </SafeAreaView>
    </ThemeProvider>
    
  );

}
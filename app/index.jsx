import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import {Link, router} from 'expo-router';
import CustomButton from '../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import {ThemeProvider, useTheme} from '../contexts/ThemeProvider';
import {ApiProvider, useApi} from '../contexts/ApiProvider';
import {useContext, useEffect} from 'react';

export default function App() {

  const {theme} = useTheme();
  const {api} = useApi();

  useEffect(() => {
    //if(api !== null && api.currentSheet !== null){
    if(api.currentSheet !== null){
      //router.push('/log-transaction-page')
      router.replace('/log-transaction-page')
    }      
  }, [api] )

  const signIn = async () => {
    let response = api.signIn();
    // get the folderId
    //let folderId = await api.getFolderId();

    // get spreadsheets
    await api.getSheets();
  }

  return (
    <ThemeProvider>
      <ApiProvider>
        <SafeAreaView className={`${theme.colors.primaryBackgroundColor} h-full justify-center`}>
                <CustomButton
                    title="Sign In"
                    //handlePress={()=> router.push('/log-transaction-page')}
                    handlePress={signIn}
                    buttonStyles={`w-full ${theme.colors.buttonBackgroundColor}`}
                    //buttonStyles={`w-full bg-discordGreen}`}
                    textStyles="text-white font-psemibold"
                />
            <StatusBar backgroundColor=""
            style="light"
          />
        </SafeAreaView>
      </ApiProvider>
    </ThemeProvider>
    
  );

}
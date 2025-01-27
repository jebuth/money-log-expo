import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import {Link, router} from 'expo-router';
import CustomButton from '../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import {ThemeProvider, useTheme} from '../contexts/ThemeProvider';
import {ApiProvider, useApi} from '../contexts/ApiProvider';
import {useContext, useEffect} from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';


// GoogleSignin.configure({
//   webClientId: '278478251960-c09cocjuunpascec7c30vmgbdimsfoua.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
//   scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets'], // what API you want to access on behalf of the user, default is email and profile
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '278478251960-c09cocjuunpascec7c30vmgbdimsfoua.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   //googleServicePlistPath: 'GoogleService-Info.plist', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
//   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
// });

//firebase
GoogleSignin.configure({
  webClientId: '278478251960-c09cocjuunpascec7c30vmgbdimsfoua.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets'], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '278478251960-c09cocjuunpascec7c30vmgbdimsfoua.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: 'GoogleService-Info', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

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
    let folderId = await api.getFolderId();

    // get spreadsheets
    
    await api.getSheets();
  }

  const signIn_google = async () => {
    try {
      console.log('1')
      await GoogleSignin.hasPlayServices();
      console.log('2')
      const response = await GoogleSignin.signIn();
      console.log('3')
     
      console.log(response)
    

      
    } catch (error) {
      console.log(error)
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <ThemeProvider>
      <ApiProvider>
        <SafeAreaView className={`${theme.colors.primaryBackgroundColor} h-full justify-center`}>
                <CustomButton
                    title="Sign In"
                    //handlePress={()=> router.push('/log-transaction-page')}
                    handlePress={signIn_google}
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
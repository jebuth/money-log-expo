import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import {Link, router} from 'expo-router';
import CustomButton from '../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full justify-center">
            <CustomButton
                title="Sign In"
                handlePress={()=> router.push('/log-transaction-page')}
                buttonStyles="w-full"
                textStyles="text-white font-psemibold"
            />
            
        <StatusBar backgroundColor=""
        style="light"
      />
    </SafeAreaView>
    
  );

}
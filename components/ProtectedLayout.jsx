import {Stack} from 'expo-router';
import {useApi} from '../contexts/ApiProvider'


// THIS IS NOT BEING USED

// Create a separate component for the protected content
const ProtectedLayout = () => {
    const { api } = useApi(); // Now this is within ApiProvider
  
    if (api.userAuthenticated) {
      return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
            </Stack>
            
        </>
      )
        
    }
  
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            </Stack>
        </>
    );
  };

export default ProtectedLayout




          
import { StyleSheet, Text, View, Image  } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Tabs, Redirect} from 'expo-router';
import {icons} from '../../constants';
import {useTheme} from '../../contexts/ThemeProvider'

const TabIcon = ({icon, color, name, focused}) => {

  

  return (
    <View className="items-center justify-center mt-4">
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-base`} style={{color:color}} >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  const {theme, toggleTheme, colors} = useTheme();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.tabBarActiveTintColor, // discordYellow
          tabBarInactiveTintColor: theme.colors.tabBarInActiveTintColor, // gainsboro
          tabBarStyle:{
            backgroundColor: theme.colors.tabBarStyleBackgroundColor, // discordBlack
            height: 84
          }
        }}
      >
        <Tabs.Screen
          name="log-transaction-page"
          options={{
            title: 'log-transaction-page',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name='Log'
                focused={focused}
              />
            )
          }}
        />
         <Tabs.Screen
          name="sheet-selection-page"
          options={{
            title: 'sheet-selection-page',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.bookmark}
                color={color}
                name='Sheets'
                focused={focused}
              />
            )
          }}
        />
         <Tabs.Screen
          name="account-page"
          options={{
            title: 'account-page',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name='Account'
                focused={focused}
              />
            )
          }}
        />
  
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})
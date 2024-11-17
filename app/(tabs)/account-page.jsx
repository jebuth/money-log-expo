import { StyleSheet, Text, Switch, View, ScrollView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, {useState, useRef, useEffect, useContext} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import CustomTextLabel from '../../components/CustomTextLabel'
import CustomFlatList from '../../components/CustomFlatList'
import SheetsFlatList from '../../components/SheetsFlatList'
import { Animated } from 'react-native'
import {sheetList} from '../../api/apidev'
import {icons} from '../../constants'
import {router} from 'expo-router';
import {useTheme} from '../../contexts/ThemeProvider'
import {useApi} from '../../contexts/ApiProvider'

const Account = () => {

  const {theme} = useTheme();
  const {api} = useApi();

  useEffect(() => {
    if(!api.userAuthenticated){
      //router.push('../../')
      //router.navigate('../../');
      router.replace('../../');
    }
      

  }, [api])

  const signOut =  async () => {
    await api.signOut();

    
    console.log('signOut')
    console.log(api.userAuthenticated)

    //router.push('../../')

  }


  return (
    <SafeAreaView className={`flex-1 ${theme.colors.primaryBackgroundColor}`}>
      <View className="flex-1">
        {/* Settings header */}
        <View className={`rounded-md mx-3 mt-3 flex-1 ${theme.colors.secondaryBackgroundColor}`}>
          <CustomTextLabel 
            containerStyles="mt-5 ml-10 mb-2" 
            // textStyles="text-3xl text-black font-pextrabold text-discordWhite" 
            textStyles={`text-3xl text-black font-pextrabold ${theme.colors.textColor}`} 
            text="Account"
          />
          <View className="h-0.5 mx-5 mb-4 bg-discordGrey" />

        {/* Settings items */}
          <View className={`flex flex-row justify-between mt-0 py-3 rounded-md mx-4 mb-3 shadow-md ${theme.colors.menuItemBackgroundColor}`}>
            <CustomTextLabel 
              containerStyles="mx-4" 
              //textStyles="text-xl text-discordWhite" 
              textStyles={`text-xl ${theme.colors.textColor}`} 
              text="Dark Mode"
            />

          <Switch
            className="mx-4"
            //trackColor={{ false: "#cccccc", true: "#34C759" }}  // iOS-style colors
            //thumbColor={theme.isDark ? "#ffffff" : "#000000"}
            trackColor={{ false: "#000000", true: "#009063" }}  // iOS-style colors
            thumbColor={theme.isDarkMode ? "#23272A" : "#99AAB5"}
            ios_backgroundColor="#cccccc"
            onValueChange={theme.toggleTheme}
            //onValueChange={toggleSwitch}
            value={theme.isDarkMode}
          />
          </View>

          <TouchableOpacity 
            className={` ${theme.colors.buttonBackgroundColor} flex flex-row justify-between mt-0 py-3 rounded-md mx-4 shadow-md`}
            onPress={signOut}
            >
              <CustomTextLabel 
                containerStyles="mx-4" 
                textStyles={`text-xl ${theme.colors.textColor}`} 
                text="Sign Out" 
              />
            </TouchableOpacity> 
        </View>
      </View>
    <StatusBar backgroundColor="" style="dark" />
  </SafeAreaView>
  )
}

export default Account


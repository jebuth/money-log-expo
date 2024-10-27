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
import {useTheme} from '../../contexts/ThemeProvider'

const Account = () => {

  const {theme, toggleTheme, colors} = useTheme();


  return (
    <SafeAreaView className={`flex-1 ${theme.colors.primaryBackgroundColor}`}>
       {/* <SafeAreaView className={`flex-1 bg-discordYellow`}> */}
      {/* <SafeAreaView className={`bg-discordBlack flex-1`}> */}

      <View className="flex-1">
        {/* Settings header */}
        {/* <View className="bg-discordDark rounded-xl mx-3 mt-3 flex-1"> */}
        {/* <View className={`rounded-xl mx-3 mt-3 flex-1 ${theme.colors.secondaryBackgroundColor} bg-iosOffWhite`}> */}
        <View className={`rounded-xl mx-3 mt-3 flex-1 ${theme.colors.secondaryBackgroundColor}`}>
          <CustomTextLabel 
            containerStyles="mt-5 ml-10 mb-2" 
            // textStyles="text-3xl text-black font-pextrabold text-discordWhite" 
            textStyles={`text-3xl text-black font-pextrabold ${theme.colors.textColor}`} 
            text="Settings"
          />
          <View className="h-0.5 mx-5 mb-4 bg-discordGrey" />

        {/* Settings items */}
        
          {/* <View className="bg-indigo flex flex-row justify-between mt-0 py-3 border border-black rounded-lg mx-4 mb-3"> */}
          {/* <View className="bg-zinc-700 flex flex-row justify-between mt-0 py-3 rounded-lg mx-4 mb-3"> */}
          <View className={`flex flex-row justify-between mt-0 py-3 rounded-lg mx-4 mb-3 ${theme.colors.menuItemBackgroundColor}`}>
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
            className={` ${theme.colors.buttonBackgroundColor} flex flex-row justify-between mt-0 py-3 rounded-lg mx-4`}>
            
              <CustomTextLabel 
                containerStyles="mx-4" 
                //textStyles="text-xl text-discordWhite" 
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


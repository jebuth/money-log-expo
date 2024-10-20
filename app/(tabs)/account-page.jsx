import { StyleSheet, Text, Switch, View, ScrollView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
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

const Account = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView className="flex-1 bg-gainsboro">

      <View className="flex-1">
        {/* Settings header */}
        <View className="bg-snow rounded-xl mx-3 mt-3 flex-1">
          <CustomTextLabel 
            containerStyles="mt-5 ml-10 mb-2" 
            textStyles="text-3xl text-black font-pextrabold" 
            text="Settings"
          />
          <View className="h-0.5 mx-10 mb-4 bg-gainsboro" />

        {/* Settings items */}
        
          <View className="flex flex-row justify-between mt-0 py-3 border border-black rounded-lg mx-4 mb-3">
            <CustomTextLabel 
              containerStyles="mx-4" 
              textStyles="text-xl" 
              text="Dark Theme"
            />

          <Switch
            className="mx-4"
            trackColor={{ false: "#cccccc", true: "#34C759" }}  // iOS-style colors
            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#cccccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          </View>

          <TouchableOpacity className="flex flex-row justify-between mt-0 py-3 border border-black rounded-lg mx-4">
            <CustomTextLabel 
              containerStyles="mx-4" 
              textStyles="text-xl" 
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


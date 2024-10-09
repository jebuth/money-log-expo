import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import CustomTextLabel from '../../components/CustomTextLabel'
import CustomFlatList from '../../components/CustomFlatList'

const LogTransaction = () => {
  return (
    <SafeAreaView className="bg-gainsboro h-full">
        <View>
          <View className="bg-snow rounded-xl mx-3 mt-3">
            <CustomTextLabel containerStyles="mt-5 ml-10 mb-2" textStyles="text-3xl text-black font-pextrabold" text="Tokyo Trip"></CustomTextLabel>
            <CustomTextLabel containerStyles="ml-10 mb-5" textStyles="text-4xl text-black" text="$5,359"></CustomTextLabel>
          </View>
          <View className="bg-snow rounded-xl mx-3 mt-3">
            <CustomTextInput containerStyles="w-1/2 mb-1 mt-4"/>
            <CustomTextInput containerStyles="w-1/2 mb-1 mt-1"/>
            <CustomTextInput containerStyles="w-1/2 mb-1 mt-1"/>
            <CustomButton buttonStyles="w-1/2 mb-4 mt-2" textStyles="text-snow font-psemibold" title="Log"/>
          </View>
          <View className="bg-snow rounded-xl mx-3 mt-3">
            <CustomFlatList/>
          </View>
        </View>
      
        <StatusBar backgroundColor=""
          style="dark"
        />
    </SafeAreaView>
  )
}

export default LogTransaction


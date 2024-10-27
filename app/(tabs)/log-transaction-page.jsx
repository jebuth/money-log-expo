import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import CustomTextLabel from '../../components/CustomTextLabel'
import CustomFlatList from '../../components/CustomFlatList'
import {categoryList} from '../../api/apidev'
import {useTheme} from '../../contexts/ThemeProvider'

const LogTransaction = () => {

  const {theme} = useTheme();

  return (
    //<SafeAreaView className="bg-gainsboro h-full">
    <SafeAreaView className={`${theme.colors.primaryBackgroundColor} h-full`}>
        <View>
          {/* <View className="bg-snow rounded-xl mx-3 mt-3"> */}
          <View className={`${theme.colors.secondaryBackgroundColor} rounded-xl mx-3 mt-3`}>
            <CustomTextLabel containerStyles="mt-5 ml-10 mb-2" textStyles={`text-3xl text-black font-pextrabold ${theme.colors.textColor}`} text="Tokyo Trip"></CustomTextLabel>
            <CustomTextLabel containerStyles="ml-10 mb-5" textStyles={`text-4xl text-black ${theme.colors.textColor}`} text="$5,359"></CustomTextLabel>
          </View>
          <View className={`${theme.colors.secondaryBackgroundColor} rounded-xl mx-3 mt-3`}>
            <CustomTextInput type="amount" keyboardType={'numeric'} containerStyles={`w-1/2 mb-1 mt-4 ${theme.colors.textInputBorderHighlightedColor}`} inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor} />
            <CustomTextInput keyboardType={'default'} containerStyles={`w-1/2 mb-1 mt-1 ${theme.colors.textInputBorderHighlightedColor}`} inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor} />
            <CustomTextInput keyboardType={'default'} containerStyles={`w-1/2 mb-1 mt-1 ${theme.colors.textInputBorderHighlightedColor}`} inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor} />
            <CustomButton buttonStyles={`w-1/2 mb-4 mt-2 ${theme.colors.buttonBackgroundColor}`} textStyles="text-snow font-psemibold" title="Log"/>
          </View>
          <View className={`${theme.colors.secondaryBackgroundColor} rounded-xl mx-3 mt-3`}>
            <CustomFlatList data={categoryList()}/>
          </View>
        </View>
      
        <StatusBar backgroundColor=""
          style="dark"
        />
    </SafeAreaView>
  )
}

export default LogTransaction


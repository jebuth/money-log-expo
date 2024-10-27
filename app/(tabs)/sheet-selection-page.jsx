import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
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
import {useTheme} from '../../contexts/ThemeProvider'

const SheetSelection = () => {

  const {theme, toggleTheme, colors} = useTheme();
  const [inputText, setInputText] = useState('');
  const isButtonEnabled = inputText.length >= 3;

  return (
    <SafeAreaView className={`flex-1 ${theme.colors.primaryBackgroundColor}`}>
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      className="flex-1"
      >
      <View className="flex-1">
        {/* Logs Section */}
        {/* <View className="bg-snow rounded-xl mx-3 mt-3 flex-1"> */}
        <View className={`rounded-xl mx-3 mt-3 flex-1 ${theme.colors.secondaryBackgroundColor}`}>
          <CustomTextLabel 
            containerStyles="mt-5 ml-10 mb-2" 
            textStyles={`text-3xl text-black font-pextrabold ${theme.colors.textColor}`} 
            text="Logs"
          />
          <View className="h-0.5 mx-5 bg-gainsboro" />
          <SheetsFlatList data={sheetList()} />
        </View>

        {/* Input Section - Fixed at bottom */}
        {/* <Animated.View className="bg-snow rounded-xl mx-3 mt-3 py-1 flex-row justify-between"> */}
        <Animated.View className={`${theme.colors.secondaryBackgroundColor} rounded-xl mx-3 mt-3 py-1 flex-row justify-between`}>
        <View className={'justify-center items-center w-4/5 ml-1.5'}>
            <View className={` ${theme.colors.textInputBackgroundColor} ${theme.colors.textInputBorderHighlightedColor} h-12 rounded-lg flex-row`}>
                <TextInput 
                  className={`${theme.colors.textColor} flex-1 text-2xl font-medium pl-2`}
                  placeHolder=''
                  placeholderTextColor="#7b7b8b"
                  value={inputText}
                  onChangeText={setInputText}
                  />
            </View>
          </View> 
          
          <TouchableOpacity 
            disabled={!isButtonEnabled}
            className="border-white border-2 mr-2 rounded-full"
            >
            <Image 
              source={icons.plus}
              resizeMode="contain"
              tintColor={isButtonEnabled ? theme.colors.addSheetsButtonStyle : "#CCCCCC"}
              className="w-12 h-12"
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
    <StatusBar backgroundColor="" style="dark" />
  </SafeAreaView>
  )
}

export default SheetSelection


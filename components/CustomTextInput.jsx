import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState  } from 'react'

const CustomTextInput = ({type, title, value, placeholder, handleChangeText, containerStyles, ...props}) => {
  return (
      <View className={`justify-center items-center ${type==="newSheetInput" && 'w-4/5 ml-1.5'}`}>
        <View className={`border-2 border-snow h-12 
          bg-gainsboro rounded-xl focus:border-darkerGreen flex-row ${containerStyles}`}>
            <TextInput 
 
              className="flex-1 text-black font-psemibold text-base"
              value={value}
              placeHolder={placeholder}
              placeholderTextColor="#7b7b8b"
              onChangeText={handleChangeText}
              />
        </View>
      </View> 
  )
};

export default CustomTextInput


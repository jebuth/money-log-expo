import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const CustomTextInput = ({title, value, placeholder, handleChangeText, containerStyles, ...props}) => {
  return (
<View className={`justify-center items-center`}>
    <View className={`border-2 border-snow h-12 px-4 
      bg-gainsboro rounded-xl focus:border-darkerGreen flex-row ${containerStyles}`}>
        <TextInput 
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeHolder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          />
    </View>

  </View>
  )
}

export default CustomTextInput


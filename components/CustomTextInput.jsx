import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState  } from 'react'

const CustomTextInput = ({type, title, value, placeholder, handleChangeText, containerStyles, inputStyles, keyboardType, ...props}) => {
  
  const [amountValue, setAmountValue] = useState('$');

  const handleAmountChangeText = (text) => {
    if (text[0] !== '$') {
      text = '$' + text;
    }
    setAmountValue(text);
  }
  
  return (
      <View className={`justify-center items-center ${type==="newSheetInput" && 'w-4/5 ml-1.5'}`}>
        <View className={`border-2 border-discordGrey h-12 
           rounded-xl flex-row ${containerStyles}`}>
            <TextInput 
              className={`flex-1 text-2xl font-medium rounded-lg text-right pr-2 ${inputStyles}`}
              value={type==="amount" ? amountValue : value}
              placeHolder={placeholder}
              placeholderTextColor="#7b7b8b"
              onChangeText={type==="amount" && handleAmountChangeText}
              keyboardType={keyboardType}
              // autoComplete={'off'}
              // autoCorrect={false}
              />
        </View>
      </View> 
  )
};

export default CustomTextInput


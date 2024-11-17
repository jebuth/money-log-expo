import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState  } from 'react'

const CustomTextInput = ({
  type, 
  title, 
  value, 
  placeholder, 
  onChangeText, 
  onKeyPress,
  onFocus,
  onBlur,
  handleChangeText, 
  maxLength,
  containerStyles, 
  inputStyles, 
  keyboardType, 
  ...props
}) => {
  
  // const [amountValue, setAmountValue] = useState('$');

  // const handleAmountChangeText = (text) => {
  //   if (text[0] !== '$') {
  //     text = '$' + text;
  //   }
  //   setAmountValue(text);
  // }
  
  return (
      <View className={`justify-center items-center ${type==="newSheetInput" && 'w-4/5 ml-1.5'}`}>
        <View className={`border-2 border-discordGrey h-12 
           rounded-lg flex-row ${containerStyles}`}>
            <TextInput 
              className={`flex-1 text-2xl font-medium rounded-md text-right pr-2 ${inputStyles}`}
              // value={type==="amount" ? amountValue : value}
              value={value}
              placeholder={placeholder}
              placeholderTextColor="#7b7b8b"
              //placeholderTextColor="#FFFFFF"
              
              onChangeText={onChangeText}
              handleChangeText={handleChangeText}
              onKeyPress={onKeyPress}
              onFocus={onFocus}
              onBlur={onBlur}
              // onChangeText={type==="amount" && handleAmountChangeText}
              keyboardType={keyboardType}
              // autoComplete={'off'}
              // autoCorrect={false}
              />
        </View>
      </View> 
  )
};

export default CustomTextInput


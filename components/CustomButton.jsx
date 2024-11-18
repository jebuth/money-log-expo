import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, buttonStyles, textStyles, isLoading}) => {
  return (
    <View className={`justify-center items-center`}>
          <TouchableOpacity 
              onPress={handlePress}
              activeOpacity={0.7}
              className={`rounded-3xl h-12 justify-center items-center ${buttonStyles} 
              ${isLoading ? 'opacity-50' : ''}`}
              disabled={isLoading}>
              <Text className={`font-psemibold text-lg ${textStyles}`}>{title}</Text>
          </TouchableOpacity>

      </View>
      
  )
}

export default CustomButton 

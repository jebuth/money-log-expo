import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomTextLabel = ({text, containerStyles, textStyles}) => {
  return (
    <View className={`${containerStyles} `}>
      <Text className={`${textStyles}`}>{text}</Text>
    </View>
  )
}

export default CustomTextLabel

const styles = StyleSheet.create({})
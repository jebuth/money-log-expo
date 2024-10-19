import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Animated } from 'react-native'
import CustomTextInput from './CustomTextInput'

const CustomTextInputButton = () => {
  return (
    <Animated.View className={ 'bg-snow rounded-xl mx-3 mt-3 py-1 justify-between flex-row'}>
        <CustomTextInput className="border-2 border-black"/>
        <TouchableOpacity onPress={toggleExpand} className="border-white border-2 rounded-full">
        <Image 
            source={icons.plus}
            resizeMode="contain"
            tintColor="#009063"
            className="w-12 h-12"
        />
        </TouchableOpacity>
    </Animated.View>
  )
}

export default CustomTextInputButton


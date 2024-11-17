import { StyleSheet, Text, View, Animated } from 'react-native'
import React, {useEffect } from 'react'

const CustomTextLabel = ({text, containerStyles, textStyles}) => {

  // this is for making hte text fade out and in on update. for the category.value 
  // const fadeAnim = new Animated.Value(1); // Start fully visible
  // useEffect(() => {
  //   // Create sequence of fade out then fade in
  //   Animated.sequence([
  //     // Fade out
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 1000, // 1 second
  //       useNativeDriver: true,
  //     }),
  //     // Fade in
  //     Animated.timing(fadeAnim, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }),
  //   ]).start(); // Start the animation
  // }, []); // Empty dependency array means run once on mount




  return (
    <View className={`${containerStyles} `}>
      <Text className={`${textStyles}`}>{text}</Text>
      {/* <Animated.Text
      style={{opacity: fadeAnim}}>
        Fade
      </Animated.Text> */}
    </View>
  )
}

export default CustomTextLabel

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import CustomTextLabel from '../../components/CustomTextLabel'
import CustomFlatList from '../../components/CustomFlatList'
import {categoryList} from '../../api/apidev'
import {useTheme} from '../../contexts/ThemeProvider'
import PickerSelect from 'react-native-picker-select'

const LogTransaction = () => {

  // picker select
  const [categoryInputFocused, setCategoryInputFocused] = useState(false);

  const {theme} = useTheme();

  const openPicker = () =>{
    setCategoryInputFocused(true);
  }
  const closePicker = () =>{
    setCategoryInputFocused(false);
  }

  return (
    //<SafeAreaView className="bg-gainsboro h-full">
    <SafeAreaView className={`${theme.colors.primaryBackgroundColor}  h-full`}>
        <View>
          {/* <View className="bg-snow rounded-xl mx-3 mt-3"> */}
          <View className={`${theme.colors.secondaryBackgroundColor} rounded-xl mx-3 mt-3`}>
            <CustomTextLabel containerStyles="mt-5 ml-10 mb-2" textStyles={`text-3xl text-black font-pextrabold ${theme.colors.textColor}`} text="Tokyo Trip"></CustomTextLabel>
            <CustomTextLabel containerStyles="ml-10 mb-5" textStyles={`text-4xl text-black ${theme.colors.textColor}`} text="$5,359"></CustomTextLabel>
          </View>
          <View className={`${theme.colors.secondaryBackgroundColor} rounded-xl mx-3 mt-3`}>
            <CustomTextInput type="amount" keyboardType={'numeric'} containerStyles={`w-1/2 mb-1 mt-4 ${theme.colors.textInputBorderHighlightedColor}`} inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor} />
            <CustomTextInput keyboardType={'default'} containerStyles={`w-1/2 mb-1 mt-1 ${theme.colors.textInputBorderHighlightedColor}`} inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor} />
            {/* <CustomTextInput keyboardType={'default'} containerStyles={`w-1/2 mb-1 mt-1 ${theme.colors.textInputBorderHighlightedColor}`} inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor} /> */}
            <PickerSelect
            style={{
              inputIOS:{
                textAlign: 'right',
                color: theme.isDarkMode ? '#DCDCDC' : '#23272A',
                fontSize: 20,
                fontWeight: 'bold',
                backgroundColor: theme.isDarkMode ? '#3F3F46' : '#DCDCDC',
                paddingLeft: 10,
                paddingRight: 15,
                borderRadius: 8,
                borderColor: !categoryInputFocused ? '#99AAB5' : theme.isDarkMode ? '#009063' : '#007AFF',
                // discord grey #99AAB5
                borderWidth: 2,
                height: 48,
                marginLeft: 91,
                width: '50%',
                marginTop: 3
              }
            }}
              onOpen={openPicker}  
              onClose={closePicker}
              placeholder={{
                label: 'category',
                value: '',
                color: 'grey'
              }}
              
               onValueChange={(value) => console.log(value)}
               items={[
                 { label: 'Football', value: 'football' },
                 { label: 'Baseball', value: 'baseball' },
                 { label: 'Hockey', value: 'hockey' },
               ]}
               darkTheme={theme.isDarkMode}
             />
            <CustomButton buttonStyles={`w-1/2 mb-4 mt-2 shadow-md ${theme.colors.buttonBackgroundColor}`} textStyles="text-snow font-psemibold" title="Log"/>
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


import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import CustomTextLabel from '../../components/CustomTextLabel'
import CustomFlatList from '../../components/CustomFlatList'
import {categoryList} from '../../api/apidev'
import {useTheme} from '../../contexts/ThemeProvider'
import {useApi} from '../../contexts/ApiProvider'
import PickerSelect from 'react-native-picker-select'

const LogTransaction = () => {
  const {theme} = useTheme();
  const {api} = useApi();

  


  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  // numeric input

  //const [value, setValue] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const formatPrice = (numericValue) => {

    if(numericValue.length > 3)
      numericValue = numericValue.replace(/^0/, '');
    else
      numericValue = numericValue.padStart(4, '0');  
    

    // Insert decimal point
    // return paddedValue.slice(0, -2) + '.' + paddedValue.slice(-2);
    return numericValue.slice(0, -2) + '.' + numericValue.slice(-2);
    
  };

  const handleChange = (text) => {

    //console.log(text)
    // Remove any non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    
    //console.log(numericValue)

    // Limit to 4 digits (xx.xx format)
    //if (numericValue.length > 4) return;
    
    setAmount(formatPrice(numericValue));
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleKeyPress = ({ nativeEvent: { key } }) => {
    if (key === 'Backspace') {
      console.log('back')
      const numericValue = amount.replace(/[^0-9]/g, '');
      if (numericValue.length > 1) {
        const newValue = numericValue.slice(0, -1);
        setAmount(formatPrice(newValue));
      } else {
        setAmount('00.00');
      }
    }
  };

  // numeric input end


  // picker select
  const [categoryInputFocused, setCategoryInputFocused] = useState(false);

  

  const openPicker = () =>{
    setCategoryInputFocused(true);
  }
  const closePicker = () =>{
    setCategoryInputFocused(false);
  }

  const pickerValues = () => {
    // console.log(api.currentSheet.categories);
    return api.currentSheet.categories.map(item => ({
      label: item.label,
      value: item.label
    }))
  }

  const formFilled = () => {
    return amount.length > 0 && description.length > 0
    && category.length > 0;
  }

  const log = async (amount, desc, cat) => {
    let response = await api.log(api.currentSheet.id, amount, desc, cat);

    if(response.status == 200){
      setAmount('');
      setDescription('');
      setCategory('');
    }
  }

  return (
    
    // api.currentSheet === null ? <></> :

    <SafeAreaView className={`${theme.colors.primaryBackgroundColor}  h-full`}>
      {api.userAuthenticated &&
      <View>
      {/* <View className="bg-snow rounded-xl mx-3 mt-3"> */}
      <View className={`${theme.colors.secondaryBackgroundColor} rounded-md mx-3 mt-3`}>
        {/* <CustomTextLabel containerStyles="mt-5 ml-10 mb-2" textStyles={`text-3xl text-black font-pextrabold ${theme.colors.textColor}`} text="Tokyo Trip"></CustomTextLabel> */}
        <CustomTextLabel containerStyles="mt-5 ml-10 mb-2" textStyles={`text-3xl text-black font-pextrabold ${theme.colors.textColor}`} text={`${api.currentSheet.title}`}></CustomTextLabel>
        <CustomTextLabel containerStyles="ml-10 mb-5" textStyles={`text-4xl text-black ${theme.colors.textColor}`} text={`${api.currentSheet.total}`}></CustomTextLabel>
      </View>
      <View className={`${theme.colors.secondaryBackgroundColor} rounded-md mx-3 mt-3`}>
        <CustomTextInput 
          type="amount" keyboardType={'numeric'} 
          containerStyles={`w-1/2 mb-1 mt-4 ${theme.colors.textInputBorderHighlightedColor}`} 
          inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor}
          value={amount}
          //value={value}
          placeholder={'00.00'}
          //onChangeText={(value) => setAmount(value)} 
          onChangeText={handleChange}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        <CustomTextInput keyboardType={'default'} 
          containerStyles={`w-1/2 mb-1 mt-1 ${theme.colors.textInputBorderHighlightedColor}`} 
          inputStyles={theme.colors.textInputBackgroundColor + ' ' + theme.colors.textColor}
          value={description}
          onChangeText={(value) => setDescription(value)}
          />
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
              label: '...',
              value: '',
              color: '#7b7b8b'
            }}
            value={category}
            onValueChange={(value) => setCategory(value)}
            // items={[
            //   { label: 'Football', value: 'football' },
            //   { label: 'Baseball', value: 'baseball' },
            //   { label: 'Hockey', value: 'hockey' },
            // ]}
           items={pickerValues()}
           darkTheme={theme.isDarkMode}
         />
        <CustomButton 
          buttonStyles={`w-1/2 mb-4 mt-2 shadow-md ${formFilled() ? theme.colors.buttonBackgroundColor : theme.colors.textInputBackgroundColor}`} 
          textStyles="text-snow font-psemibold" 
          title="Log"
          handlePress={() => log(amount, description, category)}
          />
      </View>
      <View className={`${theme.colors.secondaryBackgroundColor} rounded-md mx-3 mt-3`}>
        <CustomFlatList data={api.currentSheet.categories}/>
      </View>
    </View>
      
      }
    
  
    <StatusBar backgroundColor=""
      style="dark"
    />
</SafeAreaView>
   
  )
}

export default LogTransaction


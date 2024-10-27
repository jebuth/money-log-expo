import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {categoryList} from '../api/apidev'
import CustomTextLabel from './CustomTextLabel'
import {useTheme} from '../contexts/ThemeProvider'


const CustomFlatList = ({data}) => {

    const {theme, toggleTheme, colors} = useTheme();

    const renderItem = ({ item }) => (
        <>
        <View className="w-full flex flex-row justify-between mt-0 py-3">
            <CustomTextLabel containerStyles="ml-10" textStyles={`text-xl ${theme.colors.textColor}`} text={item.category} />
            <CustomTextLabel containerStyles="mr-10" textStyles={`text-xl ${theme.colors.secondaryTextColor}`} text={`$${item.amount}`} />
        </View>
        <View className="h-0.5 mx-10 bg-gainsboro" />
        </>
    );

    return (
        <>
        <View className="mt-5 max-h-[276px]">
            <FlatList
                className=""
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
        </>
    )
}

export default CustomFlatList

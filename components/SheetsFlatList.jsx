import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {categoryList} from '../api/apidev'
import CustomTextLabel from './CustomTextLabel'
import {useTheme} from '../contexts/ThemeProvider'


const SheetsFlatList = ({data}) => {

    const {theme, toggleTheme, colors} = useTheme();

    const renderItem = ({ item }) => (
        <>
            <View className={`rounded-lg my-1 shadow-sm ${theme.colors.menuItemBackgroundColor}`}>
                <TouchableOpacity className="rounded-lg w-full flex flex-row justify-between px-6">
                    <CustomTextLabel 
                        containerStyles="py-3" 
                        textStyles={`text-xl ${theme.colors.textColor}`}
                        text={item.title}
                    />

                    <CustomTextLabel 
                        containerStyles="py-3" 
                        textStyles={`text-xl ${theme.colors.secondaryTextColor}`}
                        text={item.total}
                    />
                </TouchableOpacity>
            </View> 
            {/* <View className="h-0.5 mx-10 bg-gainsboro" /> */}
        </>
    );

    return (
        <>
            <View className="mt-2 max-h-[515]  rounded-lg mx-4">
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    className="w-full"
                />
            </View>

            {/* <View className="mt-5 max-h-[530]">
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    className="w-full"
                />
            </View> */}
        </>
    )

}

export default SheetsFlatList

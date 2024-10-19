import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {categoryList} from '../api/apidev'
import CustomTextLabel from './CustomTextLabel'


const CustomFlatList = ({data}) => {
    const renderItem = ({ item }) => (
        <>
        <View className="w-full flex flex-row justify-between mt-0 py-3">
            <CustomTextLabel containerStyles="ml-10" textStyles="text-xl" text={item.category}></CustomTextLabel>
            <CustomTextLabel containerStyles="mr-10" textStyles="text-xl" text={`$${item.amount}`}></CustomTextLabel>
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

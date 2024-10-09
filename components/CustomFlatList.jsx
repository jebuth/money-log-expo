import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {flatListData} from '../api/apidev'
import CustomTextLabel from './CustomTextLabel'


const CustomFlatList = ({data, containerStyles, textStyles}) => {

    const datatest = [
        { category: "Food" , amount: 240}, 
        { category: "Groceries" , amount: 340}, 
        { category: "Health" , amount: 20}, 
        { category: "Transportation" , amount: 241}, 
        { category: "Personal" , amount: 244}, 
        { category: "Entertainment" , amount: 220}, 
        { category: "Utilities" , amount: 244},
        { category: "Pets" , amount: 2210},
        { category: "Something" , amount: 220}, 
        { category: "Somethings" , amount: 244},
        { category: "Something else" , amount: 2210},
    ]


    const renderItem = ({ item }) => (
        <>
        <View className="w-full flex flex-row justify-between mt-0 py-3">
            <CustomTextLabel containerStyles="ml-10" textStyles="text-xl" text={item.category}></CustomTextLabel>
            <CustomTextLabel containerStyles="mr-10" textStyles="text-xl" text={`$${item.amount}`}></CustomTextLabel>
        </View>
        {/* <View style={styles.separator} /> */}
        <View className="h-0.5 mx-10 bg-gainsboro" />
        </>
    );

    return (
        <>
        <View className="mt-5 max-h-[276px]">
            <FlatList
                className=""
                data={datatest}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    separator: {
      height: 1,  // Height of the separator
      backgroundColor: 'pink',  // Light grey color for the divider
      marginHorizontal: 10,  // Optional, adds padding on the left and right
    },
  });

export default CustomFlatList

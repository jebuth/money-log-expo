import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {categoryList} from '../api/apidev'
import CustomTextLabel from './CustomTextLabel'


const SheetsFlatList = ({data}) => {
    const renderItem = ({ item }) => (
        <>
            <View className="w-full py-1">
                <TouchableOpacity 
                    // className="border border-black rounded-lg w-full flex flex-row"
                    className="rounded-lg w-full flex flex-row px-6"
                >
                    <CustomTextLabel 
                        containerStyles="py-2 px-4" 
                        textStyles="text-xl" 
                        text={item.title}
                    />
                </TouchableOpacity>
            </View> 
            <View className="h-0.5 mx-10 bg-gainsboro" />
        </>
    );

    return (
        <>
            <View className="mt-5 max-h-[530]">
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    className="w-full"
                />
            </View>
        </>
    )
    // const renderItem = ({ item }) => (
    //     <>
    //         <View className="w-full flex flex-row justify-between mt-0 py-3">
    //             <TouchableOpacity 
    //             className="border border-black rounded-lg px-2 py-1"
    //             >
    //                 <CustomTextLabel containerStyles="ml-10" textStyles="text-xl" text={item.title}></CustomTextLabel>
    //             </TouchableOpacity>
    //         </View> 
    //         <View className="h-0.5 mx-10 bg-gainsboro" />
    //     </>
    // );

    // return (
    //     <>
    //     <View className="mt-5 max-h-[530]">
    //         <FlatList
    //             className=""
    //             data={data}
    //             renderItem={renderItem}
    //             keyExtractor={(item, index) => index.toString()}
    //         />
    //     </View>
    //     </>
    // )
}

export default SheetsFlatList

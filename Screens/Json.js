import React, { Component } from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import ImageCard from './ImageCard'

export const Json = () => {

    const url = "https://hsto.org/web/410/f87/577/410f87577be94226aa5f913bb23e7258.png"

    const friends = [
        { name: 'Emin', age: 28 },
        { name: 'Kamil', age: 23 },
        { name: 'Anar', age: 29 },
        { name: 'Maqa', age: 27 },
        { name: 'Omer', age: 27 },
        { name: 'Sahil', age: 23 },
    ]
    return (
        <View>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>Name: {item.name}, Age: {item.age}</Text>
                        </View>
                    )
                }}
            />
            <Button title="Alert" onPress={() => alert('Hello')} />
            <ImageCard img={require('../src/bal.jpg')} score={9} />
        </View>
    )
}


export default Json
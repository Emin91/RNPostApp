import React, { useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

const RandomColors = () => {
    const [colors, setColors] = useState([])
    return (
        <View>
            <Button title="Add colors" onPress={() => {
                setColors([...colors, randomBg()])
            }} />
            <FlatList
                data={colors}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 100, height: 100, backgroundColor: item, }} />
                    )
                }}
            />
        </View>
    )
}

const randomBg = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

export default RandomColors

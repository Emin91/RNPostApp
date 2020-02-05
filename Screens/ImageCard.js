import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export const ImageCard = ({ img, score }) => {
    return (
        <View>
            <Text> textInComponent </Text>
            <Image
                style={{ width: '100%', height: 250 }}
                source={img}
                /*source={{ uri: img }}*/ />
            <Text>Score is - {score + 1}</Text>
        </View>
    )
}

export default ImageCard

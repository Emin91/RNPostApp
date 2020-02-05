import React, { Component } from 'react'
import { FlatList, View, Text } from 'react-native'
import { DATA } from '../src/data'
import { Post } from '../src/components/Post'

const HomeScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('S2', { postId: post.id })
    }

    return (
        < View >
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
            />
        </View >
    )
}

export default HomeScreen
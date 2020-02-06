import React from 'react'
import { Text, View, Image, ScrollView, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { DATA } from '../src/data'
import ColorValueChange from './ColorValueChange'

const DetailsScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(p => p.id === postId)
    const removeHandler = () => {
        alert('Deleted: \n' + post.text)
    }
    return (
        <View>
            <Image source={{ uri: post.id }} style={styles.image} />
            <View style={styles.textWrap}>
                <ScrollView style={{ backgroundColor: 'red', }}>
                    <Text style={styles.title}>{post.text}</Text>
                </ScrollView>
            </View>
            <TouchableNativeFeedback
                onPress={removeHandler}
                background={TouchableNativeFeedback.Ripple('green')}>
                <View style={styles.deleteBtnView}>
                    <Text style={styles.deleteBtn}>Delete</Text>
                </View>
            </TouchableNativeFeedback>
            <ColorValueChange />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,
        //backgroundColor: '#457458',
    },
    title: {
        fontSize: 15,
        color: '#000',
    },
    deleteBtnView: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#124574',
    },
    deleteBtn: {
        color: '#fff',
        fontSize: 20
    },

})

DetailsScreen.navigationOptions = ({ navigation }) => {
    const postId = navigation.getParam('postId')
    return {
        headerTitle: 'Post ' + postId
    }
}

export default DetailsScreen

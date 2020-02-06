import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Comp2 extends Component {
    render() {
        return (
            <View>
                <Text> Good: {this.props.title} </Text>
            </View>
        )
    }
}

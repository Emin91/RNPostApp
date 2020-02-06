import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Comp2 from './Comp2'

export default class Comp1 extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Comp2 title={'hello from comp 1'} />
            </View>
        )
    }
}

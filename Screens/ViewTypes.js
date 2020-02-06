import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const ViewTypes = () => {
    const [change, setChange] = useState(true)
    const [size, setSize] = useState(20)
    const [alignText, setAlignText] = useState('center')
    return (
        <View>
            <Button title="Hide view" onPress={() => setChange(false)} color='red' />
            <Button title="Show view" onPress={() => setChange(true)} color='green' />
            <Button title="Increase text size" onPress={() => setSize(size + 1)} color='orange' />
            <Button title="Change position" onPress={() => setAlignText('flex-start')} color='grey' />
            {change ? <View style={{ backgroundColor: '#145236', alignItems: alignText }}>
                <Text style={{ fontSize: size, color: '#fff' }}>Simple text</Text></View> : null}
        </View>
    )
}

export default ViewTypes

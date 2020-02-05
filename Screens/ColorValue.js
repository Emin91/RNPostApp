import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ColorValueChange from './ColorValueChange'

const COLOR_VALUE = 20
const ColorValue = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
            default:
                return
        }
    }
    return (
        <View>
            <ColorValueChange
                color={"red"}
                onIncrease={() => setColor('red', COLOR_VALUE)}
                onDecrease={() => setColor('red', -1 * COLOR_VALUE)} />
            <ColorValueChange
                color={"green"}
                onIncrease={() => setColor('green', COLOR_VALUE)}
                onDecrease={() => setColor('green', -1 * COLOR_VALUE)} />
            <ColorValueChange
                color={"blue"}
                onIncrease={() => setColor('blue', COLOR_VALUE)}
                onDecrease={() => setColor('blue', -1 * COLOR_VALUE)} />
            <View style={{ width: 200, height: 200, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    )
}

export default ColorValue

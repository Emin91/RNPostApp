import React, { useReducer, useEffect } from 'react'
import { View, Text } from 'react-native'
import ColorValueChange from './ColorValueChange'

const COLOR_VALUE = 20

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount }
        case 'green':
            return { ...state, green: state.green + action.amount }
        case 'blue':
            return { ...state, blue: state.blue + action.amount }
        default:
            return state
    }
}

const ColorValue = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state

    useEffect(() => {
        console.log(`Вы нажали ${red} раз`)
    });

    return (
        <View>
            <ColorValueChange
                color={"red"}
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_VALUE })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_VALUE })} />
            <ColorValueChange
                color={"green"}
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_VALUE })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_VALUE })} />
            <ColorValueChange
                color={"blue"}
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_VALUE })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_VALUE })} />
            <View style={{ width: 200, height: 200, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    )
}

export default ColorValue

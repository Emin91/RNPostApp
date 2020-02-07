import React, { useState } from 'react'
import { View, Text, StyleSheet, Picker, } from 'react-native'



const MoveView = () => {

    const [justify, setJustify] = useState('center')
    const [align, setAlign] = useState('center')
    const [direct, setDirect] = useState('column')

    const setOk=()=>{
        if(align === 'center' && justify === 'center') {
            alert(`justifyContent: ${justify},  alignItem: ${align}`)
        }
    }
    
    return (
        <View style={styles.mainView}>
            <View style={{ flex: 0.05, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#404040', }}>
                <Text style={{ fontSize: 15, color: '#fff', }}>JustifyContent</Text>
                <Text style={{ fontSize: 15, color: '#fff', }}>AlignItems</Text>
                <Text style={{ fontSize: 15, color: '#fff', }}>FlexDirection</Text>
            </View>
            <View style={{ flex: 0.1, flexDirection: 'row', backgroundColor: '#404040', alignItems: 'flex-end' }}>
                <Picker
                    selectedValue={justify}
                    style={{ flex: 1, backgroundColor: '#27ae60', color: '#fff' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setJustify(itemValue)
                    }>
                    <Picker.Item label="center" value="center" />
                    <Picker.Item label="flex-end" value="flex-end" />
                    <Picker.Item label="flex-start" value="flex-start" />
                    <Picker.Item label="space-around" value="space-around" />
                    <Picker.Item label="space-between" value="space-between" />
                    <Picker.Item label="space-evenly" value="space-evenly" />
                </Picker>
                <Picker
                    selectedValue={align}
                    style={{ flex: 1, backgroundColor: '#2980b9', color: '#fff' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setAlign(itemValue)
                    }>
                    <Picker.Item label="baseline" value="baseline" />
                    <Picker.Item label="center" value="center" />
                    <Picker.Item label="flex-end" value="flex-end" />
                    <Picker.Item label="flex-start" value="flex-start" />
                    <Picker.Item label="stretch" value="stretch" />
                </Picker>
                <Picker
                    selectedValue={direct}
                    style={{ flex: 1, backgroundColor: '#c0392b', color: '#fff' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setDirect(itemValue)
                    }>
                    <Picker.Item label="column" value="column" />
                    <Picker.Item label="column-reverse" value="column-reverse" />
                    <Picker.Item label="row" value="row" />
                    <Picker.Item label="row-reverse" value="row-reverse" />
                </Picker>
            </View>
            <View style={{ flex: 1, flexDirection: direct, justifyContent: justify, alignItems: align }}>
                <View style={{ width: 70, height: 70, backgroundColor: 'green', }} />
                <View style={{ width: 70, height: 70, backgroundColor: 'blue', }} />
                <View style={{ width: 70, height: 70, backgroundColor: 'red', }} />
            </View>
            {setOk()}
        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#141414',
    },
    touchBtns: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchBtnsText: {
        fontSize: 25,
        color: '#fff',
    }
})

export default MoveView
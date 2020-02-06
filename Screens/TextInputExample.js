import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextInputExample = () => {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const names = {
        name: 'Emin'
    }
    return (
        <View>
            <Text style={styles.text}>Enter name</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your name"
                value={name}
                maxLength={25}
                onChangeText={(newText) => setName(newText)}
            ></TextInput>
            <Text style={styles.text}>Your name is: {name} </Text>
            {(name === names.name ? <Text>Your name is {name}</Text> : null)}
            <Text style={styles.text}>Enter password</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your name"
                value={pass}
                maxLength={25}
                textContentType={'password'}
                onChangeText={(newPass) => setPass(newPass)}
            ></TextInput>
            <Text style={styles.text}>Password is: {pass} </Text>
            {pass.length > 6 ? <Text>Parol bolshe 6</Text> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderColor: '#626262',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
    },
    text: {
        fontSize: 20,
    }
})

export default TextInputExample

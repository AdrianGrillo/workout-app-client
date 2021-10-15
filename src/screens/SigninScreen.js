import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AuthForm from '../components/AuthForm'

const SigninScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text>Signin Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default SigninScreen
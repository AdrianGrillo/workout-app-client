import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/spacer'

const SignupScreen = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up</Text>
            </Spacer>
            <Spacer />
            <Input label='Email' />
            <Spacer />
            <Input label='Password' />
            <Spacer />
            <Spacer>
                <Button title='Sign Up' />
            </Spacer>
        </View>
    )
}

// Remove header from top of SignUp component.
SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignupScreen
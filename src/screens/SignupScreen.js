import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/spacer'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return ( 
        <View style={styles.container}>
            <Spacer>
                <Text h3 style={styles.header}>Sign Up</Text>
            </Spacer>
            <Spacer />
            <Input 
                label='Email' 
                value={email}  
                onChangeText={setEmail} 
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                secureTextEntry
                label='Password' 
                value={password} 
                onChangeText={setPassword} 
                autoCapitalize='none'
                autoCorrect={false}
            />
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
    },
    header: {
        textAlign: 'center'
    }
})

export default SignupScreen
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import  { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = React.useContext(AuthContext)
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
            {/* If an errorMessage exists, display it */}
            { state.errorMessage ? (
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
             ) : null }
            <Spacer>
                <Button 
                    title='Sign Up'
                    onPress={() => signup({ email, password })} 
                />
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
    },
    errorMessage: {
        fontSize: 16,
         color: 'red',
         marginLeft: 15, 
         marginTop: 15
    }
})

export default SignupScreen
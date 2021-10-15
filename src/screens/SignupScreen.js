import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Spacer from '../components/Spacer'

const SignupScreen = () => {
    const { state, signup } = React.useContext(AuthContext)

    return ( 
        <View style={styles.container}>
            <AuthForm
                headerText='Sign up'
                errorMessage={state.errorMessage}
                submitButtonText='Sign up'
                onSubmit={signup}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}

// Remove header from SignupScreen
SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    link: {
        color: 'blue'
    }
})

export default SignupScreen
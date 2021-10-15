import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

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
            <NavLink 
                routeName='Signin' 
                text='Already have an account? Sign in instead'
            />
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
    }
})

export default SignupScreen
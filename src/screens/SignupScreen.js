import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = React.useContext(AuthContext)

    return ( 
        <View style={styles.container}>
            {/* When navigating between Signup and Signin, clear error message in state */}
            <NavigationEvents 
                onWillBlur={clearErrorMessage} 
                onWillFocus={clearErrorMessage}
            />
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
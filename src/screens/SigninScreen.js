import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    const { state, signin } = React.useContext(AuthContext)

    return ( 
        <View style={styles.container}>
            <AuthForm
            headerText='Sign in'
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText='Sign in'
            />
            <NavLink 
                routeName='Signup'
                text='Dont have an account? Sign up instead'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

// Disable header 
SigninScreen.navigationOptions = {
    header: false
}

export default SigninScreen
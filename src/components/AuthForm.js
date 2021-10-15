import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return ( 
        <>
            <Spacer>
                <Text h3 style={styles.header}>{headerText}</Text>
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
            { errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
             ) : null }
            <Spacer>
                <Button 
                    title={submitButtonText}
                    onPress={() => onSubmit({email, password})} 
                />
            </Spacer>
        </>
    )
}

const styles=StyleSheet.create({
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

export default AuthForm
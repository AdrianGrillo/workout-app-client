import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = React.useContext(AuthContext)

    return <>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer />
        <Button 
            title='Sign out' 
            onPress={signout} 
        />
    </>
}

const styles = StyleSheet.create({})

export default AccountScreen
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountScreen = () => {
    const { signout } = React.useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
                    <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Spacer />
            <Button 
                title='Sign out' 
                onPress={signout} 
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default AccountScreen
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { requestForegroundPermissionsAsync } from 'expo-location'

const TrackCreateScreen = () => {
    const [err, setErr] = React.useState(null)

    // Ask permission from users device if the app can use thier devices location data
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync()

            if(!granted) {
                throw new Error('Location permission not granted')
            }
        } catch {
            setErr(e)
        }
    }

    React.useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
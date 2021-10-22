import '../_mockLocation'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
    const [err, setErr] = React.useState(null)
    const { addLocation } = React.useContext(LocationContext)

    // Ask permission from users device if the app can use thier devices location data
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync()

            if(!granted) {
                throw new Error('Location permission not granted')
            }

            // When tracking the users location, use high accuracy and add a location update to the app state either every second or 10 meters, whichever comes first
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, location => {
                addLocation(location)
            })
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
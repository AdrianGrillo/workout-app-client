import React from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default callback => {
    const [err, setErr] = React.useState(null)

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
            },
            callback
        )} catch(e) {
            setErr(e)
        }
    }

    React.useEffect(() => {
        startWatching()
    }, [])

    return [err]
}

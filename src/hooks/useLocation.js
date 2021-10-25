import React from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { sub } from 'react-native-reanimated'

export default (shouldTrack, callback) => {
    const [err, setErr] = React.useState(null)
    const [subscriber, setSubscriber] = React.useState(null)

    // Ask permission from users device if the app can use thier devices location data
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync()

            if(!granted) {
                throw new Error('Location permission not granted')
            }

            // When tracking the users location, use high accuracy and add a location update to the app state either every second or 10 meters, whichever comes first
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
            callback
        )
        setSubscriber(sub)
    } catch(e) {
            setErr(e)
        }
    }

    React.useEffect(() => {
        if(shouldTrack) {
            startWatching()
        } else {
            subscriber.remove()
            setSubscriber(null)
        }
    }, [shouldTrack, callback])

    return [err]
}

import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001

// Create a fake location
const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -82.467671 + increment * tenMetersWithDegrees,
            latitude: 28.061718 + increment * tenMetersWithDegrees
        }
    }
}

// Add a new fake location from our helper function to the location library every second
let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)
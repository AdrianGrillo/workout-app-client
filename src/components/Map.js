import React from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation } } = React.useContext(LocationContext)

    // Before we have a currentLocation of the user, show a spinner
    if(!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} /> 
    }

    return (
        <MapView 
            style={styles.map} 
            // Spread the currentLocation coords from our state onto the initialRegion prop, the initial position of the map will be the location of the user
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.001
            }}
            // Keep the map centered on the user as they move through out the world
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.001
            }}
        >
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map
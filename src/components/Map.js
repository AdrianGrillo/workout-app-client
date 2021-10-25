import React from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
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
            // // Uncomment this block of code to keep the map centered on the user as they move through out the world
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.0001,
            //     longitudeDelta: 0.001
            // }}
        >
            {/* Display a circle to indicate the region where the user is located on the map */}
            <Circle 
                center={currentLocation.coords}
                radius={30}
                strokeColor='rgba(158, 158, 255, 1.0)'
                fillColor='rgba(158, 158, 255, 0.3)'
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map
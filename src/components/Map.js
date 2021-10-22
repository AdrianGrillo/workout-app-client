import React from 'react'
import { Text, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
    let points = []
    for(let i = 0; i < 20; i++) {
        points.push({
            latitude: 28.061718 + i * 0.001,
            longitude: -82.467671 + i * 0.001
        })
    }

    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 28.061718,
                longitude: -82.467671,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.001
            }}
        >
            <Polyline coordinates={points} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map
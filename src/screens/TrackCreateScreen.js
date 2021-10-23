import '../_mockLocation'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ isFocused }) => {
    // Location context isnt extracted to hook because it's specific to creating a track
    const { addLocation } = React.useContext(LocationContext)

    // Pass addLocation as a callback to useLocation, this will be used to update app state with new location data that's being generated from watchLocationAsync inside the hook
    const [err] = useLocation(isFocused, addLocation)
    
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
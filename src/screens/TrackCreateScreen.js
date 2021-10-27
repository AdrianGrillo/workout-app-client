import '../_mockLocation'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    // Location context isnt extracted to hook because it's specific to creating a track
    const { state: { recording }, addLocation } = React.useContext(LocationContext)

    // Only give a new version of callback when state.recording changes to avoid a stale reference inside the useEffect hook in useLocation
    const callback = React.useCallback(location => {
        addLocation(location, recording)
    }, [recording])

    // Pass addLocation as a callback to useLocation, this will be used to update app state with new location data that's being generated from watchLocationAsync inside the hook
    const [err] = useLocation(isFocused || recording, callback)
    
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    ) 
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20} />
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
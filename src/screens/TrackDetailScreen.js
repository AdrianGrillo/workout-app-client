import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
    const { state } = React.useContext(TrackContext)
    const _id = navigation.getParam('_id')

    // Find a track with the ID of the one the user pressed on TrackListScreen
    const track = state.find(t => t._id === _id)

    return <Text style={{ fontSize: 48 }}>{track.name}</Text>
}

const styles = StyleSheet.create({})

export default TrackDetailScreen
import React from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'

// This hook will take the locations and name properties from LocationContext and pass it to an action function from TrackContext, coordinating information between the two
export default () => {
    const { createTrack } = React.useContext(TrackContext)
    const { state: { name, locations } } = React.useContext(LocationContext)

    const saveTrack = () => {
        createTrack(name, locations)
    }

    return [saveTrack]
}

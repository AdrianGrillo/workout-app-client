import React from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'
import { navigate } from '../navigationRef'

// This hook will take the locations and name properties from LocationContext and pass it to an action function from TrackContext, coordinating information between the two
export default () => {
    const { createTrack } = React.useContext(TrackContext)
    const { state: { name, locations }, reset } = React.useContext(LocationContext)

    // Reset global state only after createTrack has finished storing user's track
    const saveTrack = async () => {
        await createTrack(name, locations)
        reset()
        navigate('TrackList')
    }

    return [saveTrack]
}

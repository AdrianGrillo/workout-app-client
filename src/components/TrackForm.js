import React from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
    const { 
        state: { name, recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName 
    } = React.useContext(LocationContext)

    return <>
        <Spacer />
        <Input 
            placeholder='Enter Name' 
            onChangeText={changeName}
            value={name}
        />
        <Spacer>
            {recording ? (
                <Button title={'Stop'} onPress={stopRecording} /> 
            ) : (
                <Button title={'Start Recording'} onPress={startRecording} /> 
            )}

        </Spacer>
    </>
}

export default TrackForm
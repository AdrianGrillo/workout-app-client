import React from 'react'
import {Context as AuthContext } from '../context/AuthContext'

// When the user first opens the application, try to log them in with a locally stored jwt.
const ResolveAuthScreen = () => {
    const { tryLocalSignin } = React.useContext(AuthContext)

    React.useEffect(() => {
        tryLocalSignin
    }, [])

    return null
}

export default ResolveAuthScreen
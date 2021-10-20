import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error' :
            return {
                ...state,
                errorMessage: action.payload
                
            }
        case 'signin' : 
            return {
                errorMessage: '',
                token: action.payload
            }
        case 'clear_error_message' :
            return {
                ...state,
                errorMessage: ''
            }
        default :
            return state
    }
}

// Check if the user has a token already stored on their local device, if so, then log them in.
const tryLocalSignin = dispatch = async () => {
    const token = await AsyncStorage.getItem('token')
    if(token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('Signup')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            
            // Store jwt on users device so signin will persist through app restarts
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token })

            navigate('TrackList')
        } catch(err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup' })
        }
    }

const signin = dispatch => async ({ email, password }) => {
    try {
        // Post to signin route then store token on local device for future use
        const response = await trackerApi.post('signin', { email, password })

        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })

        navigate('TrackList')
    } catch(err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with signin' })
    }
}

const signout = dispatch => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    {         
        errorMessage: '',
        token: null
    }
)
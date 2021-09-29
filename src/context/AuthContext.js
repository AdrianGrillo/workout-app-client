import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error' :
            return {
                errorMessage: action.payload,
                ...state
            }
        default :
            return state
    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            console.log(response.data)
        } catch(err) {
            dispatch({ type: 'add_error', payload: 'Oops, something went wrong' })
        }
    }
}

const signin = dispatch => {
    return ({ email, password }) => {

    }
}

const signout = dispatch => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    {         
        errorMessage: '',
        isSignedIn: false,
    }
)
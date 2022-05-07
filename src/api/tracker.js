import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
    baseURL: 'https://1e26-47-205-17-247.ngrok.io'
})

// Every time we make a reqest to the server, check if there's a jwt stored locally. If there is, attach it to the request to authenticate it 
instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token')
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

export default instance
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../store/authSlice.js'

const store = configureStore({
    reducer:{
         auth:authReducer //“Put all the state from authSlice under the key auth. 
    },
    devTools: true, 
})

export default store;
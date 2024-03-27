import { configureStore } from "@reduxjs/toolkit";
import roomSlice from './Slices/roomNameSlice'

const store = configureStore({
    reducer: {
        roomname: roomSlice
    }
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name:'roomName',
    initialState:{
        roomName: ''
    },
    reducers:{
        setRoomName(state,action) {
            state.roomName = action.payload
        }
    }
})

export default roomSlice.reducer;

export const { setRoomName } = roomSlice.actions;
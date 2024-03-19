import { createSlice } from "@reduxjs/toolkit";

const tracks = createSlice({
    name:'tracks',
    initialState:{
       modePlay:false
    },
    reducers:{
       onModePlay : (state,action)=>{
           state.modePlay = true
       },
       offModePlay : (state,action)=>{
        state.modePlay = false
    }
    }
})

export const {onModePlay,offModePlay}=tracks.actions

export default tracks.reducer
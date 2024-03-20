import { createSlice } from "@reduxjs/toolkit";

const tracks = createSlice({
    name:'tracks',
    initialState:{
       modePlay:false,
       tracksHome:[]
    },
    reducers:{
       onModePlay : (state,action)=>{
           state.modePlay = true
       },
       offModePlay : (state,action)=>{
        state.modePlay = false
    },
      setTracksHome : (state,action)=>{
          state.tracksHome = action.payload
      }
    }
})

export const {onModePlay,offModePlay,setTracksHome}=tracks.actions

export default tracks.reducer
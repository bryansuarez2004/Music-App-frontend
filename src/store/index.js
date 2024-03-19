import { configureStore } from "@reduxjs/toolkit";
import tracksSlices from "./slices/tracks.slices";

export default configureStore({
    reducer:{
     tracks:tracksSlices
    }
})
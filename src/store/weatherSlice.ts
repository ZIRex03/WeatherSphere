
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather: {},
    isLoading: false,

}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    }
})

export default weatherSlice.reducer;
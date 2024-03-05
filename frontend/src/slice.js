import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'slice',
    initialState: {
        text: 'Hello'
    },
    reducers: {

    }
})

export const { } = slice.actions
export default slice.reducer

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    num: 3
}

export const numberSlice = createSlice({
    name: 'myfirstslice',
    initialState,
    reducers: {
        addToValue: (state, action: PayloadAction<number>) => {
            state.num = state.num + action.payload
        }
    }
});

export const myreduxstore = configureStore({
    reducer: numberSlice.reducer
});






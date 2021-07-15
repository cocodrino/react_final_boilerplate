import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getAsyncValue} from "./counterThunks";
import {Counter} from "./counterTypes";


const initialState: Counter = {
    counter : 0,
    status: "DONE"
};

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.counter = state.counter + action.payload
        },

        subtract: (state, action: PayloadAction<number>) => {
            state.counter = state.counter - action.payload
        },
    },

    extraReducers: {
        [getAsyncValue.fulfilled.type]: (state, action: PayloadAction<string>) => {
            console.log('full ', action.payload);
            state.counter += action.payload.length;
            return state
        },
        [getAsyncValue.rejected.type]: (state, action: PayloadAction<number>) => {
            console.log('rejecting ', action.payload);
            return state;
        },
    },
});


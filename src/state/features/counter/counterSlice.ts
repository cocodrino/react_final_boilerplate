import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getAsyncValue} from "./counterThunks";
import {Counter} from "./counterTypes";
import CounterResponse from "../../../shared/types/apiResponse/Counter";


const initialState: Counter = {
    count : 0,
};

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            // NOTE it's not necessary {...state,count: state.count + action.payload}
            state.count = state.count + action.payload
        },

        subtract: (state, action: PayloadAction<number>) => {
            state.count = state.count - action.payload
        },
    },

    extraReducers: {
        [getAsyncValue.fulfilled.type]: (state, action: PayloadAction<CounterResponse>) => {
            console.log('received value ', action.payload);
            state.count = action.payload.count;
            state.status = 'DONE'
            return state
        },
        [getAsyncValue.rejected.type]: (state, action: PayloadAction<CounterResponse>) => {
            console.log('rejecting ', action.payload);
            return state;
        },
    },
});


// async operations without thunk, can be useful in rejected responses
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAsyncValue = createAsyncThunk(
    'user/getAsyncValue',
    async () => {
        return 0
    }
);
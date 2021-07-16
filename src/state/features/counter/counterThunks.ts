// async operations without thunk, can be useful in rejected responses
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import CounterResponse from "../../../sharedTypes/apiResponse/Counter";

export const getAsyncValue = createAsyncThunk(
    'user/getAsyncValue',
    async () => {
        let res : AxiosResponse<CounterResponse> = await axios.get('/count')
        return res.data
    }
);
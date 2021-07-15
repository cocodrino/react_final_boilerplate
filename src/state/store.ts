import { configureStore } from '@reduxjs/toolkit';
import { counter } from './features/counter/counterSlice';


export const reducer = {
    counter: counter.reducer,
};

export const store = configureStore({ reducer });

export type StoreType = ReturnType<typeof store.getState>;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    tickerValues: {},
    fetchError: null,
};

const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setTickerValues(state, action) {
            state.tickerValues = action.payload;
        },
        setFetchError(state, action) {
            state.fetchError = action.payload;
        },
    },
});

export const { setIsLoading, setTickerValues, setFetchError } =
    tickerSlice.actions;

export default tickerSlice.reducer;

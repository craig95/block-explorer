import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    blocks: [],
    blocksFetchError: null,
    selectedBlock: null,
    selectedBlockFetchError: null,
};

const blocksSlice = createSlice({
    name: 'blocks',
    initialState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setBlocks(state, action) {
            state.blocks = action.payload;
        },
        setBlocksFetchError(state, action) {
            state.blocksFetchError = action.payload;
        },
        setSelectedBlock(state, action) {
            state.selectedBlock = action.payload;
        },
        setSelectedBlockFetchError(state, action) {
            state.selectedBlockFetchError = action.payload;
        },
    },
});

export const {
    setIsLoading,
    setBlocks,
    setBlocksFetchError,
    setSelectedBlock,
    setSelectedBlockFetchError,
} = blocksSlice.actions;

export default blocksSlice.reducer;

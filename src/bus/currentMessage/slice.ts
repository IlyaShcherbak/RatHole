// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { CurrentMessageState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: CurrentMessageState = {
    text: '',
};

export const currentMessageSlice = createSlice({
    name: 'currentMessage',
    initialState,
    reducers,
});

export const currentMessagesActions = currentMessageSlice.actions;
export default currentMessageSlice.reducer;

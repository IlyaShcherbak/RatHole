// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { CurrentMessageState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: CurrentMessageState = '';

export const currentMessagesSlice = createSlice({
    name: 'currentMessage',
    initialState,
    reducers,
});

export const currentMessagesActions = currentMessagesSlice.actions;
export default currentMessagesSlice.reducer;

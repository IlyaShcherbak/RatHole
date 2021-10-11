// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { User } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: User = {
    _id:      '',
    username: '',
};

export const noUser = initialState;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers,
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

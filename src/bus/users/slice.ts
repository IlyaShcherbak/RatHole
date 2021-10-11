// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { Users } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: Users = [];

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers,
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;

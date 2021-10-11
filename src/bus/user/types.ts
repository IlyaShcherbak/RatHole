// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type User = {
    _id: string,
    username: string,
}

// Contracts
export type SetUserContract = CaseReducer<User, PayloadAction<User>>;

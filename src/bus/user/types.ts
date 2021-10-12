// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type IdUser = string | null;
export type NameUser = string | null;

export type User = {
    _id: string,
    username: string,
}

// Contracts
export type SetUserContract = CaseReducer<User, PayloadAction<User>>;

// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type User = {
    id: string,
    username: string,
}

export type Users = Array<User>

// Contracts
export type SetUsersContract = CaseReducer<Users, PayloadAction<Users>>;

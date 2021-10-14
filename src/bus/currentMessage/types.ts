// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type CurrentMessageState = string;

export type CreateCurrentMessagePayload = {
    username: string
    text: string
}

// Contracts
export type SetMessagesContract = CaseReducer<CurrentMessageState, PayloadAction<CurrentMessageState>>

// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type CurrentMessageState = {
    text: string;
    id?: string;
};

export type CreateCurrentMessagePayload = {
    username: string;
    text: string;
}

export type DeleteCurrentMessagePayload = {
    id: string;
}

// Contracts
export type SetMessagesContract = CaseReducer<CurrentMessageState, PayloadAction<CurrentMessageState>>;

// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Message = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt:string,
};

export type Messages = Array<Message>

export type MessagesState = Messages;

// Contracts
export type SetMessagesContract = CaseReducer<MessagesState, PayloadAction<MessagesState>>

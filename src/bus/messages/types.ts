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

export type CurrentMessage = Pick<Message, '_id' | 'text'>;

export type Messages = Array<Message>;

export type MessagesState = {
    messages: Messages,
    currentMessage: CurrentMessage,
};

export type CreateCurrentMessagePayload = Pick<Message, 'text' | 'username'>;

export type DeleteCurrentMessagePayload = Pick<Message, '_id'>;

export type EditCurrentMessagePayload = Pick<Message, '_id' | 'text'>;

export type AddMessagePayload = Message;

export type DeleteMessagePayload = Pick<Message, '_id'>;

export type EditMessagePayload = Message;

// Contracts
export type SetMessagesContract = CaseReducer<MessagesState, PayloadAction<Messages>>
export type SetCurrentMessageContract = CaseReducer<MessagesState, PayloadAction<CurrentMessage>>
export type AddMessageContract = CaseReducer<MessagesState, PayloadAction<AddMessagePayload>>
export type DeletedMessageContract = CaseReducer<MessagesState, PayloadAction<DeleteMessagePayload>>
export type EditedMessageContract = CaseReducer<MessagesState, PayloadAction<EditMessagePayload>>

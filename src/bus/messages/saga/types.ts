// Types
import * as types from '../types';

// Fetching Messages Async
export const FETCH_MESSAGES_ASYNC = 'FETCH_MESSAGES_ASYNC';
export type FetchMessagesActionAsync = {
    type: typeof FETCH_MESSAGES_ASYNC;
};
export type FetchMessagesContract = () => FetchMessagesActionAsync

// Create Message Async
export const CREATE_CURRENT_MESSAGE_ASYNC = 'CREATE_CURRENT_MESSAGE_ASYNC';
export type CreateMessageActionAsync = {
    type: typeof CREATE_CURRENT_MESSAGE_ASYNC;
    payload: types.CreateCurrentMessagePayload;
};
export type CreateCurrentMessageContract = (payload: types.CreateCurrentMessagePayload) => CreateMessageActionAsync

// Delete Message Async
export const DELETE_CURRENT_MESSAGE_ASYNC = 'DELETE_CURRENT_MESSAGE_ASYNC';
export type DeleteMessageActionAsync = {
    type: typeof DELETE_CURRENT_MESSAGE_ASYNC;
    payload: types.DeleteCurrentMessagePayload;
};
export type DeleteCurrentMessageContract = (payload: types.DeleteCurrentMessagePayload) => DeleteMessageActionAsync

// Edit Message Async
export const EDIT_CURRENT_MESSAGE_ASYNC = 'EDIT_CURRENT_MESSAGE_ASYNC';
export type EditMessageActionAsync = {
    type: typeof EDIT_CURRENT_MESSAGE_ASYNC;
    payload: types.EditCurrentMessagePayload;
};
export type EditCurrentMessageContract = (payload: types.EditCurrentMessagePayload) => EditMessageActionAsync


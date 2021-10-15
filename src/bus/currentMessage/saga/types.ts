// Types
import * as types from '../types';

// Create Message Async
export const CREATE_CURRENT_MESSAGE_ASYNC = 'CREATE_CURRENT_MESSAGE_ASYNC';
export type CreateMessagesActionAsync = {
    type: typeof CREATE_CURRENT_MESSAGE_ASYNC;
    payload: types.CreateCurrentMessagePayload;
};
export type CreateCurrentMessageContract = (payload: types.CreateCurrentMessagePayload) => CreateMessagesActionAsync

// Delete Message Async
export const DELETE_CURRENT_MESSAGE_ASYNC = 'DELETE_CURRENT_MESSAGE_ASYNC';
export type DeleteMessagesActionAsync = {
    type: typeof DELETE_CURRENT_MESSAGE_ASYNC;
    payload: types.DeleteCurrentMessagePayload;
};
export type DeleteCurrentMessageContract = (payload: types.DeleteCurrentMessagePayload) => DeleteMessagesActionAsync

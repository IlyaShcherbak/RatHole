// Types
import * as types from '../types';

// Fetching Messages Async
export const FETCH_MESSAGES_ASYNC = 'FETCH_MESSAGES_ASYNC';
export type FetchMessagesActionAsync = {
    type: typeof FETCH_MESSAGES_ASYNC;
};
export type FetchMessagesContract = () => FetchMessagesActionAsync

// Creating Messages Async
export const CREATE_MESSAGES_ASYNC = 'CREATE_MESSAGES_ASYNC';
export type CreateMessagesActionAsync = {
    type: typeof CREATE_MESSAGES_ASYNC;
    payload: types.userMessage;
};
export type CreateMessagesContract = (payload: types.userMessage) => CreateMessagesActionAsync

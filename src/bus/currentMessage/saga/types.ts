// Types
import * as types from '../types';

// Creating Messages Async
export const CREATE_CURRENT_MESSAGE_ASYNC = 'CREATE_CURRENT_MESSAGE_ASYNC';
export type CreateMessagesActionAsync = {
    type: typeof CREATE_CURRENT_MESSAGE_ASYNC;
    payload: types.CreateCurrentMessagePayload;
};
export type CreateCurrentMessageContract = (payload: types.CreateCurrentMessagePayload) => CreateMessagesActionAsync

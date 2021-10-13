// Types
import * as types from './types';

export const fetchMessagesActionAsync: types.FetchMessagesContract = () => ({
    type: types.FETCH_MESSAGES_ASYNC,
});

export const createhMessagesActionAsync: types.CreateMessagesContract = (payload) => ({
    type: types.CREATE_MESSAGES_ASYNC,
    payload,
});

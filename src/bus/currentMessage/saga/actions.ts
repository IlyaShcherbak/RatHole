// Types
import * as types from './types';

export const createCurrentMessageActionAsync: types.CreateCurrentMessageContract = (payload) => ({
    type: types.CREATE_CURRENT_MESSAGE_ASYNC,
    payload,
});

export const deleteCurrentMessageActionAsync: types.DeleteCurrentMessageContract = (payload) => ({
    type: types.DELETE_CURRENT_MESSAGE_ASYNC,
    payload,
});

// Types
import * as types from './types';

export const setMessages: types.SetMessagesContract = (state, action) => {
    return {
        ...state,
        messages: action.payload,
    };
};

export const setCurrentMessage: types.SetCurrentMessageContract = (state, action) => {
    return {
        ...state,
        currentMessage: action.payload,
    };
};

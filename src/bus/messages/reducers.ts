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

export const addMessage: types.AddMessageContract = (state, action) => {
    return {
        ...state,
        messages:       [ action.payload, ...state.messages ],
        currentMessage: { text: '', _id: '' },
    };
};

export const deleteMessage: types.DeletedMessageContract = (state, action) => {
    const newMessages = state.messages.filter((message) => message._id !== action.payload._id);

    return {
        ...state,
        messages: newMessages,
    };
};

export const editMessage: types.EditedMessageContract = (state, action) => {
    const newMessages = state.messages.map((message) => message._id === action.payload._id ? action.payload : message);

    return {
        ...state,
        messages:       newMessages,
        currentMessage: { text: '', _id: '' },
    };
};

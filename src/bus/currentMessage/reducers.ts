// Types
import * as types from './types';

export const setCurrentMessage: types.SetMessagesContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

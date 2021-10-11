// Types
import * as types from './types';

export const setUsers: types.SetUsersContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

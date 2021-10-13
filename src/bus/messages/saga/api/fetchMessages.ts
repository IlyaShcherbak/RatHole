// Tools
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const fetchMessages: () => Promise<types.MessagesState> = async () => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Message fetch failed');
    }

    const result = await response.json() as types.MessagesState;

    return result;
};

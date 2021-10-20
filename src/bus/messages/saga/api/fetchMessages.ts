// Tools
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const fetchMessages: () => Promise<types.Messages> = async () => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Message fetch failed');
    }

    return await response.json() as types.Messages;
};

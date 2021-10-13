// Tools
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const createMessage: (message: types.userMessage) => Promise<types.Message> = async (message) => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    if (response.status !== 200) {
        throw new Error(`Message fetch failed with status: ${response.status}`);
    }

    return response.json();
};

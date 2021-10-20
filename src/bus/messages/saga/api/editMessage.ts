// Tools
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const editMessage: (message: types.EditCurrentMessagePayload)
=> Promise<types.EditCurrentMessagePayload> = async (message) => {
    const response = await fetch(`${API_URL}/messages/${message._id}`, {
        method:  'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    if (response.status !== 200) {
        throw new Error(`Message edit failed with status: ${response.status}`);
    }

    return await response.json() as types.EditCurrentMessagePayload;
};

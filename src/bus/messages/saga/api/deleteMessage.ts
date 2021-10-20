// Tools
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const deleteMessage: (message: types.DeleteCurrentMessagePayload)
=> Promise<types.DeleteCurrentMessagePayload> = async (message) => {
    const response = await fetch(`${API_URL}/messages/${message._id}`, {
        method:  'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error(`Message delete failed with status: ${response.status}`);
    }

    return response.json();
};

// Core
import localStore from 'store';

// Constants
import { API_URL } from '../../../../init/constants';

// Types
import { NameUser } from '../../types';

export const userRegister = async (username: NameUser) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });

    if (response.status !== 201) {
        throw new Error('Registration failed');
    }

    const result = await response.json();
    await localStore.set('userId', result._id);

    return result;
};

// Constants
import { API_URL } from '../../../../init/constants';

// Types
import { IdUser, User } from '../../types';

export const userCheck = async (userId: IdUser) => {
    const response = await fetch(`${API_URL}/users/refresh/${userId}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('User Refresh failed');
    }

    const user = await response.json() as User;

    return user;
};

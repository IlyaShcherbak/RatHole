// Core
import { call, put } from 'redux-saga/effects';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';
import { errorsActions } from '../../../client/errors';

// Actions
import { usersActions } from '../../slice';

// Tools
import { ControlledError, IControlledError } from '../../../../tools/utils';
import { API_URL } from '../../../../init';

// Types
import { Users } from '../../types';

export function* fetchUsers() {
    try {
        // ------------- SUCCESS BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isUsersFetching',
            value: true,
        }));

        const result: Users = yield call(async () => {
            const response = await fetch(`${API_URL}/users`);

            if (response.status !== 200) {
                throw new ControlledError({
                    message:    'fetchUsers failed',
                    statusCode: response.status,
                    data:       {
                        test: 'Fetch failed',
                    },
                });
            }

            const { data } = await response.json();

            return data;
        });

        yield put(usersActions.setUsers(result));
        // ------------- SUCCESS BLOCK END -------------
    } catch (error) {
        // ------------- ERROR BLOCK START -------------
        yield console.log('Error');

        const controlledError = error as IControlledError;
        yield put(errorsActions.setControlledError(controlledError));
        // ------------- ERROR BLOCK END -------------
    } finally {
        // ------------- FINALLY BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isUsersFetching',
            value: false,
        }));
        // ------------- FINALLY BLOCK END -------------
    }
}

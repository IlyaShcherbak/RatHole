// Core
import { put } from 'redux-saga/effects';
import { togglerCreatorAction } from '../../../client/togglers';

// Actions
import { userActions } from '../../slice';

// Api
import { userRegister } from '../api/userRegister';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import { RegisterUserContract } from '../types';

export function* registerUser({ payload: { username }}: ReturnType<RegisterUserContract>) {
    const result: string | null = yield makeRequest({
        fetcher:      () => userRegister(username),
        togglerType:  'isUserRegister',
        succesAction: userActions.setUser,
    });

    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}

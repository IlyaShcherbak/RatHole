// Core
import { put } from 'redux-saga/effects';
import { togglerCreatorAction } from '../../../client/togglers';

// Actions
import { userActions } from '../../slice';

// Api
import { userCheck } from '../api/userCheck';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import { RefreshUserContract } from '../types';

export function* checkUser({ payload: { userId }}: ReturnType<RefreshUserContract>) {
    const result: string | null = yield makeRequest({
        fetcher:      () => userCheck(userId),
        togglerType:  'isUserFetching',
        succesAction: userActions.setUser,
    });


    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}

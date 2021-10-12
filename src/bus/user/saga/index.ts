// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import { checkUser } from './workers/checkUser';
import { registerUser } from './workers/registerUser';

function* watchRefreshUser(): SagaIterator {
    yield takeEvery(types.REFRESH_USER_ASYNC, checkUser);
}

function* watchRegisterUser(): SagaIterator {
    yield takeEvery(types.REGISTER_USER_ASYNC, registerUser);
}

export function* watchUser(): SagaIterator {
    yield all([ call(watchRefreshUser), call(watchRegisterUser) ]);
}

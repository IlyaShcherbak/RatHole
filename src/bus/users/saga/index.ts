// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import { fetchUsers } from './workers/fetchUsers';

function* watchFetchUsers(): SagaIterator {
    yield takeEvery(types.FETCH_USERS_ASYNC, fetchUsers);
}

export function* watchUsers(): SagaIterator {
    yield all([ call(watchFetchUsers) ]);
}

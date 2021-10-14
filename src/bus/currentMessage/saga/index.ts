// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import {
    messageCreate,
} from './workers';


function* watchCreateCurrentMessage(): SagaIterator {
    yield takeEvery(types.CREATE_CURRENT_MESSAGE_ASYNC, messageCreate);
}

export function* watchCurrentMessage(): SagaIterator {
    yield all([ call(watchCreateCurrentMessage) ]);
}

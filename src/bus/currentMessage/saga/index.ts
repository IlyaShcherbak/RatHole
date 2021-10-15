// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import {
    messageCreate,
    messageEdit,
    messageDelete,
} from './workers';


function* watchCreateCurrentMessage(): SagaIterator {
    yield takeEvery(types.CREATE_CURRENT_MESSAGE_ASYNC, messageCreate);
}

function* watchEditCurrentMessage(): SagaIterator {
    yield takeEvery(types.EDIT_CURRENT_MESSAGE_ASYNC, messageEdit);
}

function* watchDeleteCurrentMessage(): SagaIterator {
    yield takeEvery(types.DELETE_CURRENT_MESSAGE_ASYNC, messageDelete);
}

export function* watchCurrentMessage(): SagaIterator {
    yield all([ call(watchCreateCurrentMessage), call(watchDeleteCurrentMessage), call(watchEditCurrentMessage) ]);
}

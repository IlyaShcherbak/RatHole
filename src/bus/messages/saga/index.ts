// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import {
    messagesFetch,
    messageCreate,
    messageEdit,
    messageDelete,
} from './workers';

function* watchFetchMessages(): SagaIterator {
    yield takeEvery(types.FETCH_MESSAGES_ASYNC, messagesFetch);
}

function* watchCreateCurrentMessage(): SagaIterator {
    yield takeEvery(types.CREATE_CURRENT_MESSAGE_ASYNC, messageCreate);
}

function* watchEditCurrentMessage(): SagaIterator {
    yield takeEvery(types.EDIT_CURRENT_MESSAGE_ASYNC, messageEdit);
}

function* watchDeleteCurrentMessage(): SagaIterator {
    yield takeEvery(types.DELETE_CURRENT_MESSAGE_ASYNC, messageDelete);
}

export function* watchMessages(): SagaIterator {
    yield all([
        call(watchFetchMessages),
        call(watchCreateCurrentMessage),
        call(watchDeleteCurrentMessage),
        call(watchEditCurrentMessage),
    ]);
}

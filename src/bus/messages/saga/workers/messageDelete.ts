// Core
import { put } from 'redux-saga/effects';

// Types
import * as types from '../types';
import { DeleteCurrentMessagePayload } from '../../types';

// Api
import * as API from '../api';

// Actions
import { messagesActions } from '../../slice';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messageDelete({ payload }: types.DeleteMessageActionAsync) {
    yield makeRequest<DeleteCurrentMessagePayload>({
        fetcher:           () => API.deleteMessage(payload),
        successSideEffect: function*(deletedMessage) {
            if (deletedMessage) {
                yield put(messagesActions.deleteMessage(payload));
            }
        },
    });
}

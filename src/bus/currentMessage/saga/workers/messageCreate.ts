// Core
import { put } from 'redux-saga/effects';

// Types
import * as types from '../types';
import { CreateCurrentMessagePayload } from '../../types';

// Actions
import { createCurrentMessageActionAsync } from '../actions';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messageCreate({ payload }: types.CreateMessagesActionAsync) {
    yield makeRequest<CreateCurrentMessagePayload>({
        fetcher:           () => API.createMessage(payload),
        togglerType:       'isMessagesCreating',
        successSideEffect: function*() {
            yield put(createCurrentMessageActionAsync(payload));
        },
    });
}

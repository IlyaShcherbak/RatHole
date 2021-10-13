// Core
import { put } from 'redux-saga/effects';

// Types
import * as types from '../types';
import { userMessage } from '../../types';

// Actions
import { fetchMessagesActionAsync } from '../actions';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messageCreate({ payload }: types.CreateMessagesActionAsync) {
    yield makeRequest<userMessage>({
        fetcher:           () => API.createMessage(payload),
        togglerType:       'isMessagesCreating',
        successSideEffect: function*() {
            yield put(fetchMessagesActionAsync());
        },
    });
}

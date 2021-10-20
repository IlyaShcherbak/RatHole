// Types
import * as types from '../types';
import { put } from 'redux-saga/effects';

// Types
import { EditCurrentMessagePayload } from '../../types';

//Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messageEdit({ payload }: types.EditMessageActionAsync) {
    yield makeRequest<EditCurrentMessagePayload>({
        fetcher:           () => API.editMessage(payload),
        successSideEffect: function*() {
            yield put(messagesActions.setCurrentMessage({ text: '', _id: '' }));
        },
    });
}

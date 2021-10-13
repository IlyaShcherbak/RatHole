// Core
import { put } from 'redux-saga/effects';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';

// Types
import { MessagesState } from '../../types';

// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messagesFetch() {
    yield makeRequest<MessagesState>({
        fetcher:           API.fetchMessages,
        togglerType:       'isMessagesFetching',
        succesAction:      messagesActions.setMessages,
        successSideEffect: function*() {
            yield put(togglerCreatorAction({
                type:  'isMessagesInitialised',
                value: true,
            }));
        },
    });
}

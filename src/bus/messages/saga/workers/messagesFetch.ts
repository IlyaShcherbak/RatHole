// Core
import { put, select } from 'redux-saga/effects';
import { isEqual } from 'lodash';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';

// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import { Messages } from '../../types';
import { RootState } from '../../../../init';

export const messagesFetch = () => makeRequest<Messages>({
    fetcher:           API.fetchMessages,
    successSideEffect: function*(newMessages) {
        const {
            messages: { messages },
            togglers: { isMessagesInitialised },
        }: RootState = yield select((state) => state);

        if (!isEqual(messages, newMessages)) {
            yield put(messagesActions.setMessages(newMessages));
        }

        if (!isMessagesInitialised) {
            yield put(togglerCreatorAction({
                type:  'isMessagesInitialised',
                value: true,
            }));
        }
    },
});

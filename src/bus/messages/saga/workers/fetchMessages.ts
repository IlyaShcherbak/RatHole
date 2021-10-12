// Types
import { MessagesState } from '../../types';

// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* fetchMessages() {
    const result: MessagesState | null = yield makeRequest<MessagesState>({
        fetcher:           API.fetchMessages,
        togglerType:       'isMessagesFetching',
        succesAction:      messagesActions.setMessages,
        successSideEffect: (result) => {
            console.log('successSideEffect result', result);
        },
    });
}

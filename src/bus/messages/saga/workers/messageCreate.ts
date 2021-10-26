// Types
import * as types from '../types';
import { AddMessagePayload } from '../../types';

// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messageCreate({ payload }: types.CreateMessageActionAsync) {
    yield makeRequest<AddMessagePayload>({
        fetcher:      () => API.createMessage(payload),
        togglerType:  'isMessageUpdating',
        succesAction: messagesActions.addMessage,
    });
}

// Types
import * as types from '../types';

// Types
import { EditMessagePayload } from '../../types';

//Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messageEdit({ payload }: types.EditMessageActionAsync) {
    yield makeRequest<EditMessagePayload>({
        fetcher:      () => API.editMessage(payload),
        succesAction: messagesActions.editMessage,
    });
}

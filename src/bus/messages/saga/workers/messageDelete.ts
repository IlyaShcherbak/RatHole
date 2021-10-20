// Types
import * as types from '../types';
import { DeleteCurrentMessagePayload } from '../../types';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* messageDelete({ payload }: types.DeleteMessageActionAsync) {
    yield makeRequest<DeleteCurrentMessagePayload>({
        fetcher: () => API.deleteMessage(payload),
    });
}

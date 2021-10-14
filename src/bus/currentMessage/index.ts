// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Bus
import { currentMessagesActions } from './slice';

// Saga actions
import * as asyncActions from './saga/actions';

// Types
import * as types from './types';

export const useCurrentMessage = () => {
    const dispatch = useDispatch();
    const { currentMessage } = useSelector(({ currentMessage }) => ({ currentMessage }));

    const setCurrentMessage = (payload: types.CurrentMessageState) => {
        dispatch(currentMessagesActions.setCurrentMessage(payload));
    };

    const sendMessage = (payload: types.CreateCurrentMessagePayload) => {
        dispatch(asyncActions.createCurrentMessageActionAsync(payload));
    };

    return {
        currentMessage,
        setCurrentMessage,
        sendMessage,
    };
};

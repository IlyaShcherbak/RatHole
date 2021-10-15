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
    const { text } = useSelector(({ currentMessage: { text, id }}) => ({ text, id }));

    const setCurrentMessage = (text: string, id?: string) => {
        dispatch(currentMessagesActions.setCurrentMessage({ text, id }));
    };

    const sendMessage = (payload: types.CreateCurrentMessagePayload) => {
        dispatch(asyncActions.createCurrentMessageActionAsync(payload));
    };

    const deleteMessage = (id: string) => {
        dispatch(asyncActions.deleteCurrentMessageActionAsync({ id }));
    };

    return {
        currentMessage: text,
        setCurrentMessage,
        sendMessage,
        deleteMessage,
    };
};

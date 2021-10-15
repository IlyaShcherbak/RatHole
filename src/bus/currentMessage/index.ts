// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Bus
import { currentMessagesActions } from './slice';

// Saga actions
import * as asyncActions from './saga/actions';

export const useCurrentMessage = () => {
    const dispatch = useDispatch();
    const currentMessage = useSelector(({ currentMessage }) => currentMessage);

    const setCurrentMessage = (text: string, newId?: string) => {
        dispatch(currentMessagesActions.setCurrentMessage({ text, id: newId || currentMessage.id }));
    };

    const sendMessage = (text: string, username: string) => {
        dispatch(asyncActions.createCurrentMessageActionAsync({ text, username }));
        setCurrentMessage('', '');
    };

    const editMessage = (text: string, id = '') => {
        dispatch(asyncActions.editCurrentMessageActionAsync({ text, id }));
    };

    const deleteMessage = (id: string) => {
        dispatch(asyncActions.deleteCurrentMessageActionAsync({ id }));
    };

    return {
        currentMessage,
        setCurrentMessage,
        sendMessage,
        deleteMessage,
        editMessage,
    };
};

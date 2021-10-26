// Core
import { useDispatch } from 'react-redux';
import { isUndefined } from 'lodash';

// Tools
import { useSelector } from '.';

// Bus
import { messagesActions } from '../../bus/messages/slice';

// Saga actions
import * as asyncActions from '../../bus/messages/saga/actions';

export const useCurrentMessage = () => {
    const dispatch = useDispatch();

    const { currentMessage, isMessageUpdating } = useSelector(
        ({ messages, togglers }) => ({ currentMessage:    messages.currentMessage,
            isMessageUpdating: togglers.isMessageUpdating }),
    );

    const setCurrentMessage = (text: string, newId?: string) => {
        const _id = isUndefined(newId) ? currentMessage._id : newId;
        dispatch(messagesActions.setCurrentMessage({ text, _id }));
    };

    const sendMessage = (text: string, username: string) => {
        dispatch(asyncActions.createCurrentMessageActionAsync({ text, username }));
    };

    const editMessage = (text: string, _id = '') => {
        dispatch(asyncActions.editCurrentMessageActionAsync({ text, _id }));
    };

    const deleteMessage = (_id: string) => {
        dispatch(asyncActions.deleteCurrentMessageActionAsync({ _id }));
    };

    const isEditMode = Boolean(currentMessage._id);

    return {
        currentMessage,
        setCurrentMessage,
        sendMessage,
        deleteMessage,
        editMessage,
        isEditMode,
        isMessageUpdating: isMessageUpdating,
    };
};

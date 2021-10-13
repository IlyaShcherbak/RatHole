// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import * as asyncActions from './saga/actions';

// Types
import * as types from './types';

export const useMessages = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        messages:      state.messages,
        isInitialised: state.togglers.isMessagesInitialised,
    }));

    useEffect(() => {
        setInterval(() => dispatch(asyncActions.fetchMessagesActionAsync()), 1000);
    }, []);

    const getMessages = () => {
        dispatch(asyncActions.fetchMessagesActionAsync());
    };
    const createMessage = (payload: types.userMessage) => {
        dispatch(asyncActions.createhMessagesActionAsync(payload));
    };

    return {
        ...selector,
        getMessages,
        createMessage,
    };
};

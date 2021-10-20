// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Saga actions
import * as asyncActions from './saga/actions';

// Tools
import { useSelector } from '../../tools/hooks';

const isDev = process.env.NODE_ENV === 'development';

// eslint-disable-next-line init-declarations
let intervalId: ReturnType<typeof setInterval> | void = void 0;

export const useMessages = () => {
    const dispatch = useDispatch();
    const { messages, currentMessage, isInitialised } = useSelector((state) => ({
        messages:       state.messages.messages,
        currentMessage: state.messages.currentMessage,
        isInitialised:  state.togglers.isMessagesInitialised,
    }));

    const getMessages = () => {
        dispatch(asyncActions.fetchMessagesActionAsync());
    };

    useEffect(() => {
        if (intervalId) {
            return () => void 0;
        }

        getMessages();

        intervalId = setInterval(() => {
            getMessages();
        }, isDev ? 7000 : 2000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    return {
        messages,
        currentMessage,
        isInitialised,
        getMessages,
    };
};

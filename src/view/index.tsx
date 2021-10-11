// Core
import React, { FC, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
import { AppContainer } from './styles';

//Constants
import { API_URL } from '../init/constants';
import { User } from '../bus/users/types';

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const [ userId ] = useLocalStorage('userId', '');

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    const setLoginStatusHanlder = useCallback(async () => {
        const hasUserId = !!userId;

        if (hasUserId) {
            // const id = '616495472cec4d9f2998d002';
            const response = await fetch(`${API_URL}/users/refresh/${userId}`);
            const { username } = await response.json() as User;
            console.log({ response, username });

            setTogglerAction({
                type:  'isLoggedIn',
                value: !!username,
            });
        } else {
            setTogglerAction({
                type:  'isLoggedIn',
                value: false,
            });
        }
    }, [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        setLoginStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};

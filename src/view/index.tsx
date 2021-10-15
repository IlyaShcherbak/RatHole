// Core
import React, { FC, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';
import { useUser } from '../bus/user';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
import { AppContainer, AppImage } from './styles';

// Images
import ratImg from '../assets/images/halloween_rat.png';

// Elements
import { Spinner } from './elements';

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const { checkUser, isFetching } = useUser();

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        checkUser();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    if (isFetching) {
        return <Spinner absolute/>;
    }

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
            <AppImage src = { ratImg } />
        </ThemeProvider>
    );
};

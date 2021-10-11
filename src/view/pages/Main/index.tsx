// Core
import React, { FC } from 'react';

// MUI
import Button from '@mui/material/Button';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Hooks
import { useLocalStorage } from '../../../tools/hooks';

// Redux
import { useTogglersRedux } from '../../../bus/client/togglers';

const Main: FC = () => {
    const [ , setUserId ] = useLocalStorage('userId', '');
    const { setTogglerAction } = useTogglersRedux();

    const onLogoutClick = () => {
        setUserId('');
        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });
    };

    return (
        <Container>
            <h1> Welcome to the rat hole!! </h1>
            <Button
                color = 'error'
                variant = 'outlined'
                onClick = { onLogoutClick }>
                GET OUT OF HOLE
            </Button>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

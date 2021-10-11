// Core
import React, { FC } from 'react';

// MUI
import Button from '@mui/material/Button';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Redux
import { useUser } from '../../../bus/user';

//Elements
import { Spinner } from '../../elements';

const Main: FC = () => {
    const { user, resetUser, isFetching } = useUser();

    if (isFetching) {
        return <Spinner />;
    }

    return (
        <Container>
            <h1> Hi {user.username}! Welcome to the rat hole!! </h1>
            <Button
                color = 'error'
                variant = 'outlined'
                onClick = { resetUser }>
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

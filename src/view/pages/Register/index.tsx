// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, RegistrationForm } from '../../components';

// Styles
import { Container, Header } from './styles';

export const Register: FC = () => {
    return (
        <Container>
            <Header
                align = 'center'
                variant = 'h1'> Welcome to the RAT Hole!
            </Header>
            <RegistrationForm />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);

// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, RegistrationForm } from '../../components';

// Styles
import { Container } from './styles';

export const Register: FC = () => {
    return (
        <Container>
            <RegistrationForm />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);

// Core
import React, { FC } from 'react';
import { useUsers } from '../../../bus/users';

// Components
import { ErrorBoundary, RegistrationForm } from '../../components';

// Styles
import { Container } from './styles';

export const Register: FC = () => {
    const { users } = useUsers();

    console.log({ users });

    return (
        <Container>
            <p></p>
            <RegistrationForm />
            <p></p>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);
// Core
import React, { FC } from 'react';

// MUI
// import Button from '@mui/material/Button';

// Components
import { ErrorBoundary, Header } from '../../components';

// Redux
import { useUser } from '../../../bus/user';

//Elements
import { Spinner } from '../../elements';

// Styles
import { PageContainer, Container } from './styles';

const Main: FC = () => {
    const { user, resetUser, isFetching } = useUser();

    if (isFetching) {
        return <Spinner />;
    }

    return (
        <PageContainer>
            <Container>
                <Header
                    logOut = { resetUser }
                    user = { user }
                />
            </Container>
        </PageContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

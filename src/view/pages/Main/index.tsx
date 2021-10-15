// Core
import React, { FC, useState } from 'react';

// Redux
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';

// Components
import { ErrorBoundary, Header, Chat, KeyBoard } from '../../components';

// Styles
import { PageContainer, Container } from './styles';


const Main: FC = () => {
    const { user, resetUser } = useUser();
    const { messages, isInitialised } = useMessages();
    const [ showKeyboard, setShowKeyboard ] = useState(false);

    const toogleKeyboard = () => setShowKeyboard(!showKeyboard);

    return (
        <PageContainer>
            <Container>
                <Header
                    logOut = { resetUser }
                    user = { user }
                />
                <Chat
                    currentUser = { user }
                    isChatInitialised = { isInitialised }
                    messages = { messages }
                    toogleKeyboard = { toogleKeyboard }
                />
                {showKeyboard && <KeyBoard user = { user } />}
            </Container>
        </PageContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

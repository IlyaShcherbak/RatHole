// Core
import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { ErrorBoundary, Header, Chat, KeyBoard, SpecialKey } from '../../components';

// Redux
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';

//Elements
import { Spinner } from '../../elements';

// Styles
import { PageContainer, Container, UserInputContainer, StyledButton } from './styles';

// MUI
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

export type KeyEventData = {
    key: string;
    code: string;
    shiftKey: boolean;
}

const noKeyPressed: KeyEventData = { key: '', code: '', shiftKey: false };

const Main: FC = () => {
    const { user, resetUser, isFetching } = useUser();
    const { messages, createMessage, isInitialised } = useMessages();
    const [ message, setMessage ] = useState('');
    const [ keyPressed, changeKeyPressed ] = useState<KeyEventData>(noKeyPressed);
    const [ showKeyboard, setShowKeyboard ] = useState(false);

    if (isFetching) {
        return <Spinner />;
    }

    const sendButtonClick = () => {
        if (message) {
            createMessage({ text: message, username: user.username });
            setMessage('');
        }
    };

    const onKeyDown = (keyData: KeyEventData) => {
        if (keyData.key !== keyPressed.key) {
            changeKeyPressed(keyData);

            const isSimpleKey = keyData.key.length === 1;

            switch (keyData.code) {
                case SpecialKey.Backquote:
                    setMessage(`${message}\``);
                    break;
                case SpecialKey.Backspace:
                    setMessage(message.slice(0, -1));
                    break;
                case SpecialKey.Tab:
                    setMessage(`${message}¯\\_( ͡👁 ʖ ͡👁)_/¯`);
                    break;
                case SpecialKey.CapsLock:
                case SpecialKey.ShiftLeft:
                case SpecialKey.ShiftRight:
                    break;
                case SpecialKey.Enter:
                    sendButtonClick();
                    break;
                default:
                    isSimpleKey && setMessage(`${message}${keyData.key}`);
            }
        }
    };

    const onKeyUp = () => {
        changeKeyPressed(noKeyPressed);
    };

    return (
        <PageContainer
            tabIndex = { 0 }
            onKeyDown = { (event) => {
                onKeyDown({ key: event.key, code: event.code, shiftKey: event.shiftKey  });
                if (event.key === SpecialKey.Tab) {
                    event.preventDefault();
                }
            } }
            onKeyUp = { () => onKeyUp() }>
            <Container>
                <Header
                    logOut = { resetUser }
                    user = { user }
                />
                <Chat
                    currentUser = { user }
                    isChatInitialised = { isInitialised }
                    messages = { messages }>
                    <form onSubmit = { (event) => event.preventDefault() }>
                        <UserInputContainer>
                            <IconButton
                                color = { showKeyboard ? 'secondary' : 'primary' }
                                onClick = { () => setShowKeyboard(!showKeyboard) }>
                                <FontAwesomeIcon icon = 'keyboard' />
                            </IconButton>
                            <TextField
                                fullWidth
                                label = 'Enter message...'
                                name = 'messageText'
                                size = 'small'
                                value = { message }
                                onChange = { (event) => setMessage(event.target.value) }
                            />
                            <StyledButton
                                color = 'primary'
                                disabled = { !message }
                                type = 'submit'
                                variant = 'contained'
                                onClick = { sendButtonClick }>
                                Send
                            </StyledButton>
                        </UserInputContainer>
                    </form>
                </Chat>
                {
                    showKeyboard && (
                        <KeyBoard
                            keyPressed = { keyPressed }
                            setText = { setMessage }
                            submitText = { sendButtonClick }
                            text = { message }
                        />
                    )
                }
            </Container>
        </PageContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

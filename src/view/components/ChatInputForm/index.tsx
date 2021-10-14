// Core
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { useCurrentMessage } from '../../../bus/currentMessage';

// Types
import { User } from '../../../bus/user/types';

// Styles
import { UserInputContainer, StyledButton } from './styles';

// MUI
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

type PropTypes = {
    user: User,
    toogleKeyboard: () => void
}

export const ChatInputForm: FC<PropTypes> = ({ user, toogleKeyboard }) => {
    const { currentMessage, setCurrentMessage, sendMessage } = useCurrentMessage();

    const sendButtonClick = () => {
        if (currentMessage.trim()) {
            sendMessage({ text: currentMessage, username: user.username });
            setCurrentMessage('');
        }
    };

    return (
        <form onSubmit = { (event) => event.preventDefault() }>
            <UserInputContainer>
                <IconButton
                    color = 'primary'
                    onClick = { toogleKeyboard }>
                    <FontAwesomeIcon icon = 'keyboard' />
                </IconButton>
                <TextField
                    autoFocus
                    fullWidth
                    id = 'messageText'
                    label = 'Enter message...'
                    name = 'messageText'
                    size = 'small'
                    value = { currentMessage }
                    onChange = { (event) => setCurrentMessage(event.target.value) }
                />
                <StyledButton
                    color = 'primary'
                    disabled = { !currentMessage.trim() }
                    type = 'submit'
                    variant = 'contained'
                    onClick = { sendButtonClick }>
                    Send
                </StyledButton>
            </UserInputContainer>
        </form>
    );
};

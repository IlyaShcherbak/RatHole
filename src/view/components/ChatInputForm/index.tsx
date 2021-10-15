// Core
import React, { FC } from 'react';

// Redux
import { useCurrentMessage } from '../../../bus/currentMessage';

// Types
import { User } from '../../../bus/user/types';

// Styles
import { UserInputContainer, StyledButton } from './styles';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// MUI
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

type PropTypes = {
    user: User,
    toogleKeyboard: () => void
}

export const ChatInputForm: FC<PropTypes> = ({ user, toogleKeyboard }) => {
    const { currentMessage: { text, id }, setCurrentMessage, sendMessage, editMessage } = useCurrentMessage();

    const isEditMode = Boolean(id);

    const sendButtonClick = () => {
        const trimmedMessage = text.trim();
        if (trimmedMessage) {
            isEditMode
                ? editMessage(trimmedMessage, id)
                : sendMessage(trimmedMessage, user.username);
        }
    };

    const clearMessage = () => setCurrentMessage('');

    return (
        <form onSubmit = { (event) => event.preventDefault() }>
            <UserInputContainer>
                <IconButton
                    color = 'warning'
                    onClick = { toogleKeyboard }>
                    <FontAwesomeIcon icon = 'keyboard' />
                </IconButton>
                <IconButton
                    color = 'warning'
                    sx = {{ marginRight: 1, minWidth: 40, gridColumn: 3 }}
                    onClick = { clearMessage }>
                    <FontAwesomeIcon icon = 'times-circle' />
                </IconButton>

                <TextField
                    autoFocus
                    fullWidth
                    id = 'messageText'
                    label = 'Enter message...'
                    name = 'messageText'
                    size = 'small'
                    sx = {{ gridColumn: '1/-1' }}
                    value = { text }
                    onChange = { (event) => setCurrentMessage(event.target.value) }
                />
                <StyledButton
                    color = 'warning'
                    disabled = { !text.trim() }
                    type = 'submit'
                    variant = 'contained'
                    onClick = { sendButtonClick }>
                    { isEditMode ? 'Edit' : 'Send' }
                </StyledButton>
            </UserInputContainer>
        </form>
    );
};

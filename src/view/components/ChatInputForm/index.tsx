// Core
import React, { FC } from 'react';

// Hooks
import { useCurrentMessage } from '../../../tools/hooks';

// Types
import { User } from '../../../bus/user/types';

// Styles
import { UserInputContainer, StyledButton } from './styles';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// MUI
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

// Elements
import { Spinner } from '../../elements';

type PropTypes = {
    user: User,
    toogleKeyboard: () => void
}

export const ChatInputForm: FC<PropTypes> = ({ user, toogleKeyboard }) => {
    const {
        currentMessage: { text, _id },
        setCurrentMessage,
        sendMessage,
        editMessage,
        isEditMode,
        isMessageUpdating,
    } = useCurrentMessage();

    const sendButtonClick = () => {
        const trimmedMessage = text.trim();
        if (trimmedMessage) {
            isEditMode
                ? editMessage(trimmedMessage, _id)
                : sendMessage(trimmedMessage, user.username);
        }
    };

    const clearMessage = () => setCurrentMessage('', '');
    const buttonText = isEditMode ? 'Edit' : 'Send';

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
                    disabled = { isMessageUpdating || !text.trim() }
                    type = 'submit'
                    variant = 'contained'
                    onClick = { sendButtonClick }>
                    {isMessageUpdating ? <Spinner size = '1x'/> : buttonText }
                </StyledButton>
            </UserInputContainer>
        </form>
    );
};

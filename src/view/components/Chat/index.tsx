// Core
import React, { FC } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';

// Hooks
import { useForm } from '../../../tools/hooks';

//Material Ui
import TextField from '@mui/material/TextField';

// Components
import { Message } from '../Message';

// Elements
import { Spinner } from '../../elements';

// Types
import { User } from '../../../bus/user/types';

// Styles
import { Container, ChatBox, MessagesBox, UserInputContainer, StyledButton } from './styles';

type PropTypes = {
    currentUser: User
}

export type MessageStateType = {
    messageText: string,
}

const messageInitialState: MessageStateType = {
    messageText: '',
};

export const Chat: FC<PropTypes> = ({ currentUser }) => {
    const { messages, createMessage, isInitialised } = useMessages();
    const [
        messageState,
        handleChange,
        ,
        resetForm,
    ] = useForm<MessageStateType>(messageInitialState);

    const sendButtonClick = () => {
        createMessage({ text: messageState.messageText, username: currentUser.username });
        resetForm();
    };

    return (
        <Container>
            <ChatBox elevation = { 3 }>
                <MessagesBox>
                    {
                        isInitialised ? messages.map((message) => (
                            <Message
                                isEdited = { message.createdAt !== message.updatedAt }
                                isOwnMessage = { message.username === currentUser.username }
                                key = { message._id }
                                message = { message.text }
                                time = { message.createdAt }
                                userName = { message.username }
                            />
                        )) : <Spinner />
                    }
                </MessagesBox>
                <form onSubmit = { (event) => event.preventDefault() }>
                    <UserInputContainer>
                        <TextField
                            fullWidth
                            label = 'Enter message...'
                            name = 'messageText'
                            size = 'small'
                            value = { messageState.messageText }
                            onChange = { handleChange }
                        />
                        <StyledButton
                            color = 'primary'
                            disabled = { !messageState.messageText }
                            type = 'submit'
                            variant = 'contained'
                            onClick = { sendButtonClick }>
                            Send
                        </StyledButton>
                    </UserInputContainer>
                </form>
            </ChatBox>
        </Container>
    );
};

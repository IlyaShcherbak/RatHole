// Core
import React, { FC } from 'react';

// Components
import { Message } from '../Message';
import { ChatInputForm } from '../ChatInputForm';

// Elements
import { Spinner } from '../../elements';

// Types
import { User } from '../../../bus/user/types';
import { Messages } from '../../../bus/messages/types';

// Styles
import { Container, ChatBox, MessagesBox } from './styles';

type PropTypes = {
    currentUser: User,
    messages: Messages,
    isChatInitialised: boolean,
    toogleKeyboard: () => void
}

export const Chat: FC<PropTypes> = ({ currentUser, messages, isChatInitialised, toogleKeyboard }) => {
    return (
        <Container>
            <ChatBox elevation = { 3 }>
                <MessagesBox>
                    {
                        isChatInitialised ? messages.map((message) => (
                            <Message
                                id = { message._id }
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
                <ChatInputForm
                    toogleKeyboard = { toogleKeyboard }
                    user = { currentUser }
                />
            </ChatBox>
        </Container>
    );
};

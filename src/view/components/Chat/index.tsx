// Core
import React, { FC, ReactElement } from 'react';

// Components
import { Message } from '../Message';

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
    children?: ReactElement
}

export const Chat: FC<PropTypes> = ({ currentUser, messages, isChatInitialised, children }) => {
    return (
        <Container>
            <ChatBox elevation = { 3 }>
                <MessagesBox>
                    {
                        isChatInitialised ? messages.map((message) => (
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
                {children}
            </ChatBox>
        </Container>
    );
};

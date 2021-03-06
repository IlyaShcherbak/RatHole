// Core
import React, { FC, useState } from 'react';
import moment from 'moment';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { PromptDialog } from '../PromptDialog';

// MUI
import { IconButton } from '@mui/material';

// Styles
import * as S from './styles';

// Hooks
import { useCurrentMessage } from '../../../tools/hooks';

type PropTypes = {
    message: string
    time: string
    isOwnMessage: boolean
    userName: string
    isEdited: boolean
    id: string;
}

export const Message: FC<PropTypes> = ({ message, time, userName, isEdited, isOwnMessage, id }) => {
    const [ showDialog, setShowDialog ] = useState(false);
    const { currentMessage, deleteMessage, setCurrentMessage } = useCurrentMessage();

    const onDeleteClick = () => setShowDialog(true);

    const onDeleteCancel = () => setShowDialog(false);
    const onDeleteApprove = () => {
        setShowDialog(false);
        deleteMessage(id);
    };

    const onEditClick = () => setCurrentMessage(message, id);

    return (
        <S.MessageBox className = { isOwnMessage ? 'sender' : '' }>
            <S.MessageBoxContainer>
                <S.MessageBoxUsername>
                    {
                        isOwnMessage && (
                            <>
                                <IconButton
                                    color = 'warning'
                                    disabled = { currentMessage._id === id }
                                    size = 'small'
                                    sx = {{ marginRight: 1 }}
                                    onClick = { onEditClick }>
                                    <FontAwesomeIcon
                                        icon = 'edit'
                                        size = 'xs'
                                    />
                                </IconButton>
                                <IconButton
                                    color = 'warning'
                                    size = 'small'
                                    sx = {{ marginRight: 1 }}
                                    onClick = { onDeleteClick }>
                                    <FontAwesomeIcon
                                        icon = 'trash'
                                        size = 'xs'
                                    />
                                </IconButton>
                            </>
                        )
                    }
                    {userName}
                </S.MessageBoxUsername>
                <S.MessageContent>
                    <S.MessageText>{message}</S.MessageText>
                    <S.MessageTime>{moment(time).format('MMMM Do HH:mm')}</S.MessageTime>
                    <S.MessageStatus>{isEdited ? 'edited' : 'original'}</S.MessageStatus>
                </S.MessageContent>
            </S.MessageBoxContainer>
            { showDialog && (
                <PromptDialog
                    isOpen = { showDialog }
                    title = 'Are you sure want to delete message?'
                    onApprove = { onDeleteApprove }
                    onCancel = { onDeleteCancel }
                />
            ) }
        </S.MessageBox>
    );
};

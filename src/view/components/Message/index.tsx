// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import * as S from './styles';

type PropTypes = {
    message: string
    time: string
    isOwnMessage: boolean;
    userName: string
    isEdited: boolean
}

export const Message: FC<PropTypes> = ({ message, time, userName, isEdited, isOwnMessage }) => {
    return (
        <S.MessageBox className = { isOwnMessage ? 'sender' : '' }>
            <S.MessageBoxContainer>
                <S.MessageBoxUsername>{userName}</S.MessageBoxUsername>
                <S.MessageContent>
                    <S.MessageText>{message}</S.MessageText>
                    <S.MessageTime>{moment(time).format('MMMM Do HH:mm')}</S.MessageTime>
                    <S.MessageStatus>{isEdited ? 'edited' : 'original'}</S.MessageStatus>
                </S.MessageContent>
            </S.MessageBoxContainer>
        </S.MessageBox>
    );
};

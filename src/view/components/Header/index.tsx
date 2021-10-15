// Core
import React, { FC } from 'react';

// Types
import { User } from '../../../bus/user/types';

// Material Ui
import Button from '@mui/material/Button';

// Styles
import { Container, HeaderText } from './styles';

type PropTypes = {
    user: User,
    logOut: () => void
}

export const Header: FC<PropTypes> = ({ user, logOut }) => {
    return (
        <Container>
            <HeaderText
                gutterBottom
                variant = 'h5'>
                Hi, {user.username}!
            </HeaderText>
            <Button
                color = 'warning'
                variant = 'outlined'
                onClick = { logOut }>
                GET OUT OF HOLE
            </Button>
        </Container>
    );
};

// Core
import React, { FC } from 'react';

// Types
import { User } from '../../../bus/user/types';

// Material Ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Styles
import { Container } from './styles';

type PropTypes = {
    user: User,
    logOut: () => void
}

export const Header: FC<PropTypes> = ({ user, logOut }) => {
    return (
        <Container>
            <Stack
                direction = 'row'
                spacing = { 1 }>

                <Typography

                    variant = 'h5'>
                    Hi, {user.username}!
                </Typography>
                <Button
                    color = 'error'
                    variant = 'outlined'
                    onClick = { logOut }>
                    GET OUT OF HOLE
                </Button>

            </Stack>
        </Container>
    );
};

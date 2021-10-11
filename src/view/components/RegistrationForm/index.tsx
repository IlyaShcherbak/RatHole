// Core
import React, { FC } from 'react';

// Styles
import { CustomForm, StyledTextField } from './styles';

//Material Ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type PropTypes = {}

export const RegistrationForm: FC<PropTypes> = () => {
    const randomString = [ ...Array(30) ].map(() => Math.random().toString(36)[ 2 ]).join('')
        .slice(-7)
        .toUpperCase();
    const name = `RAT: ${randomString}`;

    return (
        <CustomForm>
            <Stack
                direction = 'column'
                spacing = { 1 }>
                <Typography
                    gutterBottom
                    color = 'white'
                    variant = 'body1'>
                    Enter your ratname:
                </Typography>
                <StyledTextField
                    id = 'filled-basic'
                    value = { name }
                    variant = 'outlined'
                />
                <Button
                    color = 'error'
                    variant = 'outlined'>
                    DROP INTO HOLE
                </Button>
            </Stack>
        </CustomForm>

    );
};

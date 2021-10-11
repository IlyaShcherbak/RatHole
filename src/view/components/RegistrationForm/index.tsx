// Core
import React, { FC } from 'react';

// Styles
import { CustomForm, StyledTextField } from './styles';

//Material Ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Utils
import { getRandomString } from '../../../tools/utils';

// Hooks
import { useForm } from '../../../tools/hooks';

// Redux
import { useUser } from '../../../bus/user';

type PropTypes = {}

export type RegistrationStateType = {
    username: string,
}

const registrationInitialState: RegistrationStateType = {
    username: `RAT:${getRandomString(6, true)}`,
};

export const RegistrationForm: FC<PropTypes> = () => {
    const [
        registrationState,
        setRegistrationState,
    ] = useForm<RegistrationStateType>(registrationInitialState);
    const { createUser } = useUser();

    const onRegistrationClick = () => createUser(registrationState.username);

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
                    name = 'username'
                    value = { registrationState.username }
                    variant = 'outlined'
                    onChange = { setRegistrationState }
                />
                <Button
                    color = 'error'
                    variant = 'outlined'
                    onClick = { onRegistrationClick }>
                    DROP INTO HOLE
                </Button>
            </Stack>
        </CustomForm>

    );
};

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
import { useForm, useLocalStorage } from '../../../tools/hooks';

// Constants
import { API_URL } from '../../../init/constants';
import { User } from '../../../bus/users/types';

// Redux
import { useTogglersRedux } from '../../../bus/client/togglers';

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
    const [ , setUserId ] = useLocalStorage('userId', '');
    const { setTogglerAction } = useTogglersRedux();

    const onRegistrationClick = async () => {
        const response = await fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationState),
        });
        const { _id } = await response.json() as User;

        if (_id) {
            setUserId(_id);
            setTogglerAction({
                type:  'isLoggedIn',
                value: true,
            });
        }
        console.log({ registrationState, _id });
    };

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

// Core
import React, { FC } from 'react';

// Styles
import { CustomForm, StyledTextField, Header, StyledButton } from './styles';

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

    const { registerUser } = useUser();

    const onRegistrationClick = () => registerUser(registrationState.username);

    return (
        <CustomForm>
            <Header variant = 'h5'>
                Enter your ratname:
            </Header>
            <StyledTextField
                fullWidth
                id = 'filled-basic'
                name = 'username'
                value = { registrationState.username }
                variant = 'outlined'
                onChange = { setRegistrationState }
            />
            <StyledButton
                className = 'register-btn'
                color = 'warning'
                variant = 'outlined'
                onClick = { onRegistrationClick }>
                DROP INTO HOLE
            </StyledButton>
        </CustomForm>

    );
};

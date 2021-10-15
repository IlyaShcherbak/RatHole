// Core
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

// MUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CustomForm = styled.form`
    padding: 15px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.app.containerBg};
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    width: 75%;
    max-width: 500px;

    ${up('lg')} {
        padding: 30px;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: ${({ theme }) => theme.app.secondary}
    }     
`;

export const Header = styled(Typography)`
    color: ${({ theme }) => theme.fourth.typePrimary}      
`;

export const StyledTextField = styled(TextField)`
    .MuiInputBase-root {
        color: ${({ theme }) => theme.input.primary};
        background-color: ${({ theme }) => theme.input.secondary};
        margin: 15px 0;
    }
`;

export const StyledButton = styled(Button)`
    width: 100%;
    height: 60px;

    ${up('lg')} {
        height: 90px;
    }
`;

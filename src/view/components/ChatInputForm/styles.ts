// Core
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

// MUI
import Button from '@mui/material/Button';

export const UserInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin: 10px;

    & > .MuiButtonBase-root {
        grid-row: 2;
    }

    ${up('lg')} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const StyledButton = styled(Button)`
    &.MuiButtonBase-root {
        margin: 10px;
        height: 80%;
        width: auto;
    }
`;


// Core
import styled from 'styled-components';

// MUI
import Button from '@mui/material/Button';

export const UserInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
`;

export const StyledButton = styled(Button)`
    &.MuiButton-root {
        margin-left: 10px;
        height: 80%;
    }
`;


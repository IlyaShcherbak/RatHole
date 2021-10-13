// Core
import styled from 'styled-components';

// MUI
import Button from '@mui/material/Button';

export const PageContainer = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
export const Container = styled.section`
    height: 100vh;
    position: relative;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
`;

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


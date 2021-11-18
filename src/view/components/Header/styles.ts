// Core
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

// MUI
import Typography from '@mui/material/Typography';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0;

    ${up('lg')} {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const HeaderText = styled(Typography)`
    color: ${({ theme }) => theme.fourth.typePrimary}      
`;

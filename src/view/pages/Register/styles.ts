// Core
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

// MUI
import Typography from '@mui/material/Typography';

export const Container = styled.section`
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = styled(Typography)`
    &.MuiTypography-h1 {
        font-size: 2.5rem;
        margin-top: 75px;
        letter-spacing: 0.2rem;

        ${up('md')} {
            margin-top: 90px;
            font-size: 3rem;
        }  

        ${up('xl')} {
            margin-top: 90px;
            font-size: 6rem;
        }        
    }
`;

// Core
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(${({ theme }) => theme.app.primary} 0%, ${({ theme }) => theme.app.secondary} 100%);
`;

export const AppImage = styled.img`
    display: none;

    ${up('lg')} {
        display: block;
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 30%;
    }
`;

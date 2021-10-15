// Core
import styled from 'styled-components';

export const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(${({ theme }) => theme.app.primary} 0%, ${({ theme }) => theme.app.secondary} 100%);
`;

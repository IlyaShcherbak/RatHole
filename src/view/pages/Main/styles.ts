// Core
import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 2 / 3;
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.second.containerBg};
`;

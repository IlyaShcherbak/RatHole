// Core
import styled from 'styled-components';

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

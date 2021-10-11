// Core
import styled from 'styled-components';

// Images
import image from '../../../assets/images/bgRat.jpeg';

export const Container = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-start: span 3;
    height: 100%;
    place-items: center;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`;

// Core
import styled from 'styled-components';

// Material UI
import { Paper } from '@material-ui/core';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ChatBox = styled(Paper)({
    width:          '80vw',
    height:         '55vh',
    maxWidth:       '500px',
    maxHeight:      '700px',
    display:        'flex',
    flexDirection:  'column',
    position:       'relative',
    justifyContent: 'center',
});

export const MessagesBox = styled(Paper)({
    width:         'calc( 100% - 20px )',
    margin:        10,
    overflowY:     'scroll',
    height:        'calc( 100% - 80px )',
    display:       'flex',
    flexDirection: 'column-reverse',
});

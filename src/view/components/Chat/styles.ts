// Core
import styled from 'styled-components';

// Material UI
import { Paper } from '@material-ui/core';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:10;
`;

export const ChatBox = styled(Paper)({
    width:            '80vw',
    height:           '80vh',
    maxWidth:         '500px',
    maxHeight:        '700px',
    display:          'flex',
    flexDirection:    'column',
    position:         'relative',
    justifyContent:   'center',
    '&.showKeyboard': {
        height: '55vh',
    },
    '&.noKeyboard': {
        height: '80vh',
    },
});

export const MessagesBox = styled(Paper)({
    width:         'calc( 100% - 20px )',
    margin:        10,
    overflowY:     'scroll',
    height:        'calc( 100% - 80px )',
    display:       'flex',
    flexDirection: 'column-reverse',
});

export const CustomContainer = styled(Container)`
    
`;

// Core
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

// MUI
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)((props) => ({
    '&.MuiButton-root': {
        height:        30,
        minWidth:      20,
        fontSize:      10,
        boxShadow:     'none',
        textTransform: 'none',
        padding:       '5px 1px',

        border:          '1px solid',
        lineHeight:      0.5,
        color:           'orange',
        backgroundColor: 'black',
        borderColor:     'orange',

        '@media (min-width: 360px)': {
            minWidth: 23,
        },

        '@media (min-width: 375px)': {
            minWidth: 25,
            fontSize: 12,
        },

        '@media (min-width: 425px)': {
            minWidth: 28,
            fontSize: 14,
        },

        [ up('sm')(props) ]: {
            minWidth: 31,
            fontSize: 15,
            padding:  '5px 6px',
        },

        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor:     '#0062cc',
            boxShadow:       'none',
        },
        '&:active': {
            boxShadow:       'none',
            backgroundColor: '#0062cc',
            borderColor:     '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },

    '&.special': {
        minWidth: 'fit-content',
        width:    '100%',
        fontSize: 8,

        [ up('sm')(props) ]: {
            fontSize: 12,
        },
    },

    '&.pressed': {
        color:           'black',
        backgroundColor: 'orange',
    },
}));

export const ResponseStyledButton = styled(StyledButton)`
    @media (min-width: 375px) {
        min-width: 24px;
        font-size: 12px;
    }
    @media (min-width: 425px) {
        min-width: 28px;
        font-size: 12px;
    }
`;

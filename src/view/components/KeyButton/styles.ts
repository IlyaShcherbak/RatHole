// Core
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

// MUI
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)((props) => ({
    '&.MuiButton-root': {
        height:        30,
        minWidth:      16,
        fontSize:      10,
        boxShadow:     'none',
        textTransform: 'none',
        padding:       '5px 1px',

        border:          '1px solid',
        lineHeight:      0.5,
        color:           'orange',
        backgroundColor: 'black',
        borderColor:     'orange',

        [ up('lg')(props) ]: {
            minWidth: 33,
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

        [ up('lg')(props) ]: {
            fontSize: 12,
        },
    },

    '&.pressed': {
        color:           'black',
        backgroundColor: 'orange',
    },
}));

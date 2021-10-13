// Core
import styled from 'styled-components';

// MUI
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)({
    '&.MuiButton-root': {
        height:          30,
        minWidth:        33,
        boxShadow:       'none',
        textTransform:   'none',
        fontSize:        15,
        padding:         '5px 6px',
        border:          '1px solid',
        lineHeight:      0.5,
        color:           'orange',
        backgroundColor: 'black',
        borderColor:     'orange',
        '&:hover':       {
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
        fontSize: 12,
    },

    '&.pressed': {
        color:           'black',
        backgroundColor: 'orange',
    },
});

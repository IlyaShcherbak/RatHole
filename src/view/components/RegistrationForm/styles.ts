// Core
import styled from 'styled-components';

//Material Ui
import TextField from '@mui/material/TextField';

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.5);
`;


export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        color:           theme.input.primary,
        backgroundColor: theme.input.secondary,
    },
}));

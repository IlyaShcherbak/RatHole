// Core
import React, { FC } from 'react';

// Styles
import { StyledButton } from './styles';

type PropTypes = {
    keyText: string;
    isPressed: boolean;
    isSpecialKey: boolean;
    onClick: () => void;
}

export const KeyButton: FC<PropTypes> = ({ keyText, onClick, isPressed, isSpecialKey }) => {
    return (
        <StyledButton
            className = { `${isSpecialKey ? 'special' : ''} ${isPressed ? 'pressed' : ''}` }
            onClick = { onClick }>
            {keyText}
        </StyledButton>
    );
};

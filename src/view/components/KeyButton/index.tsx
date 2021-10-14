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
    // const specialValue = specialKeys[ keyValue as SpecialKey ];
    // const isSpecialKey = Boolean(specialValue);
    // const isPressed = isSpecialKey ? pressedKey.code === keyValue : pressedKey.key === keyValue;

    // const keyText = isSpecialKey ? specialValue.key : keyValue;
    // const code = isSpecialKey ? keyValue : `Key${keyValue}`;

    return (
        <StyledButton
            className = { `${isSpecialKey ? 'special' : ''} ${isPressed ? 'pressed' : ''}` }
            onClick = { onClick }>
            {keyText}
        </StyledButton>
    );
};

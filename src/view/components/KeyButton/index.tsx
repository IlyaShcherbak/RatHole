// Core
import { KeyEventData } from '../KeyBoard';

// Types
import React, { FC } from 'react';

// Styles
import { StyledButton } from './styles';

type PropTypes = {
    keyValue: string;
    pressedKey: KeyEventData;
    onClick: (keyEvent: KeyEventData) => void;
}

export enum SpecialKey {
    Backquote = 'Backquote',
    Backspace = 'Backspace',
    Tab = 'Tab',
    CapsLock = 'CapsLock',
    Enter = 'Enter',
    ShiftLeft = 'ShiftLeft',
    ShiftRight = 'ShiftRight',
    Space = 'Space',
}

type SpecialKeys = {
    [key in SpecialKey]: {
        code: string;
        key: string;
    };
}
export const specialKeys: SpecialKeys = {
    Backquote:  { code: 'Backquote', key: '`' },
    Backspace:  { code: 'Backspace', key: 'Bcsp ⌫' },
    Tab:        { code: 'Tab', key: '( ͡❛ ͜ʖ͡❛ )' },
    CapsLock:   { code: 'CapsLock', key: 'CapsLock ⇪' },
    Enter:      { code: 'Enter', key: 'Enter ↵' },
    ShiftLeft:  { code: 'ShiftLeft', key: 'Shift ⇧' },
    ShiftRight: { code: 'ShiftRight', key: 'Shift ⇧' },
    Space:      { code: ' ', key: 'Space' },
};

export const KeyButton: FC<PropTypes> = ({ keyValue, onClick, pressedKey }) => {
    const specialValue = specialKeys[ keyValue as SpecialKey ];
    const isSpecialKey = Boolean(specialValue);
    const isPressed = isSpecialKey ? pressedKey.code === keyValue : pressedKey.key === keyValue;

    const keyText = isSpecialKey ? specialValue.key : keyValue;
    const code = isSpecialKey ? keyValue : `Key${keyValue}`;

    return (
        <StyledButton
            className = { `${isSpecialKey ? 'special' : ''} ${isPressed ? 'pressed' : ''}` }
            onClick = { () => onClick({ key: keyValue, code }) }>
            {keyText}
        </StyledButton>
    );
};

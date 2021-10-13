// Core
import React, { FC, useState } from 'react';

// Types
import { KeyEventData } from '../../pages/Main';

// Components
import { KeyButton, SpecialKey } from '../KeyButton';

// Styles
import * as S from './styles';

enum LayoutType {
    default = 'default',
    shift = 'shift'
}

type Layout = {
    [key in LayoutType]: Array<string>
}

const defaultLayout: Layout = {
    default: [
        `${SpecialKey.Backquote} 1 2 3 4 5 6 7 8 9 0 - = ${SpecialKey.Backspace}`,
        `${SpecialKey.Tab} q w e r t y u i o p [ ] \\`,
        `${SpecialKey.CapsLock} a s d f g h j k l ; \' ${SpecialKey.Enter}`,
        `${SpecialKey.ShiftLeft} z x c v b n m , . / ${SpecialKey.ShiftRight}`,
        `${SpecialKey.Space}`,
    ],
    shift: [
        `~ ! @ # $ % ^ & * ( ) _ + ${SpecialKey.Backspace}`,
        `${SpecialKey.Tab} Q W E R T Y U I O P { } |`,
        `${SpecialKey.CapsLock} A S D F G H J K L : " ${SpecialKey.Enter}`,
        `${SpecialKey.ShiftLeft} Z X C V B N M < > ? ${SpecialKey.ShiftRight}`,
        `${SpecialKey.Space}`,
    ],
};

type PropTypes = {
    layout?: Layout;
    keyPressed: KeyEventData;
    text: string;
    setText: (newText: string) => void;
    submitText: () => void;
}

export const KeyBoard: FC<PropTypes> = ({ layout = defaultLayout, keyPressed, text, setText, submitText }) => {
    const [ isShiftPressed, setShiftPressed ] = useState(false);
    const [ isCapslockPressed, setCapslockPressed ] = useState(false);

    const { shiftKey } = keyPressed;
    const layoutType = isCapslockPressed || isShiftPressed || shiftKey ? LayoutType.shift : LayoutType.default;
    const currentLayout = layout[ layoutType ];

    const handleBackspace = () => {
        setText(text.slice(0, -1));
    };

    const handleTab = () => {
        setText(`${text}¯\\_( ͡👁 ʖ ͡👁)_/'`);
        setShiftPressed(false);
    };

    const handleSimpleKey = (keyValue: string) => {
        setText(`${text}${keyValue}`);
        setShiftPressed(false);
    };

    const handleShift = () => {
        setShiftPressed(!isShiftPressed);
    };

    const handleCapslock = () => {
        setCapslockPressed(!isCapslockPressed);
        setShiftPressed(false);
    };

    const handleEnter = () => {
        submitText();
        setShiftPressed(false);
    };

    const handleSpace = () => {
        setText(`${text} `);
        setShiftPressed(false);
    };

    const onKeyClick = (keyValue: string, keyCode: string) => {
        switch (keyCode) {
            case SpecialKey.Backspace:
                handleBackspace();
                break;
            case SpecialKey.Tab:
                handleTab();
                break;
            case SpecialKey.CapsLock:
                handleCapslock();
                break;
            case SpecialKey.ShiftLeft:
            case SpecialKey.ShiftRight:
                handleShift();
                break;
            case SpecialKey.Enter:
                handleEnter();
                break;
            case SpecialKey.Space:
                handleSpace();
                break;
            default:
                handleSimpleKey(keyValue);
        }
    };

    const buttonsLayout = currentLayout.map((row) => {
        const keysArray = row.split(' ');

        const keyBtns = keysArray.map((btnKey, keyIndex) => {
            return (
                <KeyButton
                    key = { btnKey + keyIndex }
                    keyValue = { btnKey }
                    pressedKey = { keyPressed }
                    onClick = { onKeyClick }
                />
            );
        });

        return <S.KeyRow key = { keysArray[ 0 ] } >{keyBtns}</S.KeyRow>;
    });

    return (
        <S.Container>
            {buttonsLayout}
        </S.Container>
    );
};

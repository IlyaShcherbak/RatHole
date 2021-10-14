// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useCurrentMessage } from '../../../bus/currentMessage';

// Types
import { User } from '../../../bus/user/types';

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

export type KeyEventData = {
    key: string;
    code: string;
    shiftKey?: boolean;
}

const noKeyPressed: KeyEventData = { key: '', code: '', shiftKey: false };

type PropTypes = {
    layout?: Layout;
    user:  User,
}

export const KeyBoard: FC<PropTypes> = ({ layout = defaultLayout, user }) => {
    const { currentMessage, setCurrentMessage, sendMessage } = useCurrentMessage();
    const [ keyPressed, changeKeyPressed ] = useState<KeyEventData>(noKeyPressed);
    const [ isShiftPressed, setShiftPressed ] = useState(false);
    const [ isCapslockPressed, setCapslockPressed ] = useState(false);

    const { shiftKey } = keyPressed;
    const layoutType = isCapslockPressed || isShiftPressed || shiftKey ? LayoutType.shift : LayoutType.default;
    const currentLayout = layout[ layoutType ];

    const handleBackquote = () => {
        setCurrentMessage(`${currentMessage}\``);
        setShiftPressed(false);
    };

    const handleBackspace = () => setCurrentMessage(currentMessage.slice(0, -1));

    const handleTab = () => {
        setCurrentMessage(`${currentMessage}¯\\_( ͡👁 ʖ ͡👁)_/'`);
        setShiftPressed(false);
    };

    const handleShift = () => setShiftPressed(!isShiftPressed);

    const handleCapslock = () => {
        setCapslockPressed(!isCapslockPressed);
        setShiftPressed(false);
    };

    const handleEnter = () => {
        if (currentMessage) {
            sendMessage({ text: currentMessage, username: user.username });
            setCurrentMessage('');
        }
        setShiftPressed(false);
    };

    const handleSpace = () => {
        setCurrentMessage(`${currentMessage} `);
        setShiftPressed(false);
    };

    const handleSimpleKey = (keyEvent: KeyEventData) => {
        const isSimpleKey = keyEvent.key.length === 1;


        if (isSimpleKey) {
            setCurrentMessage(`${currentMessage}${keyEvent.key}`);
            setShiftPressed(false);
        }
    };

    const onKeyClick = (keyEvent: KeyEventData) => {
        console.log({ currentMessage });
        switch (keyEvent.code) {
            case SpecialKey.Backquote:
                handleBackquote();
                break;
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
                handleSimpleKey(keyEvent);
        }
    };

    const onKeyDown = (keyData: KeyEventData) => {
        const input = document.querySelector('#messageText') as HTMLInputElement;
        input.focus();

        if (keyData.key !== keyPressed.key) {
            changeKeyPressed(keyData);
        }
    };

    const onKeyUp = () => {
        changeKeyPressed(noKeyPressed);
    };

    useEffect(() => {
        window.addEventListener('keydown', ({ key, code, shiftKey }) => onKeyDown({ key, code, shiftKey }), false);
        window.addEventListener('keyup', onKeyUp, false);
    }, []);

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

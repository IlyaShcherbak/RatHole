// Core
import { useEffect, useState } from 'react';

// Bus
import { useCurrentMessage } from '../../bus/currentMessage';
import { useUser } from '../../bus/user';

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

export type KeyEventData = Partial<KeyboardEvent>;

const noKeyPressed = { key: '', code: '', shiftKey: false };

export const useKeyboard = () => {
    const { user } = useUser();
    const { currentMessage, setCurrentMessage, sendMessage } = useCurrentMessage();
    const [ keyPressed, changeKeyPressed ] = useState<Partial<KeyboardEvent>>(noKeyPressed);
    const [ isShiftPressed, setShiftPressed ] = useState(false);
    const [ isCapslockPressed, setCapslockPressed ] = useState(false);

    const { shiftKey } = keyPressed;
    const layoutType = isCapslockPressed || isShiftPressed || shiftKey ? LayoutType.shift : LayoutType.default;
    const currentLayout = defaultLayout[ layoutType ];

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

    const handleCapslock = (keyEvent?: KeyEventData) => {
        if (keyEvent && keyEvent.getModifierState) {
            setCapslockPressed(keyEvent.getModifierState(SpecialKey.CapsLock));
        } else {
            setCapslockPressed(!isCapslockPressed);
        }

        setShiftPressed(false);
    };

    const handleEnter = () => {
        if (currentMessage.trim()) {
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
        const isSimpleKey = keyEvent.key && keyEvent.key.length === 1;

        if (isSimpleKey) {
            setCurrentMessage(`${currentMessage}${keyEvent.key}`);
            setShiftPressed(false);
        }
    };

    const onKeyClick = (keyEvent: KeyEventData) => {
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

    const onKeyDown = (keyEvent: KeyboardEvent) => {
        const input = document.querySelector('#messageText') as HTMLInputElement;
        input.focus();

        if (keyEvent.key !== keyPressed.key) {
            changeKeyPressed(keyEvent);

            if (keyEvent.key === SpecialKey.CapsLock) {
                handleCapslock(keyEvent);
            }
        }
    };

    const onKeyUp = () => changeKeyPressed(noKeyPressed);

    useEffect(() => {
        window.addEventListener('keydown', (event) => onKeyDown(event), false);
        window.addEventListener('keyup', onKeyUp, false);
    }, []);

    const getSpecialKey = (key: string) => specialKeys[ key as SpecialKey ];

    const isKeyPressed = (key: string) => {
        const isSpecial = Boolean(getSpecialKey(key));
        let isPressed = isSpecial ? keyPressed.code === key : keyPressed.key === key;

        if (key === SpecialKey.CapsLock) {
            isPressed = isCapslockPressed;
        }

        return isPressed;
    };

    return {
        keyPressed,
        currentLayout,
        onKeyClick,
        getSpecialKey,
        isKeyPressed,
    };
};

// Core
import { useEffect, useState } from 'react';

// Bus
import { useUser } from '../../bus/user';

// Hooks
import { useCurrentMessage } from './useCurrentMessage';

export enum SpecialKey {
    Backquote = 'Backquote',
    Backspace = 'Backspace',
    Tab = 'Tab',
    CapsLock = 'CapsLock',
    Enter = 'Enter',
    ShiftLeft = 'ShiftLeft',
    ShiftRight = 'ShiftRight',
    ChangeLang = 'ChangeLang',
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
    ChangeLang: { code: 'ChangeLang', key: '🌐' },
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
        `${SpecialKey.ChangeLang} ${SpecialKey.Space}`,
    ],
    shift: [
        `~ ! @ # $ % ^ & * ( ) _ + ${SpecialKey.Backspace}`,
        `${SpecialKey.Tab} Q W E R T Y U I O P { } |`,
        `${SpecialKey.CapsLock} A S D F G H J K L : " ${SpecialKey.Enter}`,
        `${SpecialKey.ShiftLeft} Z X C V B N M < > ? ${SpecialKey.ShiftRight}`,
        `${SpecialKey.ChangeLang} ${SpecialKey.Space}`,
    ],
};

const ruLayout: Layout = {
    default: [
        `${SpecialKey.Backquote} 1 2 3 4 5 6 7 8 9 0 - = ${SpecialKey.Backspace}`,
        `${SpecialKey.Tab} й ц у к е н г ш щ з х ъ \\`,
        `${SpecialKey.CapsLock} ф ы в а п р о л д ж э ${SpecialKey.Enter}`,
        `${SpecialKey.ShiftLeft} я ч с м и т ь б ю . ${SpecialKey.ShiftRight}`,
        `${SpecialKey.ChangeLang} ${SpecialKey.Space}`,
    ],
    shift: [
        `~ ! @ # $ % ^ & * ( ) _ + ${SpecialKey.Backspace}`,
        `${SpecialKey.Tab} Й Ц У К Е Н Г Ш Щ З Х Ъ |`,
        `${SpecialKey.CapsLock} Ф Ы В А П Р О Л Д Ж Э ${SpecialKey.Enter}`,
        `${SpecialKey.ShiftLeft} Я Ч С М И Т Ь Б Ю , ${SpecialKey.ShiftRight}`,
        `${SpecialKey.ChangeLang} ${SpecialKey.Space}`,
    ],
};

export type KeyEventData = Partial<KeyboardEvent>;

const noKeyPressed = { key: '', code: '', shiftKey: false };

export const useKeyboard = () => {
    const { user } = useUser();
    const {
        currentMessage: { text, _id },
        setCurrentMessage,
        sendMessage,
        editMessage,
        isEditMode,
    } = useCurrentMessage();
    const [ keyPressed, changeKeyPressed ] = useState<Partial<KeyboardEvent>>(noKeyPressed);
    const [ isShiftPressed, setShiftPressed ] = useState(false);
    const [ isCapslockPressed, setCapslockPressed ] = useState(false);
    const [ layout, setLayout ] = useState(defaultLayout);

    const { shiftKey } = keyPressed;
    const layoutType = isCapslockPressed || isShiftPressed || shiftKey ? LayoutType.shift : LayoutType.default;
    const currentLayout = layout[ layoutType ];

    const handleChangeLayout = () => {
        setLayout(layout === defaultLayout ? ruLayout : defaultLayout);
    };

    const handleBackquote = () => {
        setCurrentMessage(`${text}\``);
        setShiftPressed(false);
    };

    const handleBackspace = () => setCurrentMessage(text.slice(0, -1));

    const handleTab = () => {
        setCurrentMessage(`${text}¯\\_( ͡👁 ʖ ͡👁)_/'`);
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
        const trimmedMessage = text.trim();
        if (trimmedMessage) {
            isEditMode
                ? editMessage(trimmedMessage, _id)
                : sendMessage(trimmedMessage, user.username);
        }
        setShiftPressed(false);
    };

    const handleSpace = () => {
        setCurrentMessage(`${text} `);
        setShiftPressed(false);
    };

    const handleSimpleKey = (keyEvent: KeyEventData) => {
        const isSimpleKey = keyEvent.key && keyEvent.key.length === 1;

        if (isSimpleKey) {
            setCurrentMessage(`${text}${keyEvent.key}`);
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
            case SpecialKey.ChangeLang:
                handleChangeLayout();
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

// Core
import React, { FC } from 'react';

// Hooks
import { useKeyboard } from '../../../tools/hooks';

// Types
import { User } from '../../../bus/user/types';

// Components
import { KeyButton } from '../KeyButton';

// Styles
import * as S from './styles';

type PropTypes = {
    user:  User,
}

export const KeyBoard: FC<PropTypes> = () => {
    const { currentLayout, onKeyClick, isKeyPressed, getSpecialKey } = useKeyboard();

    const buttonsLayout = currentLayout.map((row) => {
        const keysArray = row.split(' ');

        const keyBtns = keysArray.map((btnKey, keyIndex) => {
            const specialValue = getSpecialKey(btnKey);
            const isSpecialKey = Boolean(specialValue);
            const isPressed = isKeyPressed(btnKey);

            const keyText = isSpecialKey ? specialValue.key : btnKey;
            const code = isSpecialKey ? btnKey : `Key${btnKey}`;

            return (
                <KeyButton
                    isPressed = { isPressed }
                    isSpecialKey = { isSpecialKey }
                    key = { keyIndex }
                    keyText = { keyText }
                    onClick = { () => onKeyClick({ key: btnKey, code }) }
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

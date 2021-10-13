// Core
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
    faCog,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

export const initIconsLibrary = () => library.add(
    faCheck,
    faCog,
    faKeyboard,
);

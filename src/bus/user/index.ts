// Core
import { useDispatch } from 'react-redux';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Hooks
import { useLocalStorage, useSelector } from '../../tools/hooks';

// Constants
import { API_URL } from '../../init/constants';

//Types
import { User } from './types';

// Bus
import { noUser, userActions } from './slice';

export const useUser = () => {
    const dispatch = useDispatch();
    const { setTogglerAction } = useTogglersRedux();
    const [ userId, setUserId ] = useLocalStorage('userId', '');
    const { user, isUserFetching } = useSelector(
        ({ user, togglers }) => ({ user, isUserFetching: togglers.isUserFetching }),
    );

    const checkUser = async () => {
        const hasUserId = !!userId;

        if (hasUserId) {
            setTogglerAction({
                type:  'isUserFetching',
                value: true,
            });

            const response = await fetch(`${API_URL}/users/refresh/${userId}`);
            const user = await response.json() as User;

            setTogglerAction({
                type:  'isUserFetching',
                value: false,
            });

            if (user) {
                dispatch(userActions.setUser(user));
            }

            setTogglerAction({
                type:  'isLoggedIn',
                value: !!user.username,
            });
        }
    };

    const createUser = async (username: string) => {
        const response = await fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });
        const user = await response.json() as User;

        if (user) {
            dispatch(userActions.setUser(user));
            setUserId(user._id);
            setTogglerAction({
                type:  'isLoggedIn',
                value: true,
            });
        }
    };

    const resetUser = () => {
        dispatch(userActions.setUser(noUser));
        setUserId('');
        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });
    };

    return {
        user,
        checkUser,
        createUser,
        resetUser,
        isFetching: isUserFetching,
    };
};

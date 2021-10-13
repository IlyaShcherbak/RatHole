// Core
import { useDispatch } from 'react-redux';
import localStorage from 'store';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Saga actions
import * as actions from './saga/actions';

// Hooks
import { useSelector } from '../../tools/hooks';

// Types
import { NameUser } from './types';

// Bus
import { noUser, userActions } from './slice';

export const useUser = () => {
    const dispatch = useDispatch();
    const { setTogglerAction } = useTogglersRedux();

    const userId = localStorage.get('userId');

    const { user, isUserFetching } = useSelector(
        ({ user, togglers }) => ({ user, isUserFetching: togglers.isUserFetching }),
    );

    const checkUser = () => {
        const hasUserId = Boolean(userId);

        if (hasUserId) {
            if (user) {
                dispatch(actions.refreshUserActionAsync(userId));
            }
        }
    };

    const registerUser = (username: NameUser) => {
        if (user) {
            localStorage.set('userId', user._id);
            dispatch(actions.registerUserActionAsync(username));
        }
    };

    const resetUser = () => {
        dispatch(userActions.setUser(noUser));
        localStorage.remove('userId');
        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });
    };

    return {
        user,
        checkUser,
        registerUser,
        resetUser,
        isFetching: isUserFetching,
    };
};

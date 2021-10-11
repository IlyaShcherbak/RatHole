// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Redux
import { useTogglersRedux } from '../client/togglers';
import { fetchUsersActionAsync } from './saga/actions';

// Hooks
import { useSelector } from '../../tools/hooks';

export const useUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users);
    const { togglersRedux: { isUsersFetching }} = useTogglersRedux();

    // useEffect(() => {
    //     if (filteredDays.length !== 0 && !foundedDay) {
    //         selectDay(filteredDays[ 0 ].id);
    //     }
    // }, [ filteredDays ]);

    useEffect(() => {
        dispatch(fetchUsersActionAsync());
    }, []);

    return {
        users,
        isFetching: isUsersFetching,
    };
};

// Fetch
export const FETCH_USERS_ASYNC = 'FETCH_USERS_ASYNC';
export type FetchUsersActionAsync = {
    type: typeof FETCH_USERS_ASYNC
};
export type FetchUsersContract = () => FetchUsersActionAsync

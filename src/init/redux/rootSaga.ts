// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchUsers } from '../../bus/users/saga';


export function* rootSaga() {
    yield all([ watchUsers() ]);
}

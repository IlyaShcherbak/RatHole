// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchMessages } from '../../bus/messages/saga';
import { watchCurrentMessage } from '../../bus/currentMessage/saga';
import { watchUser } from '../../bus/user/saga';


export function* rootSaga() {
    yield all([ watchMessages(), watchCurrentMessage(), watchUser() ]);
}

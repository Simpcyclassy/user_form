import { all, fork, take, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { eventChannel } from 'redux-saga';

import { addUser, updateUsersList } from './actions';
import { REQUEST_ADD_USER } from './actionTypes';
import { USERS_URL } from './constants';
import firebase from './firebase';

/**
 * Handles requesting the list of users the database
 *
 * @return {Void} - void
 */

function* requestAllUsers() {
    const channel = new eventChannel(emitter => {
        const listener = firebase.on('value', snapshot => {
            emitter({
                users: snapshot.val() || {},
            });
        });

        return () => {
            listener.off();
        };
    });

    while (true) {
        const { users } = yield take(channel);

        try {
            const payload = yield Object.keys(users).map(key => users[key]);

            const length = payload.length - 1;

            if (payload[length].id) {
                yield put(updateUsersList(payload));
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }
}

function* requestAddUsersUpdate(action) {
    try {
        yield axios({
            data: action.payload,
            method: 'post',
            url: USERS_URL,
        });

        yield put(addUser(action));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_USERS_LIST REQUEST_USERS_LIST} action.
 * Triggers request to pull the users from database
 *
 * @return {void}
 */

function* watchRequestUsersList() {
    try {
        yield fork(requestAllUsers);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_ADD_USER REQUEST_ADD_USER} action.
 * Triggers request to update product item
 *
 * @return {void}
 */
function* watchRequestAddUser() {
    try {
        yield takeLatest(REQUEST_ADD_USER, requestAddUsersUpdate);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* () {
    yield all([
        watchRequestUsersList(),
        watchRequestAddUser(),
    ]);
}

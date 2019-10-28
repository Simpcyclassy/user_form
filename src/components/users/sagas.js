import { all, fork, take, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { eventChannel } from 'redux-saga'

import { addUser, updateUsersList } from './actions';
import { REQUEST_USERS_LIST, REQUEST_ADD_USER } from './actionTypes';
import { USERS_URL } from './constants';
import database from './firebase';

/**
 * Listen to all updates
 *
 * @return {Void} - void
 */

function* startListener() {
    const channel = new eventChannel(emiter => {
        const listener = database.ref('users').on('value', snapshot => {
            emiter({ data: snapshot.val() || {} });
        });

        return () => {
            listener.off();
        };
    });

    while (true) {
        const { data } = yield take(channel);
        yield put(updateUsersList(data));
    }
}

/**
 * Handles requesting the list of users the database
 *
 * @return {Void} - void
 */
function* requestAllUsers() {
    try {
        const response = yield fetch(USERS_URL)
            .then(res => res.json());

        const data = yield Object.keys(response.users).map(key => response.users[key]);

        const length = data.length - 1;

        if (data[length].id) {
            yield put(updateUsersList(data));
        } else {
            // eslint-disable-next-line no-console
            console.log('ERROR', data);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
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

function* watchStartListener() {
    try {
        yield fork(startListener);
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
        yield takeLatest(REQUEST_USERS_LIST, requestAllUsers);
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
        watchStartListener(),
        watchRequestUsersList(),
        watchRequestAddUser(),
    ]);
}

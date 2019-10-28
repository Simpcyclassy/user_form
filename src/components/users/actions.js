import {
    ADD_USER,
    RESET_UPDATE_STATE,
    REQUEST_ADD_USER,
    REQUEST_USERS_LIST,
    UPDATE_USERS_LIST
} from './actionTypes';

/**
 * Triggers request to update users items
 *
 * @function
 * @param {Object} payload An object of users dataSource
 * @return {void} The {@link actionTypes.UPDATE_USERS_LIST UPDATE_USERS_LIST} action.
 */
export const updateUsersList = payload => ({
    payload,
    type: UPDATE_USERS_LIST,
});
/**
 * Triggers request to add a user
 *
 * @function
 * @param {Object} payload An object of captured users
 * @return {void} The {@link actionTypes.ADD_USER ADD_USER} action.
 */
export const addUser = payload => ({
    payload,
    type: ADD_USER,
});

/**
 * riggers request to reset update state
 *
 * @function
 * @param {Object} payload An object of captured users
 * @return {void} The {@link actionTypes.RESET_UPDATE_STATE RESET_UPDATE_STATE} action.
 */
export const resetUpdateState = () => ({
    type: RESET_UPDATE_STATE,
});

/**
 * Triggers request to retrieve all users from the database
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_USERS_LIST REQUEST_USERS_LIST}
 * action.
 */
export const requestUsersList = () => ({
    type: REQUEST_USERS_LIST,
});

/**
 * Triggers request to update product item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.REQUEST_ADD_USER REQUEST_ADD_USER}
 * action.
 */
export const requestProductUpdate = payload => ({
    payload,
    type: REQUEST_ADD_USER,
});

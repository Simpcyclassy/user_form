import { ADD_USER, REMOVE_USER, UPDATE_USERS_LIST } from './actionTypes';

/**
 * Triggers request to update users items
 *
 * @function
 * @param {Object} payload An object of users dataSource
 * @return {void} The {@link actionTypes.UPDATE_USERS_LIST UPDATE_USERS_LIST} action.
 */
export const updateUsersList = () => ({
    type: UPDATE_USERS_LIST,
});

/**
 * Triggers request to remove a user
 *
 * @function
 * @param {Object} payload An object of captured users
 * @return {void} The {@link actionTypes.REMOVE_USER REMOVE_USER} action.
 */
export const removeUser = payload => ({
    payload,
    type: REMOVE_USER,
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

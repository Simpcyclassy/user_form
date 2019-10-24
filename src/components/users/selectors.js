import { NAME } from './constants';

/**
 * Selects the <tt>user</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Number} the state data of the user table which contains user data
 * {@link module:users/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getUsers = state => state[NAME].users;

/**
 * Selects the <tt>user</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Number} the state data of the user table which contains user data
 * {@link module:users/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getisUpdated = state => state[NAME].isUpdated;

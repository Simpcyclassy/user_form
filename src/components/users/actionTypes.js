import { NAME } from './constants';

/**
 * Fired by the {@link actions.updateUsersList updateUsersList}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_USERS_LIST = `${NAME}/UPDATE_USERS_LIST`;

/**
 * Fired by the {@link actions.removeUser removeUser}
 * action creator.
 *
 * @type {String}
 */
export const REMOVE_USER = `${NAME}/REMOVE_USER`;

/**
 * Fired by the {@link actions.addUser addUser}
 * action creator.
 *
 * @type {String}
 */
export const ADD_USER = `${NAME}/ADD_USER`;

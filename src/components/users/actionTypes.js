import { NAME } from './constants';

/**
 * Fired by the {@link actions.updateUsersList updateUsersList}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_USERS_LIST = `${NAME}/UPDATE_USERS_LIST`;

/**
 * Fired by the {@link actions.addUser addUser}
 * action creator.
 *
 * @type {String}
 */
export const ADD_USER = `${NAME}/ADD_USER`;

/**
 * Fired by the {@link actions.resetUpdateState resetUpdateState}
 * action creator.
 *
 * @type {String}
 */
export const RESET_UPDATE_STATE = `${NAME}/RESET_UPDATE_STATE`;

/**
 * Fired by the {@link actions.requestUsersList requestUsersList}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_USERS_LIST = `${NAME}/REQUEST_USERS_LIST`;

/**
 * Fired by the {@link actions.requestAddUser requestAddUser}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_ADD_USER = `${NAME}/REQUEST_ADD_USER`;

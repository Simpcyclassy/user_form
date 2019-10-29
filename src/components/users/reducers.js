import { ADD_USER, RESET_UPDATE_STATE, UPDATE_USERS_LIST } from './actionTypes';

const initialState = {
    isUpdated: false,
    users: [],
};

const addUsers = (items, newItem) => {
    items.push(newItem);
    return items;
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_USERS_LIST: {
            const { payload: newUser } = action;
            return {
                ...state,
                isUpdated: false,
                users: [...newUser],
            };
        }

        case ADD_USER: {
            const { users } = state;
            const { payload: item } = action;
            return {
                ...state,
                isUpdated: true,
                users: addUsers(users, item),
            };
        }

        case RESET_UPDATE_STATE: {
            return {
                ...state,
                isUpdated: false,
            };
        }
        default:
            return state;
    }
};

import { ADD_USER, REMOVE_USER, RESET_UPDATE_STATE, UPDATE_USERS_LIST } from './actionTypes';

const dataSource = [
    {
        age: '24',
        birthday: '2000-10-02',
        firstName: 'Chioma',
        hobby: 'Learning',
        id: '1',
        lastName: 'Onyekpere',
    },
    {
        age: '26',
        birthday: '1900-09-02',
        firstName: 'Tony',
        hobby: 'Hiking',
        id: '2',
        lastName: 'Mecca',
    },
    {
        age: '21',
        birthday: '1960-10-01',
        firstName: 'Lucia',
        hobby: 'Swimming',
        id: '3',
        lastName: 'Lucious',
    },
];

const initialState = {
    isUpdated: false,
    users: dataSource,
};

const removeUsers = (items, id) => {
    const filteredItems = items.filter(user => user !== id);
    return [...filteredItems];
};

const addUsers = (items, newItem) => {
    items.push(newItem);
    return items;
};

export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_USERS_LIST: {
            return {
                ...state,
            };
        }

        case REMOVE_USER: {
            const { users } = state;
            const { payload: { id } } = action;

            return {
                ...state,
                users: removeUsers(users, id),
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

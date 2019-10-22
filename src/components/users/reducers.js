import { ADD_USER, REMOVE_USER, UPDATE_USERS_LIST } from './actionTypes';

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
    users: {},
    isUpdated: false,
};

const generateUsersObject = array =>
    array.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});

const removeUsers = (items, id) => {
    items[id] && delete items[id];
    return { ...items };
};

const addUsers = (items, newItem) => {
    const { id } = newItem;
    items[id] = newItem;
    return { ...items };
};


export default (state = { ...initialState }, action) => {
    switch (action.type) {
        case UPDATE_USERS_LIST: {
            return {
                ...state,
                users: generateUsersObject(dataSource),
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
            const { payload: { item } } = action;
            return {
                ...state,
                isUpdated: true,
                users: addUsers(users, item),
            };
        }

        default:
            return state;
    }
};

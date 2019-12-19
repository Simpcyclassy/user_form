/** @constant */
export const NAME = 'users';

/** @constant */
export const USERS_URL = 'https://us-central1-simpcys-firstcasts.cloudfunctions.net/users';

/** @constant */
export const TABLE_TEXTS = {
    ACTION: 'action',
    ACTION_: 'Action',
    AGE: 'age',
    AGE_: 'Age',
    BIRTHDAY: 'birthday',
    BIRTH_DAY: 'Birthday',
    DANGER: 'danger',
    DELETE: 'delete',
    FIRSTNAME: 'firstName',
    FIRST_NAME: 'First Name',
    HOBBY: 'hobby',
    HOBBY_: 'Hobby',
    ID: 'id',
    LASTNAME: 'lastName',
    LAST_NAME: 'Last Name',
    POP_QUESTION: 'Are you sure you want to remove item?',
    USER_ID: 'User Id',
};

/** @constant */
export const MODAL_TEXTS = {
    ADD_USER: 'Add a new User',
    BIRTHDAY: 'birthday',
    BIRTH_DAY: 'Birthday',
    DATE_PICKER: 'date-picker',
    OBJECT: 'object',
    OK_TEXT: 'Create User',
    PRIMARY: 'primary',
    RULES: 'Please select your birthday!',
    TITLE: 'Add a new collection',
    VERTICAL: 'vertical',
};

/** @constant */
export const INPUTS = [
    {
        field: 'firstName',
        label: 'First name',
        rules: [{ message: 'Please input your first name', required: true }],
    },
    {
        field: 'lastName',
        label: 'Last Name',
        rules: [{ message: 'Please input your last name', required: true }],
    },
    {
        field: 'age',
        label: 'Age',
        rules: [{ message: 'Please input your age!', required: true }],
    },
    {
        field: 'hobby',
        label: 'Hobby',
        rules: [{ message: 'Please input your hobby!', required: true }],
    },
];

/** @constant */
export const FORM_ITEM_LAYOUT = {
    labelCol: {
        sm: { span: 8 },
        xs: { span: 20 },
    },
    wrapperCol: {
        sm: { span: 16 },
        xs: { span: 20 },
    },
};

export const dataSource = [
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

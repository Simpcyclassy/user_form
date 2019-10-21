/** @constant */
export const TABLE_TEXTS = {
    ACTION: 'action',
    AGE: 'age',
    AGE_: 'age',
    BIRTHDAY: 'birthday',
    BIRTH_DAY: 'Birthday',
    DANGER: 'danger',
    DELETE: 'delete',
    FIRSTNAME: 'firstName',
    FIRST_NAME: 'First Name',
    HOBBY: 'hobby',
    HOBBY_: 'hobby',
    LASTNAME: 'lastName',
    LAST_NAME: 'Last Name',
    POP_QUESTION: 'Are you sure you want to remove item?',
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

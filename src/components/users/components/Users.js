import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Icon, Popconfirm, Table } from 'antd';
import uuid from 'uuid/v1';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserModal from './UserModal';
import * as actions from '../actions';
import { getisUpdated, getUsers } from '../selectors';
import { MODAL_TEXTS, TABLE_TEXTS } from '../constants';

const { ADD_USER, DATE_PICKER, PRIMARY } = MODAL_TEXTS;
const {
    ACTION,
    ACTION_,
    AGE,
    AGE_,
    BIRTHDAY,
    BIRTH_DAY,
    DANGER,
    DELETE,
    FIRST_NAME,
    FIRSTNAME,
    HOBBY,
    HOBBY_,
    LASTNAME,
    LAST_NAME,
    POP_QUESTION,
} = TABLE_TEXTS;
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

const Users = props => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);

    useEffect(() => {
        const { isUpdated } = props;
        const { updateUsersList, resetUpdateState } = props.actions;
        updateUsersList();

        if (visible && isUpdated) {
            setVisible(false);
            resetUpdateState();
        }
    });

    const handleRemove = id => {
        const { removeUser } = props.actions;
        const payload = { id };
        removeUser(payload);
    };

    const handleCreate = () => {
        const { form } = formRef.props;
        const { addUser } = props.actions;
        form.validateFields((error, values) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const user = {
                age: values.age,
                birthday: values[DATE_PICKER].format('YYYY-MM-DD'),
                firstName: values.firstName,
                hobby: values.hobby,
                id: uuid(),
                lastName: values.lastName,
            };
            addUser(user);
        });
    };

    const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node);
        }
    }, []);

    const { users } = props;
    console.log(users);
    const values = Object.values(users);

    return (
        <div>
            <Button onClick={() => setVisible(true)} type={PRIMARY}>{ADD_USER}</Button>
            <UserModal
                wrappedComponentRef={saveFormRef}
                visible={visible}
                onCancel={() => setVisible(false)}
                onCreate={() => handleCreate()}
            />
            <Table
                dataSource={dataSource}
                columns={
                    [
                        {
                            dataIndex: FIRSTNAME,
                            key: FIRSTNAME,
                            title: FIRST_NAME,
                        },
                        {
                            dataIndex: LASTNAME,
                            key: LASTNAME,
                            title: LAST_NAME,
                        },
                        {
                            dataIndex: BIRTHDAY,
                            key: BIRTHDAY,
                            title: BIRTH_DAY,
                        },
                        {
                            dataIndex: AGE,
                            key: AGE,
                            title: AGE_,
                        },
                        {
                            dataIndex: HOBBY,
                            key: HOBBY,
                            title: HOBBY_,
                        },
                        {
                            key: ACTION,
                            render: (text, record) => (
                                <Popconfirm
                                    title={POP_QUESTION}
                                    onConfirm={() => handleRemove(record.id)}
                                >
                                    <Icon className={DANGER} type={DELETE} />
                                </Popconfirm>
                            ),
                            title: ACTION_,
                        },
                    ]
                }
                rowKey={record => record.id}
            />
        </div>
    );
};

Users.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    isUpdated: PropTypes.bool,
    updateUsersList: PropTypes.objectOf(PropTypes.func),
    users: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => ({
    isUpdated: getisUpdated(state),
    users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

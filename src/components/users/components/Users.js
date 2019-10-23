import React, { useCallback, useEffect, useState } from 'react';
import { Button, Icon, Popconfirm, Table } from 'antd';
import uuid from 'uuid/v1';
import { useDispatch, useSelector } from 'react-redux';

import UserModal from './UserModal';
import * as actions from '../actions';
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

const Users = () => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);

    const users = useSelector(state => state.users);
    console.log(users);
    const tableData = Object.values(users);
    const isUpdated = useSelector(state => state.isUpdated);
    const dispatch = useDispatch();

    useEffect(() => {
        const { updateUsersList, resetUpdateState } = actions;
        dispatch(updateUsersList());

        if (visible && isUpdated) {
            setVisible(false);
            dispatch(resetUpdateState());
        }
    }, []);

    const handleRemove = id => {
        const { removeUser } = actions;
        const payload = { id };
        dispatch(removeUser(payload));
    };

    const handleCreate = () => {
        const { form } = formRef.props;
        const { addUser } = actions;
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
            dispatch(addUser(user));
        });
    };

    const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node);
        }
    }, []);

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
                dataSource={tableData}
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

export default Users;

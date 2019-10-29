import React, { shallowEqual, useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import UserModal from './UserModal';
import * as actions from '../actions';
import { MODAL_TEXTS, TABLE_TEXTS } from '../constants';
import { getisUpdated, getUsers } from '../selectors';

const { ADD_USER, DATE_PICKER, PRIMARY } = MODAL_TEXTS;
const {
    AGE,
    AGE_,
    BIRTHDAY,
    BIRTH_DAY,
    FIRST_NAME,
    FIRSTNAME,
    HOBBY,
    HOBBY_,
    ID,
    LASTNAME,
    LAST_NAME,
    USER_ID,
} = TABLE_TEXTS;

const Users = () => {
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);

    const { users, isUpdated } = useSelector(state => ({
        isUpdated: getisUpdated(state),
        users: getUsers(state),
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        const { resetUpdateState } = actions;

        if (visible && isUpdated) {
            setVisible(false);
            dispatch(resetUpdateState());
        }
    }, [dispatch, isUpdated, visible]);
    const handleCreate = () => {
        const { form } = formRef.props;
        const { requestProductUpdate } = actions;
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
                lastName: values.lastName,
            };
            dispatch(requestProductUpdate(user));
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
                dataSource={users}
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
                            dataIndex: ID,
                            key: ID,
                            title: USER_ID,
                        },
                    ]
                }
                rowKey={record => record.id}
            />
        </div>
    );
};

export default Users;

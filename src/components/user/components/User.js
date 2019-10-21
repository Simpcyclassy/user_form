/* eslint-disable consistent-return */
import React from 'react';
import { Button, Icon, Popconfirm, Table } from 'antd';
import uuid from 'uuid/v1';

import UserModal from './UserModal';
import { MODAL_TEXTS, TABLE_TEXTS } from '../constants';

const { ADD_USER, DATE_PICKER, PRIMARY } = MODAL_TEXTS;
const {
    ACTION,
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

const users = [
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

class List extends React.Component {
    state = {
        users,
        visible: false,
    };

    handleRemove = name => {
        const filteredItems = this.state.users.filter(user => user !== name);
        this.setState({
            users: [...filteredItems],
        });
    }

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((error, values) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const newUsers = {
                age: values.age,
                birthday: values[DATE_PICKER].format('YYYY-MM-DD'),
                firstName: values.firstName,
                hobby: values.hobby,
                id: uuid(),
                lastName: values.lastName,
            };
            this.setState(e => ({
                users: [...e.users, newUsers],
                visible: false,
            }));
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    render() {
        const { visible } = this.state;

        return (
            <div>
                <Button onClick={this.showModal} type={PRIMARY}>{ADD_USER}</Button>
                <UserModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <Table
                    dataSource={this.state.users}
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
                                        onConfirm={() => this.handleRemove(record)}
                                    >
                                        <Icon className={DANGER} type={DELETE} />
                                    </Popconfirm>
                                ),
                                title: ACTION,
                            },
                        ]
                    }
                    rowKey={record => record.id}
                />
            </div>
        );
    }
}

export default List;

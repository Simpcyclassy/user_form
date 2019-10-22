/* eslint-disable consistent-return */
import React from 'react';
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

class List extends React.Component {
    state = {
        visible: false,
    };
    componentDidMount() {
        const { updateUsersList } = this.props.actions;
        updateUsersList();
    }

    handleRemove = id => {
        const { removeUser } = this.props.actions;
        const payload = { id };
        removeUser(payload);
    };

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const { form } = this.formRef.props;
        const { addUser } = this.props.actions;
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

    componentDidUpdate() {
        const { isUpdated } = this.props;
        const { visible } = this.state;
        const { resetUpdateState } = this.props.actions;

        if (visible && isUpdated) {
            this.setState({ visible: false });
            resetUpdateState();
        }
    }
    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    render() {
        const { visible } = this.state;
        const { users } = this.props;
        console.log(users);
        const values = Object.values(users);

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
                    dataSource={values}
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
                                        onConfirm={() => this.handleRemove(record.id)}
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
    }
}

const mapStateToProps = state => ({
    users: getUsers(state),
    isUpdated: getisUpdated(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

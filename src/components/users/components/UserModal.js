import PropTypes from 'prop-types';
import React from 'react';
import { Form, Input, Modal, DatePicker } from 'antd';

import { FORM_ITEM_LAYOUT, INPUTS, MODAL_TEXTS } from '../constants';

const { BIRTHDAY, BIRTH_DAY, DATE_PICKER, OBJECT, OK_TEXT, RULES, TITLE, VERTICAL } = MODAL_TEXTS;

const { Item } = Form;

function generateUserInputs(decorator) {
    return INPUTS.map(({ field, inputType, label, rules }) => (
        <Item key={field} {...FORM_ITEM_LAYOUT} label={label}>
            {decorator(field, {
                rules,
            })(<Input type={inputType} />)}
        </Item>
    ));
}

class UserForm extends React.Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        const config = {
            rules: [{ message: RULES, required: true, type: OBJECT }],
        };
        return (
            <Modal
                visible={visible}
                title={TITLE}
                okText={OK_TEXT}
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout={VERTICAL}>
                    {generateUserInputs(getFieldDecorator)}
                    <Item {...FORM_ITEM_LAYOUT} label={BIRTHDAY} key={BIRTH_DAY}>
                        {getFieldDecorator(DATE_PICKER, config)(<DatePicker />)}
                    </Item>
                </Form>
            </Modal>
        );
    }
}

const UserModal = Form.create()(UserForm);

UserForm.propTypes = {
    form: PropTypes.objectOf(PropTypes.func),
    isLoading: PropTypes.bool,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default UserModal;

import React, { PropTypes } from 'react'
import { Form, Input, Modal, Button, Icon ,message} from 'antd'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

function Pop ({ form, visible, onOk, onCancel }) {
  const { getFieldDecorator, validateFields, getFieldsValue, setFieldsValue,resetFields } = form

  function handleOk () {
    validateFields((errors) => {
      if (!!errors) {
        return
      }
      onOk({...getFieldsValue()})
      resetFields()
    })
  }
  function handleCancel () {
    resetFields()
    onCancel()
  }
    const modalOpts = {
    title: '添加beacon',
    visible,
    onOk: handleOk,
    onCancel: handleCancel
  }

    return (
    <Modal {...modalOpts}>
      <Form horizontal>

        <FormItem label='device_id：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('device_id', { 
              validate: [{
                rules: [
                  { required: true, message: '不能为空' }
                ],
                trigger: ['onBlur', 'onChange']
              }]
          })(
            <Input/>
          )}
        </FormItem>
      </Form>
    </Modal>
  )
}

    export default Form.create()(Pop)
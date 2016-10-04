import React, { PropTypes } from 'react'
import { Form, Input, Modal } from 'antd'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

function Pop ({ form, item, type, visible, onOk, onCancel}) {
  const { getFieldsValue } = form

  function handleOk () {
    console.log(item)
    // console.log(...getFieldsValue(), key: item.key||{})
    // const data = { ...getFieldsValue(), key: item.key||{} }
    // onOk(data)
  }

  const modalOpts = {
    title: type,
    visible,
    onOk: handleOk,
  onCancel}

  if(!item) {
    item.name = 0;
    item.address = '';
    item.age = 0;
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='姓名：' hasFeedback {...formItemLayout}>
          <Input value={item[name] || ''}/>
        </FormItem>
        <FormItem label='年龄：' hasFeedback {...formItemLayout}>
          <Input value={item[name] || ''}/>
        </FormItem>
        <FormItem label='住址：' hasFeedback {...formItemLayout}>
          <Input value={item[name] || ''}/>
        </FormItem>
      </Form>
    </Modal>
  )
}

Pop.propTypes = {
  form: PropTypes.object,
  item: PropTypes.object,
  type: PropTypes.string,
  visible: PropTypes.any,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

export default Form.create()(Pop)

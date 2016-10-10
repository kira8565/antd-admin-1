import React, { PropTypes } from 'react'
import { Form, Input, Modal, Select, InputNumber, Upload, Button, Icon ,message} from 'antd'
const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}
const uploadProp = {
  multiple: false,
  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('只能上传jpg文件');
    }
    return isJPG;
  },
  action: "http://localhost:3000/api/upload",
  listType: "picture"
}

function Pop ({ form, item, type, visible, onOk, onCancel }) {
  const { getFieldDecorator, validateFields, getFieldsValue, setFieldsValue,resetFields } = form

  function handleUpload(info) {
    if(getFieldsValue().fake && getFieldsValue().fake.fileList.length === 0) {
      setFieldsValue({['avator']: undefined })
      return
    }

    if (info.file.status !== 'uploading') {
      console.log(info.file.response);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 图片上传成功`);
      if(getFieldsValue().fake.fileList.length>1){
        getFieldsValue().fake.fileList.shift()
      }
      const url = getFieldsValue().fake.file.response.data.url
      setFieldsValue({['avator']: url } )

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 图片上传失败`);
    }
  }

      

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
  function checkAvator(rule, value, callback) {
    if(!getFieldsValue().avator) {
      callback('必须上传一张图片')
    } else {
      callback()
    }
  }


  const modalOpts = {
    title: type,
    visible,
    onOk: handleOk,
    onCancel: handleCancel
  }


function q (){
  if(item.avator){
    return [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: item.avator ,
      thumbUrl: item.avator ,
    }]
  } else{
    return
  }
}



  return (
    <Modal {...modalOpts}>
      <Form horizontal>



<FormItem label="头像：" {...formItemLayout} hasFeedback>
    {getFieldDecorator('fake', {
      rules: [
        { validator: checkAvator },
      ],
    })(
      <Upload {...uploadProp} onChange={handleUpload}   >
      <Button type="ghost">
        <Icon type="upload" /> 点击上传
        </Button>
      </Upload>
    )}
 </FormItem>



        <FormItem label='头像：'  {...formItemLayout} style={{display:'none'}}>
          {getFieldDecorator('avator', {
              initialValue: item.avator || undefined,
            })(
              <Input autoComplete="off"/>
            )}
        </FormItem>


        <FormItem label='姓名：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
              initialValue: item.name || undefined,
              validate: [{
                rules: [
                  { required: true, message: '不能为空' }
                ],
                trigger: ['onBlur', 'onChange']
              }]
            })(
              <Input autoComplete="off"/>
            )}
        </FormItem>

        <FormItem label='昵称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('nickname', {
              initialValue: item.nickname || undefined,
              validate: [{
                rules: [
                  { required: true, message: '不能为空' }
                ],
                trigger: ['onBlur', 'onChange']
              }]
            })(
              <Input autoComplete="off"/>
            )}
        </FormItem>

        <FormItem label='性别：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('sex', {
            initialValue: item.sex || '男',
            rules: [
              { required: true, message: '请选择性别' },
            ],
          })(
          <Select style={{ width: 60 }}>
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
          )}
        </FormItem>

        <FormItem label='年龄：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('age', { 
            initialValue: item.age || 20 
          })(
            <InputNumber min={1} max={150} style={{ width: 100 }} />
          )}
        </FormItem>

        <FormItem label='介绍：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('introduce', {
              initialValue: item.introduce || undefined,
              validate: [{
                rules: [
                  { required: true, message: '不能为空' }
                ],
                trigger: ['onBlur', 'onChange']
              }]
            })(
              <Input type="textarea" autoComplete="off"/>
            )}
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

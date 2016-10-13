import React, { PropTypes } from 'react'
import { Form, Input, Modal, Select, InputNumber, Upload, Button, Icon ,message} from 'antd'
import ColorThief from '../../utils/color-thief.js'
const colorThief = new ColorThief();


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

function Pop ({ form, item, type, visible, onOk, onCancel,selectAllAuthors }) {
  const { getFieldDecorator, validateFields, getFieldsValue, setFieldsValue,resetFields } = form





  function handleUpload(info) {
    if(getFieldsValue().fake && getFieldsValue().fake.fileList.length === 0) {
      setFieldsValue({['img']: undefined })
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
      setFieldsValue({['img']: url } )
      const img = new Image();
      img.src = url;
      img.onload = ()=>{
        const color = colorThief.getColor(img)
        setFieldsValue({['color']: color.toString() } )
      }

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 图片上传失败`);
    }
  }

      

  function handleOk () {
    console.log(getFieldsValue())
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
    if(!getFieldsValue().img) {
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


// const selectAllAuthors

  return (
    <Modal {...modalOpts}>
      <Form horizontal>

        <FormItem label="作品图片：" {...formItemLayout} hasFeedback>
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

        <FormItem label='作品图片：'  {...formItemLayout} style={{display:'none'}}>
          {getFieldDecorator('img', {
              initialValue: item.img || undefined,
            })(
              <Input autoComplete="off"/>
            )}
        </FormItem>

        <FormItem label='作品名称：' hasFeedback {...formItemLayout}>
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

        <FormItem label='作品材质：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('material', {
              initialValue: item.material || undefined,
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

        <FormItem label='作者：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('AuthorId', {
            initialValue: !!item.AuthorId?item.AuthorId+'':undefined,
            rules: [
              { required: true, message: '请选择作者' },
            ],
          })(
          <Select style={{ width: 60 }}>
          {
            selectAllAuthors.map((item,index)=>{
              return(<Option value={item.id+''} key={index}>{item.name}</Option>)
            })
          }
          </Select>
          )}
        </FormItem>

        <FormItem label='uuid：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('uuid', { 
            initialValue: item.uuid || undefined,
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

        <FormItem label='尺寸：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('size', { 
            initialValue: item.size || undefined,
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

        <FormItem label='语音：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('voice', { 
            initialValue: item.voice || undefined,
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

        <FormItem label='年份：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('year', { 
            initialValue: item.year || undefined,
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

        <FormItem label='颜色：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('color', { 
            initialValue: item.color || undefined,
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

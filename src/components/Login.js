import React from 'react'
import style from './Login.less'
import { Button, Form, Input } from 'antd'
const FormItem = Form.Item

const Login = ({ logining, form, onLogin }) => {

  const { getFieldDecorator, validateFields, getFieldsValue } = form
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onLogin(getFieldsValue())
    });
  }

  return (
    <div className={style.container}>
      <div className={style.title}>
        <span>管理员登录</span>
      </div>
      <Form horizontal onSubmit={handleSubmit}>
        <FormItem hasFeedback>
          {getFieldDecorator('account', {
             validate: [{
               rules: [
                 { required: true, message: '不能为空' }
               ],
               trigger: ['onBlur', 'onChange']
             }]
           })(
             <Input placeholder='账户' disabled={logining} />
           )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
             validate: [{
               rules: [
                 { required: true, message: '不能为空' }
               ],
               trigger: ['onBlur', 'onChange']
             }]
           })(
             <Input type='password' placeholder='密码' disabled={logining} />
           )}
        </FormItem>
        <FormItem hasFeedback>
          <Button type='primary' loading={logining} htmlType='submit'>
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}

Login.propTypes = {
}

export default Form.create()(Login)

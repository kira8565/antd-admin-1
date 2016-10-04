import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import styles from './Search.less'
const Option = Select.Option
const FormItem = Form.Item
const Search = ({form, onSearch, onAdd}) => {


  const { getFieldDecorator, validateFields, getFieldsValue } = form
  function handleSubmit (e) {
    e.preventDefault()
    validateFields((errors) => {
      if (!!errors) {
        return
      }
      onSearch(getFieldsValue())
    })
  }

  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        <Form inline onSubmit={handleSubmit}>
          <FormItem>
            <Select defaultValue='name' style={{ width: 65 }}>
              <Option value='name'>
                姓名
              </Option>
              <Option value='sex'>
                性别
              </Option>
            </Select>
          </FormItem>
          <FormItem hasFeedback style={{marginBottom: 0}}>
            {getFieldDecorator('keyword', {
               validate: [{
                 rules: [
                   { required: true, message: '不能为空' }
                 ],
                 trigger: ['onBlur', 'onChange']
               }]
             })(
               <Input placeholder='完整关键词' />
             )}
          </FormItem>
          <FormItem>
            <Button style={{ marginRight: '10px' }} type='primary' htmlType='submit'>
              搜索
            </Button>
          </FormItem>
        </Form>
      </div>
      <div>
        <Button type='ghost' size='large' onClick={onAdd}>
          添加
        </Button>
      </div>

    </div>
  )
}

Search.propTypes = {
}
export default Form.create()(Search)

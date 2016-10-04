import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import styles from './Search.less'

const Search = ({form, field, keyword, onSearch, onAdd}) => {

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
          <Form.Item>
            <Select>
              <Select.Option value='name'>
                名字
              </Select.Option>
              <Select.Option value='address'>
                地址
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item hasFeedback>
            <Input />
          </Form.Item>
          <Button style={{ marginRight: '10px' }} type='primary' htmlType='submit'>
            搜索
          </Button>
        </Form>
      </div>
      <div className={styles.create}>
        <Button type='ghost' onClick={onAdd}>
          添加
        </Button>
      </div>
    </div>
  )
}

Search.propTypes = {
}
export default Form.create()(Search)

import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import styles from './Search.less'
const Option = Select.Option
const FormItem = Form.Item
const Search = ({form, onSearch, onAdd, field, keyword}) => {


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

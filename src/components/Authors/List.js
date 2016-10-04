import React from 'react'
import { Table, Popconfirm, Pagination } from 'antd'
import styles from './List.less'

const List = ({loading, dataSource, pagination}) => {




  const columns = [
  {
    title: '头像',
    dataIndex: 'avator',
    key: 'avator',
  },{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: '英文名',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '介绍',
    dataIndex: 'introduce',
    key: 'introduce',
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  }, {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={()=>{}}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];





  return (
    <div>
      <Table
        bordered
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
        size="small"
        className={styles.table}
      />
    </div>
  )
}

List.propTypes = {
}

export default List

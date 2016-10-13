import React, { PropTypes } from 'react'
import { Table, Popconfirm, Pagination } from 'antd'
import styles from './List.less'

const List = ({ total, current, loading, dataSource, onPageChange, onDeleteItem, onEditItem }) => {



  const columns = [
    {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    },
  {
    title: '作品图片',
    dataIndex: 'img',
    key: 'img',
    render: text => <img width='24' src={text} />,
  },{
    title: '作品名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  }, {
    title: 'uuid',
    dataIndex: 'uuid',
    key: 'uuid',
  }, {
    title: '作品材质',
    dataIndex: 'material',
    key: 'material',
  }, {
    title: '尺寸',
    dataIndex: 'size',
    key: 'size',
  }, {
    title: '语音',
    dataIndex: 'voice',
    key: 'voice',
  },{
    title: '年份',
    dataIndex: 'year',
    key: 'year',
  },{
        title: '颜色',
    dataIndex: 'color',
    key: 'color',
  }, {
    title: '介绍',
    dataIndex: 'introduce',
    key: 'introduce',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => onEditItem(record)}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.id)}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];





  return (
    <div>
      <Table
        bordered
        size="small"
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
        className={styles.table}
      />
      <Pagination
        className={styles.pagination}
        total={total}
        current={current}
        pageSize={10}
        onChange={onPageChange}
      />
    </div>
  )
}

List.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  total: PropTypes.any,
  current: PropTypes.any
}



export default List

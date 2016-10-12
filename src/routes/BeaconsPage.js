import React, { Component, PropTypes } from 'react';
import { Table, Popconfirm } from 'antd'
import { connect } from 'dva';

function BeaconsPage({ location, dispatch, beacons}) {
    const {list, loading} = beacons

  const columns = [
    {
    title: 'device_id',
    dataIndex: 'device_id',
    key: 'device_id',
    },
        {
    title: 'comment',
    dataIndex: 'comment',
    key: 'comment',
    },
           {
    title: 'major',
    dataIndex: 'major',
    key: 'major',
    },
        {
    title: 'minor',
    dataIndex: 'minor',
    key: 'minor',
    },
        {
    title: 'poi_id',
    dataIndex: 'poi_id',
    key: 'poi_id',
    }, 
        {
    title: 'uuid',
    dataIndex: 'uuid',
    key: 'uuid',
    }, 


     {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => onEditItem(record)}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.device_id)}>
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
        dataSource={list}
        loading={loading}
        rowKey={record => record.device_id}
        pagination={false}
      />
    </div>
  );
}

BeaconsPage.propTypes = {
};

function mapStateToProps ({ beacons }) {
  return {beacons}
}

export default connect(mapStateToProps)(BeaconsPage);

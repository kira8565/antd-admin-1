import React, { Component, PropTypes } from 'react';
import { Table, Popconfirm ,Button} from 'antd'
import { connect } from 'dva';
import styles from './BeaconsPage.less'
import Pop from '../components/Beacons/Pop'

function BeaconsPage({ location, dispatch, beacons}) {
    const {list, loading, modalVisible} = beacons

    function onAdd() {
      dispatch({
        type: 'beacons/showModal'
      })
    }
    function onDeleteItem(device_id){
      dispatch({
        type: 'beacons/delete',
        payload: device_id
      })
    }


    const popProps = {
      visible: modalVisible,
      onOk(data) {
        dispatch({
          type: 'beacons/add',
          payload: data.device_id
        })
      },
      onCancel() {
        dispatch({
          type: 'beacons/hideModal'
        })
      }
    }

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
        <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.device_id)}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

  return (
    <div>
      <div className={styles.normal}>
        <div className={styles.search}>
        </div>
        <div>
          <Button type='ghost' size='large' onClick={onAdd}>
            添加
          </Button>
        </div>
      </div>
      <Table
        bordered
        size="small"
        columns={columns}
        dataSource={list}
        loading={loading}
        rowKey={record => record.device_id}
        pagination={false}
        className={styles.table}
      />
      <Pop {...popProps} />
    </div>
  );
}

BeaconsPage.propTypes = {
};

function mapStateToProps ({ beacons }) {
  return {beacons}
}

export default connect(mapStateToProps)(BeaconsPage);

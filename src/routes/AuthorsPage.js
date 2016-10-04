import React from 'react'
import List from '../components/Authors/List'
import Search from '../components/Authors/Search'
import Modal from '../components/Authors/Modal'
import { connect } from 'dva'
// TODO
import { routerRedux } from 'dva/router'

const AuthorsPage = ({ location, dispatch, authors, modalVisible, modalType, currentItem }) => {
  const { field, keyword } = location.query
  // 这个要改
  console.log(location)
  const searchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      dispatch({
        type: 'authors/query',
        payload: fieldsValue
      })
    },
    onAdd() {
      dispatch({
        type: 'authors/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  const listProps = {
    loading: false,
    pagination: {
      total: 30,
      current: 1,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize)
      },
      onChange(current) {
        console.log('Current: ', current)
      }
    },
    dataSource: [
      {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        name: '王五',
        age: 25,
        address: '上海'
      }
    ]
  }
  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({
        type: `users/${modalType}`,
        payload: data
      })
    },
    onCancel() {
      dispatch({
        type: 'users/hideModal'
      })
    }
  }
  return (
    <div>
      <Search />
      <List {...listProps} />
      <Modal {...modalProps} />
    </div>
  )
}

AuthorsPage.propTypes = {
}

function mapStateToProps ({ authors }) {
  return {authors}
}

export default connect(mapStateToProps)(AuthorsPage)

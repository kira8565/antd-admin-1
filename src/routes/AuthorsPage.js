import React from 'react'
import List from '../components/Authors/List'
import Search from '../components/Authors/Search'
import Pop from '../components/Authors/Pop'
import { connect } from 'dva'
// TODO
import { routerRedux } from 'dva/router'

const AuthorsPage = ({ location, dispatch, authors}) => {
  // console.log(authors)
  const { list, loading, total, current, currentItem, modalType, modalVisible } = authors

  const searchProps = {
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

  const popProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType === 'create' ? '新增作者' : '修改作者',
    visible: modalVisible,
    onOk(data) {
      dispatch({
        type: `authors/${modalType}`,
        payload: data
      })
    },
    onCancel(item) {
      // console.log('cancel')
      // console.log(item)
      dispatch({
        type: 'authors/hideModal'
      })
    }
  }

  const listProps = {
    dataSource: list,
    loading,
    total,
    current,
    onPageChange(page) {
      dispatch(routerRedux.push({
        pathname: '/authors',
        query: { page}
      }))
    },
    onDeleteItem(id) {
      console.log(id)
      dispatch({
        type: 'authors/delete',
        payload: id
      })
    },
    onEditItem(item) {
      dispatch({
        type: 'authors/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    }
  }

  return (
    <div>
      <Search {...searchProps} />
      <Pop {...popProps} />
      <List {...listProps} />
    </div>
  )
}

AuthorsPage.propTypes = {
}

function mapStateToProps ({ authors }) {
  return {authors}
}

export default connect(mapStateToProps)(AuthorsPage)

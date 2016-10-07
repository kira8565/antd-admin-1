import React from 'react'
import List from '../components/Works/List'
import Search from '../components/Works/Search'
import Pop from '../components/Works/Pop'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

const WorksPage = ({ location, dispatch, works}) => {

  const { list, loading, total, current, currentItem, modalType, modalVisible } = works
  const searchProps = {
    onSearch(fieldsValue) {
      dispatch({
        type: 'works/query',
        payload: fieldsValue
      })
    },
    onAdd() {
      dispatch({
        type: 'works/showModal',
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
        type: `works/${modalType}`,
        payload: data
      })
    },
    onCancel(item) {
      // console.log('cancel')
      // console.log(item)
      dispatch({
        type: 'works/hideModal'
      })
    }
  }







  return (
    <div>
      <Search {...searchProps} />
      <Pop {...popProps} />
      <List />
    </div>
  )
}

WorksPage.propTypes = {
}

function mapStateToProps ({ works }) {
  return {works}
}

export default connect(mapStateToProps)(WorksPage)
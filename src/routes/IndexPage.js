import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import styles from './IndexPage.less'
import Login from '../components/Login'

function IndexPage ({ location, dispatch, index }) {
  const { logining, isLogin } = index

  const loginProps = {
    logining,
    onLogin({ account, password }) {
      dispatch({
        type: 'index/login',
        payload: {
          account,
        password}
      })
    }
  }

  if (!isLogin) {
    return <Login {...loginProps} />
  }

  return (
    <div>
      wef
    </div>
  )
}

IndexPage.propTypes = {
}

const mapStateToProps = ({ index }) => {
  return { index}
}

export default connect(mapStateToProps)(IndexPage)

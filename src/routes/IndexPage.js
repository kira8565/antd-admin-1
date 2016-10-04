import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import styles from './IndexPage.less'
import Login from '../components/Login'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Sidebar from '../components/Layout/Sidebar'

function IndexPage ({ location, dispatch, index, children }) {
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
  const headerProps = {
    onLogout() {
      dispatch({
        type: 'index/logout'
      })
    }
  }

  if (!isLogin) {
    return <Login {...loginProps} />
  }

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <div className={styles.main}>
        <Header {...headerProps} />
        <div className={styles.margin}>
          <div className={styles.content}>
            <div style={{ height: 590 }}>
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

IndexPage.propTypes = {
}

const mapStateToProps = ({ index }) => {
  return { index}
}

export default connect(mapStateToProps)(IndexPage)

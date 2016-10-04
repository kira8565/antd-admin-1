import React from 'react'
import styles from './Header.less'
import { Icon, Menu } from 'antd'
const SubMenu = Menu.SubMenu

const Header = ({ onLogout }) => {
  return (
    <div className={styles.container}>
      <span onClick={onLogout}><Icon type="user" />登出</span>
    </div>
  )
}

Header.propTypes = {
}

export default Header

import React from 'react'
import styles from './Header.less'
import { Icon, Menu } from 'antd'
const SubMenu = Menu.SubMenu

const Header = ({ onLogout }) => {
  return (
    <div>
      <Menu mode='horizontal'>
        <SubMenu className={styles.submenu} title={<span><Icon type="user" />admin</span>}>
          <Menu.Item className={styles.item} key='logout'>
            <a onClick={onLogout}>注销</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

Header.propTypes = {
}

export default Header
